
var xGuy;

var speed;
 


function setup() {
createCanvas(400, 300); 
xGuy = 100;
speed = 2
}

function draw() {

  document.body.style.backgroundColor = "#821717";


ellipseMode(CENTER);
rectMode(CENTER);
background(255);

 

fill(150, 0, 150);
rect(xGuy, 150, 45, 95);

 

fill(255, 0, 0, 220);
ellipse(xGuy, 115, 60, 60);


  fill(200);
  ellipse(xGuy, 130, 30, 12);

 

fill(0, 0, 255);
ellipse(xGuy - 17, 110, 20, 22);
ellipse(xGuy + 17, 110, 20, 22);

 
 

line(xGuy - 10, 195, xGuy - 20, 235);
line(xGuy + 10, 195, xGuy + 20, 235);


  line(xGuy - 21, 150, xGuy - 60, 139);
  line(xGuy + 21, 150, xGuy + 60, 139);
  
  
  line(0, 235, 500, 235)
  line(0, 237, 500, 237)
  line(0, 236, 500, 236)
  
  xGuy += 1;
  
          if (xGuy > width || xGuy < 0){ 
        speed = -speed;
    }
    xGuy += speed;
}
};
