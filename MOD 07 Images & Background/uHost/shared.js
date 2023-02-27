const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.model');
const selectPlanBtn = document.querySelectorAll('.plan button');
const noBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// console.log(backdrop);
// console.dir(backdrop);
// console.dir(selectPlanBtn);

// backdrop.style.display = 'block';

for (var i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block'; //This will actually overwrite class list
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

const closeModal = () => {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  if(modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if(noBtn) {
  noBtn.addEventListener('click', closeModal);
}

toggleBtn.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
})