$(() => {
  function changeTheme () {
    if ($('#theme-switch').prop('checked')) {
      $('body').removeClass('light-theme')
      $('body').addClass('dark-theme')

      $('#discord-logo').prop('src', '/img/icons/Discord/white.svg')
      $('#twitter-logo').prop('src', '/img/icons/Twitter/white.svg')
      $('#github-logo').prop('src', '/img/icons/Github/white.png')
      $('#youtube-logo').prop('src', '/img/icons/Youtube/white.png')
    } else {
      $('body').removeClass('dark-theme')
      $('body').addClass('light-theme')

      $('#discord-logo').prop('src', '/img/icons/Discord/black.svg')
      $('#twitter-logo').prop('src', '/img/icons/Twitter/black.svg')
      $('#github-logo').prop('src', '/img/icons/Github/black.png')
      $('#youtube-logo').prop('src', '/img/icons/Youtube/black.png')
    }
  }

  changeTheme()

  $('#theme-switch').click(() => {
    changeTheme()
  })
})
