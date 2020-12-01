$(document).ready(function () {
  const userSearchTerm = JSON.parse(localStorage.getItem('userSearchTerm'))
  const userSearchCategory = JSON.parse(
    localStorage.getItem('userSearchCategory')
  )
  console.log(userSearchTerm)
  console.log(userSearchCategory)

  //Video games
  if (userSearchCategory == 'videoGames') {
    gameTitle = userSearchTerm.replace(/\s+/g, '-').toLowerCase()
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
  }
})
