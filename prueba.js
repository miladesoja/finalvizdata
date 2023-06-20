const scroller = scrollama();

const container4 = document.getElementById('container4');

////////////////////mi esfera
const mi_circle = document.createElement('div');
mi_circle.classList.add('mycircle');
mi_circle.style.backgroundColor = "white";

container4.appendChild(mi_circle)

const op1 = document.createElement('img');
op1.src = './imagenes/estrella4.png';
op1.alt = './imagenes/estrella4.png';
op1.classList.add('op1');

const op2 = document.createElement('img');
op2.src = './imagenes/estrella6.png';
op2.alt = './imagenes/estrella6.png';
op2.classList.add('op1');

const op3 = document.createElement('img');
op3.src = './imagenes/estrella8.png';
op3.alt = './imagenes/estrella8.png';
op3.classList.add('op1');

const op4 = document.createElement('img');
op4.src = './imagenes/estrella10.png';
op4.alt = './imagenes/estrella10.png';
op4.classList.add('op1');

const op5 = document.createElement('img');
op5.src = './imagenes/estrella4b.png';
op5.alt = './imagenes/estrella4b.png';
op5.classList.add('op1');

const op6 = document.createElement('img');
op6.src = './imagenes/estrella6b.png';
op6.alt = './imagenes/estrella6b.png';
op6.classList.add('op1');

const op7 = document.createElement('img');
op7.src = './imagenes/estrella8b.png';
op7.alt = './imagenes/estrella8b.png';
op7.classList.add('op1');

const op8 = document.createElement('img');
op8.src = './imagenes/estrella10b.png';
op8.alt = './imagenes/estrella10b.png';
op8.classList.add('op1');


///////////////////

const container = document.getElementById('container');

// Array of circle texts
const circleTexts = ['Alt Rock', 'Art Pop', 'Dance Pop','Electro Pop', ' Rock', 'R&B', 'Hip Hop', 'Psychedelic Pop'];
const circleColors = ['#022E79', '#710461', '#EC0E49', '#E87032','#05732A','#15C386', '#A9DA6E','#FFEF5B'];

let clickedElement = null;

// Create circles dynamically
for (let i = 0; i < circleTexts.length; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = circleColors[i % circleColors.length];


  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = circleTexts[i];

  circle.appendChild(text);
  container.appendChild(circle);

  // Add click event listener to circles
  circle.addEventListener('click', () => {
    clickedElement = circleColors[i % circleColors.length];
    mi_circle.style.backgroundColor = clickedElement;
    var section1 = document.getElementById("section-1");
    section1.scrollIntoView({ behavior: 'smooth' });
});
}

/////SCROLLAMA
// Define Scrollama step details
const steps = document.querySelectorAll('.step');

// Setup the Scrollama instance
scroller
  .setup({
    step: steps,
    offset: 0.5,
    progress: true
  })
  .onStepEnter(({ index }) => {
    // Handle scroll step enter event
    console.log(`Step ${index} entered`);
  })
  .onStepExit(({ index }) => {
    // Handle scroll step exit event
    console.log(`Step ${index} exited`);
  });

////////////danza
const imageContainer = document.getElementById('imageContainer');
imageContainer.classList.add('image-container');

// Array of image file names
const imageFiles = ['./imagenes/estrella4.png', './imagenes/estrella6.png', './imagenes/estrella8.png', './imagenes/estrella10.png'];
let danza = null;

const img = document.createElement('img');
img.src = './imagenes/estrella4.png';
img.alt = './imagenes/estrella4.png';
img.classList.add('img-0');
imageContainer.appendChild(img);
img.addEventListener('click', () => {
    danza = 1;
    var section2 = document.getElementById("section-2");
    section2.scrollIntoView({ behavior: 'smooth' });
});

const img1 = document.createElement('img');
img1.src = './imagenes/estrella6.png';
img1.alt = './imagenes/estrella6.png';
img1.classList.add('img-1');
imageContainer.appendChild(img1);
img1.addEventListener('click', () => {
  danza = 2;
  var section2 = document.getElementById("section-2");
  section2.scrollIntoView({ behavior: 'smooth' });
});

const img2 = document.createElement('img');
img2.src = './imagenes/estrella8.png';
img2.alt = './imagenes/estrella8.png';
img2.classList.add('img-2');
imageContainer.appendChild(img2);
img2.addEventListener('click', () => {
  danza = 3;
  var section2 = document.getElementById("section-2");
  section2.scrollIntoView({ behavior: 'smooth' });
});

const img3 = document.createElement('img');
img3.src = './imagenes/estrella10.png';
img3.alt = './imagenes/estrella10.png';
img3.classList.add('img-3');
imageContainer.appendChild(img3);
img3.addEventListener('click', () => {
  danza = 4;
  var section2 = document.getElementById("section-2");
  section2.scrollIntoView({ behavior: 'smooth' });
});


//document.body.appendChild(imageContainer);

/////////barras
const container3 = document.getElementById('container3');
//const container3 = document.createElement('div');

// Bar Graph 1
const canvas1 = document.createElement('canvas');
canvas1.width = 500;
canvas1.height = 200;
canvas1.classList.add('canvas1')
container3.appendChild(canvas1);

const ctx1 = canvas1.getContext('2d');
const maxBarWidth1 = canvas1.width - 40; // Adjust the value to control the maximum width of the bars
const xTicks1 = ['0%', '50%', '100%'];
const tickSpacing1 = maxBarWidth1 / (xTicks1.length - 1);
let sliderValue1 = 0;

function drawBarGraph1() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  const barHeight = 60;
  const barWidth = sliderValue1 * maxBarWidth1 / 100;
  const barX = 20;
  const barY = (canvas1.height - barHeight) / 2;
  const cornerRadius = 10; // Adjust the value to control the roundness of the corners

  ctx1.fillStyle = '#EDAE29';

  if (sliderValue1 === 0) {
    // Handle special case when bar is at 0%
    ctx1.fillRect(barX, barY, 0, barHeight);
  } 
  else {
    // Draw rounded rectangle
    ctx1.beginPath();
    ctx1.moveTo(barX + cornerRadius, barY);
    ctx1.lineTo(barX + barWidth - cornerRadius, barY);
    ctx1.quadraticCurveTo(barX + barWidth, barY, barX + barWidth, barY + cornerRadius);
    ctx1.lineTo(barX + barWidth, barY + barHeight - cornerRadius);
    ctx1.quadraticCurveTo(barX + barWidth, barY + barHeight, barX + barWidth - cornerRadius, barY + barHeight);
    ctx1.lineTo(barX + cornerRadius, barY + barHeight);
    ctx1.quadraticCurveTo(barX, barY + barHeight, barX, barY + barHeight - cornerRadius);
    ctx1.lineTo(barX, barY + cornerRadius);
    ctx1.quadraticCurveTo(barX, barY, barX + cornerRadius, barY);
    ctx1.closePath();
    ctx1.fill();
  }
  // Draw x-axis ticks and labels
  ctx1.strokeStyle = 'black';
  ctx1.lineWidth = 1;
  ctx1.font = '13px Trebuchet MS';
  ctx1.textAlign = 'center';
  ctx1.textBaseline = 'top';
  ctx1.fillStyle = 'black';

  for (let i = 0; i < xTicks1.length; i++) {
    const tickValue = xTicks1[i];
    const tickX = barX + (i * tickSpacing1);
    const tickY = barY + barHeight + 10;

    ctx1.beginPath();
    ctx1.moveTo(tickX, tickY - 5);
    ctx1.lineTo(tickX, tickY);
    ctx1.stroke();

    ctx1.fillText(tickValue, tickX, tickY + 10);
  }
}

function handleSliderChange1(event) {
  sliderValue1 = event.target.value;
  pop = event.target.value;
  console.log(pop)
  drawBarGraph1();
}

drawBarGraph1();

const slider1 = document.createElement('input');
let pop = 0;
slider1.type = 'range';
slider1.min = 0;
slider1.max = 100;
slider1.value = sliderValue1;
slider1.addEventListener('input', handleSliderChange1);
slider1.classList.add('slider-pink');
container3.appendChild(slider1);

// Bar Graph 2
const canvas2 = document.createElement('canvas');
canvas2.width = 500;
canvas2.height = 200;
container3.appendChild(canvas2);

const ctx2 = canvas2.getContext('2d');
const maxBarWidth2 = canvas2.width - 40; // Adjust the value to control the maximum width of the bars
const xTicks2 = ['0%', '50%', '100%'];
const tickSpacing2 = maxBarWidth2 / (xTicks2.length - 1);
let sliderValue2 = 0;

function drawBarGraph2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  const barHeight = 60;
  const barWidth = sliderValue2 * maxBarWidth2 / 100;
  const barX = 20;
  const barY = (canvas2.height - barHeight) / 2;
  const cornerRadius = 10;

  ctx2.fillStyle = '#10A7A0';

  if (sliderValue2 === 0) {
    // Handle special case when bar is at 0%
    ctx2.fillRect(barX, barY, 0, barHeight);
  } else {
    // Draw rounded rectangle
    ctx2.beginPath();
    ctx2.moveTo(barX + cornerRadius, barY);
    ctx2.lineTo(barX + barWidth - cornerRadius, barY);
    ctx2.quadraticCurveTo(barX + barWidth, barY, barX + barWidth, barY + cornerRadius);
    ctx2.lineTo(barX + barWidth, barY + barHeight - cornerRadius);
    ctx2.quadraticCurveTo(barX + barWidth, barY + barHeight, barX + barWidth - cornerRadius, barY + barHeight);
    ctx2.lineTo(barX + cornerRadius, barY + barHeight);
    ctx2.quadraticCurveTo(barX, barY + barHeight, barX, barY + barHeight - cornerRadius);
    ctx2.lineTo(barX, barY + cornerRadius);
    ctx2.quadraticCurveTo(barX, barY, barX + cornerRadius, barY);
    ctx2.closePath();
    ctx2.fill();
  }

  // Draw x-axis ticks and labels
  ctx2.strokeStyle = 'black';
  ctx2.lineWidth = 1;
  ctx2.font = '13px Trebuchet MS';
  ctx2.textAlign = 'center';
  ctx2.textBaseline = 'top';
  ctx2.fillStyle = 'black';

  for (let i = 0; i < xTicks2.length; i++) {
    const tickValue = xTicks2[i];
    const tickX = barX + (i * tickSpacing2);
    const tickY = barY + barHeight + 10;

    ctx2.beginPath();
    ctx2.moveTo(tickX, tickY - 5);
    ctx2.lineTo(tickX, tickY);
    ctx2.stroke();

    ctx2.fillText(tickValue, tickX, tickY + 10);
  }
}


function handleSliderChange2(event) {
  sliderValue2 = event.target.value;
  acoust = event.target.value;
  drawBarGraph2();
}

drawBarGraph2();

const slider2 = document.createElement('input');
let acoust = 0;
slider2.type = 'range';
slider2.min = 0;
slider2.max = 100;
slider2.value = sliderValue2;
slider2.addEventListener('input', handleSliderChange2);
slider2.classList.add('slider-celeste');
container3.appendChild(slider2);


var button = document.createElement("button");
button.textContent = "Next";
button.classList.add('boton')

// Add click event listener to scroll to section2
button.addEventListener("click", function() {
  var section3 = document.getElementById("section-3");
  section3.scrollIntoView({ behavior: 'smooth' });
});

// Append the button to the body
container3.appendChild(button);

//////////explicit

const container5 = document.getElementById('container5');

const truei = document.createElement('img');
truei.src = './imagenes/true.png';
truei.alt = './imagenes/true.png';
truei.classList.add('truei');
container5.appendChild(truei);
truei.addEventListener('click', () => {
    if(danza ==1){
      mi_circle.appendChild(op5);
    }
    if(danza ==3){
      mi_circle.appendChild(op7);
    }
    if(danza ==4){
      mi_circle.appendChild(op8);
    }
    if(danza ==2){
      mi_circle.appendChild(op6);
    }
    var section4 = document.getElementById("section-4");
    section4.scrollIntoView({ behavior: 'smooth' });
});

const falsei = document.createElement('img');
falsei.src = './imagenes/false.png';
falsei.alt = './imagenes/false.png';
falsei.classList.add('falsei');
container5.appendChild(falsei);
falsei.addEventListener('click', () => {
  if(danza ==1){
    img.style.opacity = 1;
    mi_circle.appendChild(op1);
  }
  if(danza ==3){
    img2.style.opacity = 1;
    mi_circle.appendChild(op3);
  }
  if(danza ==4){
    img3.style.opacity = 1;
    mi_circle.appendChild(op4);
  }
  if(danza ==2){
    img1.style.opacity = 1;
    mi_circle.appendChild(op2);
  }
  var section4 = document.getElementById("section-4");
  section4.scrollIntoView({ behavior: 'smooth' });
});


/////////vecindario de canciones


d3.dsv(',', 'vizdatabase.csv', d3.autoType).then(data => {

  let chart = Plot.plot({
    width:800,
    height:400,

    marks: [
      Plot.dot(data,{
        x: "popularity",
        y: "acousticness",
        fill: "miembro",
        r:4,
      }),

      Plot.dot(data,{
        x:pop,
        y:acoust,
        fill: "#000000",
        r: 4,
      }),
    ],    
  })
  d3.select('#grafico').append(() => chart)
})
