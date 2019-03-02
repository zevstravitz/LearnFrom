let canvas = document.querySelector('canvas');
console.log(canvas);
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 10;
canvas.height = 600;

const ellipses = [
  {
    x: 600, y: 300,
    radiusx: 250, radiusy: 600,
    text: 'Complex Numbers',
    textx: 550, texty: 75
  },
  {
    x: 425, y: 300,
    radiusx: 200, radiusy: 375,
    text: 'Real Numbers',
    textx: 300, texty: 125
  },
  {
    x: 1025, y: 300,
    radiusx: 100, radiusy: 175,
    text: 'Imaginary Numbers',
    textx: 975, texty: 300
  },
  {
    x: 300, y: 300,
    radiusx: 100, radiusy: 250,
    text: 'Rational Numbers',
    textx: 400, texty: 300
  },
  {
    x: 700, y: 300,
    radiusx: 75, radiusy: 100,
    text: 'Irrational Numbers',
    textx: 650, texty: 300
  },
  {
    x: 200, y: 300,
    radiusx: 75, radiusy: 150,
    text: 'Integer Numbers',
    textx: 250, texty: 300
  },
  {
    x: 150, y: 300,
    radiusx: 50, radiusy: 100,
    text: 'Natural Numbers',
    textx: 100, texty: 300
  }
];

ellipses.forEach(ellipse => {
  ctx.beginPath();
  ctx.ellipse(ellipse.x, ellipse.y, ellipse.radiusx, ellipse.radiusy, Math.PI/2, 0, 2 * Math.PI);
  ctx.font = '12px Raleway, sans-serif'
  ctx.strokeStyle = "#4457c3";
  ctx.fillText(ellipse.text, ellipse.textx, ellipse.texty);
  ctx.stroke();
});

//Accordion
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false
  });
});

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x-107 + ", Y coords: " + y-65;
  document.getElementById("Coordinates").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("Coordinates").innerHTML = "";
}
