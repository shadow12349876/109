var car,wall;
var speed,weight;

var thicknes,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(100,800);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX=speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall=shapecolor(80,80,80);

  thicknes=22,38;
  speed=random(223,321);
  weight=random(30,52);

  if (wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180)
  {
  car.shapecolor=color(255,0,0);
  }
  if (deformation<180 && deformation>100)
    {
     car.shapecolor=color(230,230,0);
    }

  if (deformation<100)
  {
    car.shapecolor=color(0,255,0);
  }
}
         
  wall = creatresprite(1500,200,60,height/2);
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if (damage>10)
  {
    wall.shapecolor=color(255,0,0);
  }

  if (damage<10)
  {
    wall.shapecolor=color(0,255,0);
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}


function hasCollided (lbullet,lwall)
{
    bulletRightEdge=lbullet.x +lbullet.width;
    wall.leftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
     return false;
}