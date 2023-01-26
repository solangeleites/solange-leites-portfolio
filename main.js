const $showMoreButtons = document.getElementsByClassName('show-more');
const $descriptions = document.getElementsByClassName('description');
const $clima = document.getElementById('clima');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,%20Argentina&appid=9a0d87730cc4cbadcd498be668e87335')

  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp - 273.15;
    const name = data.name;
    const icon = data.weather.icon;
    $clima.innerHTML = `La temperatura actual en ${name} es de ${convertCelcius(temperature)}°
    .`;
  });


  const convertCelcius = kelvin => {
    let celsius = Math.round(kelvin - 0);
    return celsius;
  }



//* Funcion para mostrar y ocultar la descripcion de cada item
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
    $showMoreButtons[i].addEventListener('click', (event) =>
      showMoreAndLess(event, i)
    );
  }
};

init();
