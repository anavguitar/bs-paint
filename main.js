/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 45;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-10';
  canvas.appendChild(div);
  count++;
}

// QUERIES ==========================================================

// App selector
const app = document.querySelectorAll('.app, .app > *');
// Colors section selector
const colorSection = document.querySelectorAll('.palette-color');
// Brush color selector
const brushColor = document.querySelector('.current-brush');
// Canvas selector
const canvas = document.querySelector('.canvas');
// Easter Egg
const easterEgg = document.querySelector('.easter-egg');

// Flex the app ========================================================

app.forEach(element => {
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.justifyContent = 'center';

});

// Event Listeners =====================================================

// Apply selected color to the brush
colorSection.forEach(function (color) {
  color.addEventListener('click', function () {
    brushColor.classList.replace(brushColor.classList.item(1), color.classList.item(1));
  });
});

// Apply color to canvas squares
canvas.addEventListener('click', function (event) {
  event.target.classList.replace(
    event.target.classList.item(1),
    brushColor.classList.item(1)
  );

  // Easter egg trigger excluding dark mode
  if (event.target.classList.item(1) === 'color-6' && h3.style.color !== 'white') {
    
    //Alert message to user
    if (confirm('It looks like you are trying to draw plankton, would you like some help?')) {
      easterEgg.style.visibility = 'visible';
      easterEgg.style.height = '380px';
      easterEgg.style.width = '780px';
    }
  }
});

// mousedown, mouseup, and mouseover events

//mousedown let variable
let mousedown = false;

canvas.addEventListener('mousedown', function (event) {
  mousedown = true;
});

canvas.addEventListener('mouseup', function (event) {
  mousedown = false;
});

canvas.addEventListener('mouseover', function (event) {
  if (mousedown === true) {
    event.target.classList.replace(
      event.target.classList.item(1),
      brushColor.classList.item(1)
    );}
});

// Dark Mode===============================================================

// Dark Mode Variables
const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');
const appBackground = document.querySelector('.app');
const body = document.querySelector('body');
const squares = document.querySelectorAll('.square');
const h3 = document.querySelector('h3');
const message = document.querySelector('.message');
const paletteIcon = document.querySelector('.palette-icon');
const brushIcon = document.querySelector('.brush-icon');

//Dark Mode event listener
darkMode.addEventListener('click', function () {
    
  for (square of squares) {
      
    if (square.classList.item(1) === 'color-10') {
      
      square.classList.replace(square.classList.item(1),'alt-black');
      
    } if (square.classList.item(1) === 'color-9') {

      square.classList.replace(square.classList.item(1), 'alt-white');

    }
 }
  
  // Style Changes
  canvas.style.border = '2px solid powderblue';
  canvas.style.boxShadow = '0 0 10px powderblue';
  h3.style.color = 'white';
  h3.style.textShadow = '0 0 7px powderblue';
  message.style.color = 'white';
  paletteIcon.src = 'palettewhite.png';
  brushIcon.src = 'paintbrushwhite.png';
  appBackground.style.backgroundColor = '#08141c';
  body.style.background = '#08141c';
  darkMode.style.visibility = 'hidden';
  lightMode.style.visibility = 'visible';

});

// Light Mode ===============================================================

//Event Listener
lightMode.addEventListener('click', function () {

  for (square of squares) {

    if (square.classList.item(1) === 'alt-black') {

      square.classList.replace(square.classList.item(1), 'color-10');

    } if (square.classList.item(1) === 'alt-white') {

      square.classList.replace(square.classList.item(1), 'color-9');

    }
  }

  // Style Changes
  canvas.style.border = '2px solid black';
  canvas.style.boxShadow = '0 0 0';
  h3.style.color = '#004777';
  h3.style.textShadow = '0 0 0';
  message.style.color = 'black';
  paletteIcon.src = 'palette.png';
  brushIcon.src = 'paintbrush.png';
  appBackground.style.backgroundColor = 'white';
  body.style.background = 'white';
  darkMode.style.visibility = 'visible';
  lightMode.style.visibility = 'hidden';

});

