const openButton = document.querySelector('.popup_open');
const overlay = document.querySelector('.overlay');
const closeButton = overlay.querySelector('.popup__close-button');
const userName = document.querySelector('.profile__title-text');
const userAbout = document.querySelector('.profile__subtitle-text');
const form = document.forms.edituser;
const inputName = form.elements.name;
const inputAbout = form.elements.about;

function closePopup() {
  overlay.classList.remove('overlay_active');
}

function editUserInfo() {
  userName.textContent = inputName.value;
  userAbout.textContent = inputAbout.value;
}

openButton.addEventListener('click', () => {
  overlay.classList.add('overlay_active');
});

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  editUserInfo();
  closePopup();
});

overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});