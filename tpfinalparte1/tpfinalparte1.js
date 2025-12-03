//Enlace: https://youtu.be/mcLmOw8h-3Q

let fuente;
let textos;
let soundtrack;

let cartel1;
let cartel2;
let imagenesFondo = [];
let numFondo = 0;
let cant = 15;
let lineaTexto = -1;

let posTexX;
let posTexY;


function preload() {
  fuente = loadFont('/tpfinalparte1/data/fingerPaint.ttf');
  textos = loadStrings('/tpfinalparte1/data/textos.txt');
  soundFormats ('mp3');
  soundtrack = loadSound("/tpfinalparte1/data/soundtrack.mp3");

  cartel1 = loadImage("/tpfinalparte1/data/cartel1.png");
  cartel2 = loadImage("/tpfinalparte1/data/cartel2.png");
  for (let i=0; i<=cant; i++) {
    imagenesFondo[i] = loadImage("/tpfinalparte1/data/fondo" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  background (253, 245, 232);
  fill(0);
  image(imagenesFondo[numFondo], 160, 30, 320, 240);
  if (numFondo === 0) {
    pantallaInicial ();
  } else {
    pantallasHistoria (500, 200);
  }
}


function mouseClicked() {
  if (numFondo === 0) {
    if (mouseX >= 270 && mouseX <= 370 && mouseY >= 345 && mouseY <= 390) {
      numFondo++;
      soundtrack.play();
      lineaTexto = numFondo-1;
    }
  } else if (numFondo > 0) {
    if (mouseX >= 510 && mouseX <= 600 && mouseY >= 365 && mouseY <= 400) {
      numFondo++;
      lineaTexto = numFondo-1;

      if (numFondo === 9 || numFondo === 13 || numFondo === 16) {
        numFondo = 0;
        lineaTexto = numFondo-1;
      }
      if (numFondo === 13) {
        numFondo = 15;
        lineaTexto = numFondo-1;
      }
    } else if (mouseX >= 515 && mouseX <= 600 && mouseY >= 400 && mouseY <= 425) {
      if (numFondo === 4) {
        numFondo = 9;
        lineaTexto = numFondo-1;
      } else if (numFondo === 11) {
        numFondo = 13;
        lineaTexto = numFondo-1;
      } else if (numFondo === 5) {
        numFondo = 14;
        lineaTexto = numFondo-1;
      }
    }
  }
}
