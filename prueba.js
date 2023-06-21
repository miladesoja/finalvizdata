const scroller = scrollama();

const container4 = document.getElementById('container4');

////////////////////mi esfera
const mi_circle = document.createElement('div');
mi_circle.classList.add('mycircle');
mi_circle.style.backgroundColor = "white";

container4.appendChild(mi_circle)

const op1 = document.createElement('img');
op1.src = './imagenes/estrellasexplicit/4.false.svg';
op1.alt = './imagenes/estrellasexplicit/4.false.svg';
op1.classList.add('op1');

const op2 = document.createElement('img');
op2.src = './imagenes/estrellasexplicit/6.false.svg';
op2.alt = './imagenes/estrellasexplicit/6.false.svg';
op2.classList.add('op1');

const op3 = document.createElement('img');
op3.src = './imagenes/estrellasexplicit/8.false.svg';
op3.alt = './imagenes/estrellasexplicit/8.false.svg';
op3.classList.add('op1');

const op4 = document.createElement('img');
op4.src = './imagenes/estrellasexplicit/10.false.svg';
op4.alt = './imagenes/estrellasexplicit/10.false.svg';
op4.style.marginTop = '10px';
op4.classList.add('op1');

const op5 = document.createElement('img');
op5.src = './imagenes/estrellasexplicit/4.true.svg';
op5.alt = './imagenes/estrellasexplicit/4.true.svg';
op5.classList.add('op1');

const op6 = document.createElement('img');
op6.src = './imagenes/estrellasexplicit/6.true.svg';
op6.alt = './imagenes/estrellasexplicit/6.true.svg';
op6.classList.add('op1');

const op7 = document.createElement('img');
op7.src = './imagenes/estrellasexplicit/8.true.svg';
op7.alt = './imagenes/estrellasexplicit/8.true.svg';
op7.classList.add('op1');

const op8 = document.createElement('img');
op8.src = './imagenes/estrellasexplicit/10.true.svg';
op8.alt = './imagenes/estrellasexplicit/10.true.svg';
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
canvas1.height = 100;
canvas1.classList.add('canvas1')
container3.appendChild(canvas1);

let sliderValue1 = 0;

function handleSliderChange1(event) {
  sliderValue1 = event.target.value;
  pop = event.target.value;
  console.log(pop)
}

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
canvas2.height = 100;
container3.appendChild(canvas2);


let sliderValue2 = 0;


function handleSliderChange2(event) {
  sliderValue2 = event.target.value;
  acoust = event.target.value;
}


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

///////////////your song
/*
d3.csv('vizdatabase.csv', d3.autoType).then(data => {
    
  const bio = d3.select('#chart_container')
    .data(data)
    .join('div')
  
  bio.append('h3')
    .attr('class', 'cancion')
    .text(d => d.cancion)

  bio.append('p')
  .attr('class', 'jugador_edad')
  .text(d => d.genero)
  
  bio.append('p')
    .attr('class', 'jugador_nac')
    .text(d => d.acousticness)
    .append('span')
    .text('% acústica')

  bio.append('p')
    .attr('class', 'jugador_nac')
    .text(d => d.danceability)
    .append('span')
    .text('% danzabilidad')

  bio.append('p')
    .attr('class', 'jugador_nac')
    .text('Explícito: ')
    .append('span')
    .text(d => d.explicit)

  bio.append('p')
    .attr('class', 'jugador_nac')
    .text(d => d.popularity)
    .append('span')
    .text('% popularidad')
})*/

/////////vecindario de canciones
function updatePlot() {
  d3.dsv(',', 'vizdatabase.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      width: 800,
      height: 400,
      marks: [
        Plot.dot(data, {
          x: "popularity",
          y: "acousticness",
          fill: "miembro",
          r: 4,
        }),
        Plot.dot(data, {
          x: () => pop,
          y: () => acoust,
          fill: "#000000",
          r: 4,
        }),
      ],
      y:{
        domain: [0,100]
      },
      x:{
        domain: [0,100]
      },
      color:{
        range: ['#EDAE29', '#861275', '#10A7A0']
      }
    });

    d3.select('#grafico').html(''); // Clear the previous chart
    d3.select('#grafico').append(() => chart);

    d3.selectAll('circle')
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut);
  });
}

// Call updatePlot initially
updatePlot();

// Call updatePlot every 5 seconds (adjust the interval as needed)
setInterval(updatePlot, 5000);


function handleMouseOver(d, i) {
  // Change the fill color of the dot on mouseover
  d3.select(this).style('opacity', 0.7);
  const dotX = d.x;
  const dotY = d.y;

  const matchingElement = d3.select('#chart_container')
    .selectAll('.bio')
    .filter(item => item.popularity === dotX && item.acousticness === dotY);

  // Display the matching element
  matchingElement.style('display', 'block');
}

function handleMouseOut(d, i) {
  // Change the fill color of the dot back to its original value on mouseout
  d3.select(this).style('opacity', 1);

  d3.selectAll('.bio')
  .style('display', 'none');
}

//////////// cancion
