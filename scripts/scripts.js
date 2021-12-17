function load() {
  //Add button to open hamburger menu
  let hamburgerIcon = document.body.querySelector('.hamburgerIcon')
  hamburgerIcon.addEventListener('click', function () {
    document.body.querySelector('.hamburger').style.display = 'block'
    document.body.style.overflow = 'hidden'
    hamburgerIcon.style.display = 'none'
  })

  //Add button to close hamburger menu
  let hamburgerClose = document.body.querySelector('.closeBtn-hamburger')
  hamburgerClose.addEventListener('click', function () {
    document.body.querySelector('.hamburger').style.display = 'none'
    document.body.style.overflow = 'initial'
    hamburgerIcon.style.display = 'block'
  })
}
