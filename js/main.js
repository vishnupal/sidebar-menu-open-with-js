// Start writing JavaScript here!
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  const main = document.querySelector('.main');
  const sideContainer = document.querySelector('.offsite-container');
  sideContainer.classList.toggle('hidden');
  main.classList.toggle('cols-2');
});
