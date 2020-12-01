// set variables
const movieAPIKey = "7a49f9648ab50de4152b3f1cf3a37f81";
let movie = JSON.stringify($("#user-search").val());

//Event listener for the user-submit button that will trigger the function
$("#user-submit").on("click", function() {

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=" + movieAPIKey + "&language=en-US&query=" + movie;

    // Here we run the AJAX call to TMDb API for the userinputted movie information
    $.ajax({
    url: queryURL,
    method: "GET"
    })
        // Storing all of the retrieved data inside of an object called "response"
        .then(function(response) {

            // Log the object
            console.log(response);
            //store the response object in a variable
            let results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

            const movieID = results.id
            

            //Here we are building the URL we need to query the database
            var newQueryURL = "https://api.themoviedb.org/3/movie/" + movieID / "recommendations?api_key=" + movieAPIKey + "&language=en-US&page-1";

            // Here we run the AJAX call to the TMDb API for the movie recommendations
            $.ajax({
            url: newQueryURL,
            method: "GET"
            })

            // We store all of the retrieved data inside of an object called "response"
            .then(function(response) {

                 // Log the object
                 console.log(response);
                 
            }) 
        }
    }) 
})  