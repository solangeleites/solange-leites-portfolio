const $showMoreButtons = document.getElementsByClassName('show-more');
const $descriptions = document.getElementsByClassName('description');
const $hour = document.getElementsByClassName('hora');
const $fecha = document.getElementsByClassName('fecha');
const $clima = document.getElementsByClassName('clima');
const $name = document.getElementById('name');
console.log($name);

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

const effectFall = () => {
  if($showMoreButtons.classlist.contains("cascada")){
    $showMoreButtons.classList.remove("cascada");
    $showMoreButtons.style.height = "auto";
} else {
    $showMoreButtons.classList.add("cascada");
    $showMoreButtons.style.height = "0";
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

// const updateDate = () => {
//   const currentDate = new Date();
//   const day = currentDate.getDate();
//   const month = currentDate.getMonth();
//   const year = currentDate.getFullYear();

//   $fecha.textContent = `${day} / ${month + 1} / ${year}`;
// };
// setInterval(() =>{
//   updateClock();
//   updateDate();
// },1000)


// *Funcion efecto type
// const writeText = () => {
//   const text = document.getElementById("text");
//   const textContent = text.textContent;
//   let i = 0;
//   const interval = setInterval(() => {
//     text.textContent = textContent.substring(0, i+1);
//     i++;
//     if (i >= textContent.length) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }



const init = () => {
  for (let i = 0; i < $showMoreButtons.length; i++) {
    $showMoreButtons[i].addEventListener('click', (event) =>
      showMoreAndLess(event, i)
    );
  }
  window.addEventListener('load', writeText);
};

init();
