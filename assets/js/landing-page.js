$('#user-submit').click(function () {
  const userSearchTerm = $('#user-search').val()
  const userSearchCategory = $("input[name='search-category']:checked").val()
  console.log(userSearchTerm)
  console.log(userSearchCategory)
})
