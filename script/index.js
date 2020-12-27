let openButton = document.querySelector ('.popup_open')
let overlay = document.querySelector ('.overlay')
let closeButton = overlay.querySelector ('.popup__close-button')
let saveButton = overlay.querySelector ('.form__save-button')


openButton.addEventListener('click', () => {
    
    overlay.classList.toggle('overlay_active')
    
})

closeButton.addEventListener('click', () => {
    overlay.classList.toggle('overlay_active')
    
})

saveButton.addEventListener('click', () => {
  overlay.classList.toggle('form__save-button')
  
})

overlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
    overlay.classList.toggle('overlay_active')
    }
    })


 