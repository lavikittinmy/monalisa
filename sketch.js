function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("red");
    fill("blue");
    circle(200, 200, 300); // rosto
    fill("yellow");
    circle(150, 150, 70); // olho esquerdo
    circle(250, 150, 70); // olho direito
    line(30, 270, 250, 235); // boca
    fill("red");
    triangle(100, 180, 170, 220, 220, 220); // nariz
    line(123, 115, 178, 123); // sobrancelha esquerda
    line(225, 116, 279, 116); // sobrancelha direita
    // circle(150,150,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 160, 140);
    olhoY = map(mouseY, 0, 400, 160, 140);
  
    circle(olhoX, olhoY, 40); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 40); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  