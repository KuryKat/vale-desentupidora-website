$(() => {
  $('.navbar-on').each((_, item) => {
    if (window.location.href.replace(/#.+/g, '') === item.href) { item.classList += ' is-active' }
  })

  const navbar = $('.navbar')
  const initialNavbarBG = navbar.css('background')
  const initialNavbarBS = navbar.css('box-shadow')
  let transparentNavbar = false

  $(window).scroll(() => {
    if (window.scrollY > 18) {
      if (!transparentNavbar) {
        navbar.css('background', 'rgba(0, 204, 101, 0.6)')
        navbar.css('boxShadow', '0 4px #019900')
        transparentNavbar = true
      }
    } else if (transparentNavbar) {
      navbar.css('background', initialNavbarBG)
      navbar.css('boxShadow', initialNavbarBS)
      transparentNavbar = false
    }
  })

  const navbarBurger = $('.navbar-burger')
  const navbarMenu = $('.navbar-menu')

  navbarBurger.click(() => {
    navbarBurger.toggleClass('is-active')
    navbarMenu.toggleClass('is-active')
  })
})
