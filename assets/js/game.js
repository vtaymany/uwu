var gameInput = JSON.stringify($("#user-input").val());
//converts spaces in string to dashes
gameInput = gameInput.replace(/\s+/g, '-').toLowerCase();

var queryURL = "https://api.rawg.io/api/games/"+ gameInput + "/suggested?page_size=5";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
})

