$(() => {
  if ($(window).width() > 1200) {
    $('.services')[0].lastChild.classList.add('row-cols-3')
    $('.services')[0].lastChild.childNodes.forEach(service => {
      service.classList.remove('col-sm')
      service.classList.add('col')
    })
  }
})
