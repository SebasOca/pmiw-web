function pantallaInicial () {
  textSize(48);
  textFont(fuente);
  textAlign (CENTER);
  text("Los Músicos de Bremen", 60, 280, 500, 200);
  image(cartel1, 260, 340, 120, 120);
}


function pantallasHistoria (posTexX, posTexY) {
  textSize(16);
  textLeading(24);
  textAlign (LEFT);
  text(textos[lineaTexto], 60, 300, posTexX, posTexY);
  if (numFondo == 4 || numFondo == 5 || numFondo == 11) {
    image(cartel2, 500, 360, 100, 100);
  } else {
    image(cartel1, 500, 360, 100, 100);
  }
}
