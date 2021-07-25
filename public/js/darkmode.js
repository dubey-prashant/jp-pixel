$(() => {
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = $('#dark-mode-toggle')

  // ENABLE DARKMODE
  const enableDarkMode = () => {
    // 1. set '.darkmode' class to body & store to localStorage
    $('body').addClass('darkmode')
    $('.toggle-icon').removeClass('fa-moon').addClass('fa-lightbulb')
    localStorage.setItem('darkMode', 'enabled')
  }

  // DISABLE DARKMODE
  const disableDarkMode = () => {
    // 1. set '.darkmode' class to body & store to localStorage
    $('body').removeClass('darkmode')
    $('.toggle-icon').removeClass('fa-lightbulb').addClass('fa-moon')
    localStorage.setItem('darkMode', null)
  }

  // CHECK DARKMODE AND SET IT TO THE VALUE IN LOCALSTORAGE
  if (darkMode === 'enabled') {
    enableDarkMode()
  }
  else {
    disableDarkMode()
  }

  // TOGGLE DARKMODE
  darkModeToggle.on('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
      enableDarkMode()
      console.log(darkMode)
    } else {
      disableDarkMode()
      console.log(darkMode)
    }
  })
})