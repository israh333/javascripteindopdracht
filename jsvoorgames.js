function setup(){
  createCanvas(400,400);
}

function Ball(xx,yy){
  this.x = xx;
  this.y = yy;
  this.speedx = 2;
  this.speedy = 3;

  this.update = function(){
    this.x += this.speedx;
    this.y += this.speedy;

    if (this.y > (400-10) || this.y < 0){
      this.speedy = -this.speedy;

    if (this.x > (400-10) || this.x < 0){
      this.speedx = -this.speedx;


  }
  }
  this.teken = function () {

  }

 }



}

var balletje = new Ball(10,20);
var balletje2 = new Ball(1,200);
var balletje3 = new Ball(1,100);



function draw() {
  background(200);
  rect(balletje.x,balletje.y, 10,10);
  rect(balletje2.x,balletje2.y, 10,10);
  rect(balletje3.x,balletje3.y, 10,10);
  balletje.update();
  balletje2.update();
  balletje3.update();


}
