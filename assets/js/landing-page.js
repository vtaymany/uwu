$('#user-submit').click(function () {
  localStorage.clear()
  const userSearchTerm = $('#user-search').val()
  const userSearchCategory = $("input[name='search-category']:checked").val()
  console.log(userSearchTerm)
  console.log(userSearchCategory)
  localStorage.setItem('userSearchTerm', JSON.stringify(userSearchTerm))
  localStorage.setItem('userSearchCategory', JSON.stringify(userSearchCategory))
})
