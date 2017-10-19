function setup(){
  createCanvas(400,400);
  balletje = new Ball;

}


function Ball(xx,yy){
  this.x = xx;
  this.y = yy;
  this.speedx = 2;
  this.speedy = 3;

}

var balletje = new Ball(10,20);
var balletje2 = new Ball(1,200);
var balletje3 = new Ball(1,300);



function draw() {
  background(150)
  rect(balletje,balletje, 10,20);
  rect(balletje2,balletje2, 10,10);
  rect(balletje3,balletje3, 10,10);

  balletje.x += balletje.speedx1;
  balletje.y += balletje.speedy1;

rect(balletje2.x,balletje2.y ,10,10);
  balletje.x2 += balletje.speedx2;
  balletje.y2 += balletje.speedy2;

rect(balletje3.x,balletje3.y ,10,10);
  balletje3.x += balletje3.speedx;
  balletje3.y += balletje3.speedy;

if (balletje.x > (400-10) || balletje.y < 0)
  balletje.speedy = -balletje.speedy;

if (balletje2.x > (400-10) || balletje2.x< 0)
  balletje2.speedx = -balletje2.speedx;

if (balletje3.x > (400-10) || balletje3.x < 0)
  balletje3.speedx = -balletje3.speedx;
}
