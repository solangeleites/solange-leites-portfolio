// const $ = document;
// const $showMore = document.getElementsByClassName('show-more');
// const $description = document.getElementsByClassName('description');

// const showMoreAndLess = (e) => {
//   $description.style.display = 'block';
//   $showMore.style.display = 'none';
// }

// const init = () => {
//   $showMore.addEventListener('click', showMoreAndLess);
// };
// init();


const $showMoreButtons = document.getElementsByClassName('show-more');
const $descriptions = document.getElementsByClassName('description');

const showMoreAndLess = (event, index) => {
  const $button = event.target;
  const $description = $descriptions[index];

  if ($button.dataset.showing === 'false') {
    $button.dataset.showing = 'true';
    $button.textContent = 'Ver menos';
    $description.style.display = 'block';
  } else {
    $button.dataset.showing = 'false';
    $button.textContent = 'Ver más';
    $description.style.display = 'none';
  }
};

const init = () => {
  for (let i = 0; i < $showMoreButtons.length; i++) {
    $showMoreButtons[i].addEventListener('click', (event) => showMoreAndLess(event, i));
  }
};

init();

