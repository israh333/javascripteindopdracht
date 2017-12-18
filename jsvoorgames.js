var ysize= 800;
var xsize= 800;
var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 300;

function setup(){
  createCanvas(xsize,ysize);

  for (var i = 0; i < aantalBallen; i++){
    bal = new Ball(random(20, 380), random(20, 380), random(5, 15), random(1,10), random(1,10)); //Maak een nieuwe instantie van Bal()
    ballen.push(bal); //Push voegt de bal aan het einde van het array toe
  }
}

function draw(){
  background(255);
  var r = random(100);
  // ballen.length geeft de lengte van het ballenarray terug
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i];
    bal.teken();
    bal.update();
  }
}

function Ball(xx,yy){
  this.x = xx;
  this.y = yy;
  this.speedx = 2;
  this.speedy = 4;

  this.teken = function() {
    rect(this.x, this.y,10, 10);
  }

  this.update = function(){
    this.x += this.speedx;
    this.y += this.speedy;

    if (this.y > (400-10) || this.y < 0){
    this.speedy = -this.speedy;
  }
    if (this.x > (400-10) || this.x < 0){
    this.speedx = -this.speedx;
  }
  }
}
