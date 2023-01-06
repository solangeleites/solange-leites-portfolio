const $showMoreButtons = document.getElementsByClassName('show-more');
const $descriptions = document.getElementsByClassName('description');
const $hour = document.getElementsByClassName('hora');
const $fecha = document.getElementsByClassName('fecha');
const $name = document.getElementById('name');
const $clima = document.getElementById('clima');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,%20Argentina&appid=9a0d87730cc4cbadcd498be668e87335')
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp - 273.15;
    const name = data.name;
    console.log(`La temperatura actual en ${name} es de ${convertCelcius(temperature)}°.`);  });

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


//* Funciones para la hora, la fecha

// const updateClock = () => {
//   const currentTime = new Date();
//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const seconds = currentTime.getSeconds();

//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }
//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }
//   $hour.textContent = `${hours}:${minutes}:${seconds}`;
// };





const init = () => {
  for (let i = 0; i < $showMoreButtons.length; i++) {
    $showMoreButtons[i].addEventListener('click', (event) =>
      showMoreAndLess(event, i)
    );
  }
};

init();
