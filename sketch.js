function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  ellipse(200,200,45,60);
  circle(200,170,40);
  ellipse(200,180,90,20);
  circle(200,210,5);
  line(200, 300, 200, 230);
  line(200, 250, 210, 230);
  line(200, 250, 190, 230);
  line(200,300,190,330);
  line(200,300,210,330)
  point(193,199);
  point(203,199);
  triangle(190, 170, 200, 160, 210, 170);
  textSize(30);
    text('Portrait of me in a hat!', 10, 30);
  textSize(15);
    text('Kyra Becker', 10, 385);
}