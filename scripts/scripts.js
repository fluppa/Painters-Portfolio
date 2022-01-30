function load() {
  //Add button to open hamburger menu
  let hamburgerIcon = document.body.querySelector('.hamburgerIcon')
  hamburgerIcon.addEventListener('click', function () {
    document.body.querySelector('.hamburger').classList.toggle('show')
    document.body.style.overflow = 'hidden'
    hamburgerIcon.style.display = 'none'
  })

  //Add button to close hamburger menu
  let hamburgerClose = document.body.querySelector('.closeBtn-hamburger')
  hamburgerClose.addEventListener('click', () => {
    document.body.querySelector('.hamburger').classList.toggle('show')
    document.body.style.overflow = 'initial'
    hamburgerIcon.style.display = 'block'
  })

  //Skrypt galerii z obrazami
  if (document.querySelector('.gallery-wrapper') !== null) {
    const galleryWrapper = document.querySelector('.gallery-wrapper')
    const gallery = document.querySelector('.fullscreen-wrapper')
    const nextBtn = galleryWrapper.querySelector('.button.next')
    const prevBtn = galleryWrapper.querySelector('.button.prev')
    const closeBtn = galleryWrapper.querySelector('.closeBtn.fullscreen')
    const paintings = galleryWrapper.querySelectorAll('.painting-image')

    let currentPainting

    function displayGallery(currentPainting) {
      gallery.style.display = 'flex'
      document.body.style.overflow = 'hidden'
      if (hamburgerIcon) hamburgerIcon.style.display = 'none'
      let src = paintings[currentPainting].src.replace('/img-min/', '/img/')
      gallery.querySelector('.painting').style.backgroundImage = 'url(' + src + ')'
    }

    closeBtn.addEventListener('click', function () {
      document.body.style.overflow = 'initial'
      gallery.style.display = 'none'
      if (hamburgerIcon) hamburgerIcon.style.display = 'block'
    })

    for (let i = 0; i < paintings.length; i++) {
      paintings[i].addEventListener('click', function () {
        currentPainting = i
        displayGallery(currentPainting)
      })
    }

    nextBtn.addEventListener('click', function () {
      if (currentPainting < paintings.length - 1) currentPainting++
      displayGallery(currentPainting)
    })

    prevBtn.addEventListener('click', function () {
      if (currentPainting > 0) currentPainting--
      displayGallery(currentPainting)
    })
  }

  //Skrypt do menu
  if (document.querySelector('.menu-wrapper') !== null) {
    const tiles = document.querySelectorAll('.tile')
    const mobileMenu = document.querySelector('.mobile-menu')

    function displayMenu(name) {
      //mobileMenu.style.display = 'block'
      //mobileMenu.style.width = '100vw'

      if (screen.width <= 900) {
        mobileMenu.classList.toggle('show')
        document.body.style.overflow = 'hidden'
        hamburgerIcon.style.display = 'none'

        let oilPaintigns = `<div class="closeBtn">&#10006</div><ul><li><a href="gallery_markups/oil_paintings_f/abstraction_g.html">Abstraction</a></li><li><a href="gallery_markups/oil_paintings_f/shoes_g.html">Shoes</a></li><li><a href="gallery_markups/oil_paintings_f/trees_g.html">Trees</a></li><li><a href="gallery_markups/oil_paintings_f/portraits_g.html">Portraits</a></li><li><a href="gallery_markups/oil_paintings_f/landscapes_g.html">Landscapes</a></li>      <li>
                  <a href="gallery_markups/oil_paintings_f/chickens_g.html">Chickens</a>
                </li>
               <li>
                <a href="gallery_markups/oil_paintings_f/reproductions_g.html">Reproductions</a>
              </li></ul></nav>`

        let drawings =
          '<div class="closeBtn">&#10006</div><ul><li><a href="gallery_markups/drawings_f/ink_g.html">Ink</a></li><li><a href="gallery_markups/drawings_f/pastels_g.html">Pastels</a></li><li><a href="gallery_markups/drawings_f/fusain_g.html">Fusain</a></li></ul></nav>'
        switch (name) {
          case 'oil_paintings':
            mobileMenu.innerHTML = oilPaintigns
            mobileMenu.querySelector('.closeBtn').addEventListener('click', function () {
              if (screen.width <= 900) {
                mobileMenu.classList.toggle('show')
                document.body.style.overflow = 'initial'
                hamburgerIcon.style.display = 'block'
              }
            })
            break
          case 'drawings':
            mobileMenu.innerHTML = drawings
            mobileMenu.querySelector('.closeBtn').addEventListener('click', function () {
              if (screen.width <= 900) {
                mobileMenu.classList.toggle('show')
                document.body.style.overflow = 'initial'
                hamburgerIcon.style.display = 'block'
              }
            })
            break
        }
      }
    }

    tiles[0].addEventListener('click', function () {
      displayMenu('oil_paintings')
    })

    tiles[2].addEventListener('click', function () {
      displayMenu('drawings')
    })
  }
}
