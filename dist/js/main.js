
const closeIcon = document.getElementById('close_Icon');
const hamburger = document.getElementById('hamburger');
const LocasticLogo = document.getElementById('logo');
const dropDown = document.querySelector('.dropdown');

document.addEventListener('DOMContentLoaded', ()=> {
  dropDown.style.display = 'none';
  closeIcon.style.display = 'none';
})

hamburger.addEventListener('click', ()=> {
  hamburger.style.display = 'none';
  closeIcon.style.display = 'block';
  closeIcon.style.position = 'absolute';
  closeIcon.style.top = '24px';
  closeIcon.style.right = '24px';
  
  LocasticLogo.style.display = 'none';
  dropDown.style.display = 'flex';
  dropDown.style.transition = '1s';

})

closeIcon.addEventListener('click', ()=> {
  closeIcon.style.display = 'none';
  hamburger.style.display = 'block';
  LocasticLogo.style.display = 'block';
  dropDown.style.display = 'none';
})