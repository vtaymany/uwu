// // obtaining anime ID 'int' from MyAnimeList

// // var animeTitle = $("#user-search").val();
// var animeTitle = "one punch man";
// var idQuery = "https://api.jikan.moe/v3/search/anime?q=" + animeTitle + "&page=1";

// $.ajax({
//     url: idQuery,
//     method: "GET"
// }).then(function(response) {
//     console.log(response)

//     //getting recommendations with animeID 'int'

//     var animeID = response.results[0].mal_id;
//     var queryURL = "https://api.jikan.moe/v3/anime/" + animeID + "/recommendations";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response)
//     })
// })