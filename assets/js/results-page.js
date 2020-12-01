$(document).ready(function () {
  const userSearchTerm = JSON.parse(localStorage.getItem('userSearchTerm'))
  const userSearchCategory = JSON.parse(
    localStorage.getItem('userSearchCategory')
  )
  console.log(userSearchTerm)
  console.log(userSearchCategory)

  //Video games
  if (userSearchCategory == 'videoGames') {
    const gameTitle = userSearchTerm.replace(/\s+/g, '-').toLowerCase()
    console.log(gameTitle)
    var queryURL =
      'https://api.rawg.io/api/games/' + gameTitle + '/suggested?page_size=5'
    console.log(queryURL)
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function (response) {
      console.log(response)
    })
  } else if (userSearchCategory == 'anime') {
    var animeTitle = userSearchTerm.replace(/\s+/g, '-').toLowerCase()
    var idQuery =
      'https://api.jikan.moe/v3/search/anime?q=' + animeTitle + '&page=1'

    $.ajax({
      url: idQuery,
      method: 'GET',
    }).then(function (response) {
      console.log(response)

      //getting recommendations with animeID 'int'

      const animeID = response.results[0].mal_id
      const queryURL =
        'https://api.jikan.moe/v3/anime/' + animeID + '/recommendations'

      $.ajax({
        url: queryURL,
        method: 'GET',
      }).then(function (response) {
        console.log(response)
      })
    })
  }
})
