var box;

function setup() {
  box = createSprite(200,200,50,50)
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyDown ("right_arrow")) {
    box.x = box.x + 5
  }

  if (keyDown ("left_arrow")) {
    box.x = box.x - 5
  }
  if (keyDown ("up_arrow")) {
    box.y = box.y - 5
  }
  if (keyDown ("down_arrow")) {
    box.y = box.y + 5
  }
}




