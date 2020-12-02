$(document).ready(function () {
  const userSearchTerm = JSON.parse(localStorage.getItem('userSearchTerm'))
  const userSearchCategory = JSON.parse(
    localStorage.getItem('userSearchCategory')
  )

  //Video games
  if (userSearchCategory == 'videoGames') {
    const gameTitle = userSearchTerm.replace(/\s+/g, '-').toLowerCase()
    var queryURL =
      'https://api.rawg.io/api/games/' + gameTitle + '/suggested?page_size=5'
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function (response) {
      for (i = 0; i < 24; i++) {
        let resultsContainer = $('#results-section')
        let videoGameImageURL = response.results[i].background_image
        let videoGameName = response.results[i].name
        let videoGameShortDescription = response.results[i].short_description
        let videoGameInfo =
          '<div class="column is-3-tablet is-6-mobile"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="' +
          videoGameImageURL +
          '"alt="Image"/></figure></div><div class="card-content"><div class="media"><div class="media-content"><p class="title is-4">' +
          videoGameName +
          '</p></div></div><div class="content">' +
          videoGameShortDescription +
          '</div></div></div></div>'
        resultsContainer.append(videoGameInfo)
      }
    })
    //Anime
  } else if (userSearchCategory == 'anime') {
    var animeTitle = userSearchTerm.replace(/\s+/g, '-').toLowerCase()
    var idQuery =
      'https://api.jikan.moe/v3/search/anime?q=' + animeTitle + '&page=1'

    $.ajax({
      url: idQuery,
      method: 'GET',
    }).then(function (response) {
      //getting recommendations with animeID 'int'
      const animeID = response.results[0].mal_id
      const queryURL =
        'https://api.jikan.moe/v3/anime/' + animeID + '/recommendations'

      $.ajax({
        url: queryURL,
        method: 'GET',
      }).then(function (response) {
        for (i = 0; i < 25; i++) {
          let resultsContainer = $('#results-section')
          let animeImageURL = response.recommendations[i].image_url
          let animeName = response.recommendations[i].title
          let animeInfo =
            '<div class="column is-3-tablet is-6-mobile"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="' +
            animeImageURL +
            '"alt="Image"/></figure></div><div class="card-content"><div class="media"><div class="media-content"><p class="title is-4">' +
            animeName +
            '</p></div></div><div class="content"></div></div></div></div>'
          resultsContainer.append(animeInfo)
        }
      })
    })
    //Movies
  } else if (userSearchCategory == 'movie') {
    // set variables
    const movieAPIKey = '7a49f9648ab50de4152b3f1cf3a37f81'
    const movieTitle = userSearchTerm.replace(/\s+/g, '-').toLowerCase()

    // Here we are building the URL we need to query the database
    var queryURL =
      'https://api.themoviedb.org/3/search/movie?api_key=' +
      movieAPIKey +
      '&language=en-US&query=' +
      movieTitle

    // Here we run the AJAX call to TMDb API for the userinputted movie information
    $.ajax({
      url: queryURL,
      method: 'GET',
    })
      // Storing all of the retrieved data inside of an object called "response"
      .then(function (response) {
        // Log the object
        //store the response object in a variable
        // const results = response.data
        // console.log(results)
        // Looping through each result item

        const movieID = response.results[0].id
        //Here we are building the URL we need to query the database
        var newQueryURL =
          'https://api.themoviedb.org/3/movie/' +
          movieID +
          '/recommendations?api_key=' +
          movieAPIKey +
          '&language=en-US&page=1'

        // Here we run the AJAX call to the TMDb API for the movie recommendations
        $.ajax({
          url: newQueryURL,
          method: 'GET',
        })

          // We store all of the retrieved data inside of an object called "response"
          .then(function (response) {
            // Log the object
            for (i = 0; i < 24; i++) {
              let resultsContainer = $('#results-section')
              let movieImageURL = response.results[i].backdrop_path
              let movieName = response.results[i].title
              let movieShortDescription = response.results[i].overview
              let movieInfo =
                '<div class="column is-3-tablet is-6-mobile"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://image.tmdb.org/t/p/w500' +
                movieImageURL +
                '"alt="Image"/></figure></div><div class="card-content"><div class="media"><div class="media-content"><p class="title is-4">' +
                movieName +
                '</p></div></div><div class="content">' +
                movieShortDescription +
                '</div></div></div></div>'
              resultsContainer.append(movieInfo)
            }
          })
      })
  }
})
