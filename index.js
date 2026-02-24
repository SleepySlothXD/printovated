// Start Popout Menu
const hammenu = document.getElementById('ham-menu');
const popout = document.getElementById('popout');

hammenu.addEventListener('click', () => {
  popout.classList.toggle('active');
  hammenu.classList.toggle('active');
});
addEventListener('click', (event) => {
  if (!hammenu.contains(event.target) && !popout.contains(event.target)) {
    popout.classList.remove('active');
    hammenu.classList.remove('active');
  }
});
// End Popout Menu  