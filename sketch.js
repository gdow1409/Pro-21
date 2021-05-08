
var  wall,bullet,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,900);

  wall = createSprite (1200, 400, thickness, 400);

  thickness=random(22,83);

  bullet = createSprite(50, 400, 50, 10);
  

  weight=random(30,52);
  speed=random(100,221);

  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  
}

function draw() {
  background("black");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX=0;
  var deformation =0.5 * weight * speed * speed/22509;
  
} 

if(hasCollided(bullet, wall)) 
{
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness)

  if (damage>10)
  {
    wall.shapeColor="red";
  }
  if (damage<=10)
  {
    wall.shapeColor="green";
  }

}


  drawSprites();
}


function hasCollided (bullet,wall) {
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
    return false;
}