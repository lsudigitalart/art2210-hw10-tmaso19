let particles = [];
let zukoSprite;
let aangSprite;
let kataraSprite;
let tophSprite;
let sokkaSprite;
let imgBackdrop;


function preload(){
  zukoSprite = loadImage("zuko.png");
  aangSprite = loadImage("aang.png");
  kataraSprite = loadImage("katara.png")
  tophSprite = loadImage("toph.png")
  sokkaSprite = loadImage("sokka.png")
  imgBackdrop = loadImage("appa bg.jpg")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(imgBackdrop, 0, 0, 400, 400);


  if (mouseIsPressed) {
    particles.push(new Characters(mouseX, mouseY));
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].display();
    if (particles[i].x < 0 || particles[i].x > width || particles[i].y < 0 || particles[i].y > height) {
      particles.splice(i, 1);
    }
  }
}

class Characters {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }

  display() {
    noStroke();
    fill(0);
    image(zukoSprite, this.x, this.y, 50, 50);
    image(aangSprite, this.x/2, this.y/2, 50, 50,);
    image (kataraSprite, this.x/2, this.y/3, 50, 50);
    image(tophSprite, this.x/.75, this.y/.75, 50 ,50);
    image(sokkaSprite, this.x/.5, this.y/1, 50, 50);
    this.x += this.speedX;
    this.y += this.speedY;
  }
}