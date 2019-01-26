var xWindow;
var yWindow;

function setup() 
{
   createCanvas(600, 400);
   background(13, 35, 81);

}

function draw(){

	// Draws random stars in the sky
	for(stars = 0; stars < 100; stars++)
	{
		drawStar(random(600), random(400), random(0, 2*PI), random(.1, .25))
	}

	// Makes sidewalk/concrete
	push();
	noStroke();
	fill(130);
	rect(0, 7*height/8, width, 1*height/8);
	pop();

	// Draws the moon
	fill(255, 247, 145);
	ellipse(0, 0, 100);


	// Makes 6 randomly located buildings with random heights and widths
	for(building = 0; building < 6; building++)
	{
		drawBuilding(random(25, width-100), random(0, height-100), random(100, 150), 400);		
	}


	noLoop();
}


function drawBuilding(x, y, width, height){
	push();
	translate(x, y);
	fill(random(255), random(255), random(255));
	rect(0, 0, width, height);
	fill(255, 255, 0);
	xWindow = 5
	yWindow = 5
	while (yWindow < height)
	{
		rect(xWindow, yWindow, 3, 5);
		xWindow += 7

		if (xWindow > width-6){
			xWindow = 5
			yWindow += 10
		}
	}
	pop();

}

function drawStar(x, y, rot, sc){
   push();
   fill(255, 255, 0);
   translate(x, y)
   scale(sc);
   rotate(rot);   
   beginShape();
      vertex(0, -15);
      vertex(0+5, -5);
      vertex(0+20, -3);
      vertex(0+10, 5);
      vertex(0+12, 17);
      vertex(0, 10);
      vertex(0-12, 17);
      vertex(0-10, 5);
      vertex(0-20, -3);
      vertex(0-5, -5);
      vertex(0, -15);
   endShape(CLOSE);
   pop();
 
}