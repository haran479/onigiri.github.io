let hand; 

function preload (){
 hand = loadImage('hand.png');
}


function setup() {
 createCanvas(800,800);
   
}
function draw (){ 
  if (mouseIsPressed) {
    
  image (hand, mouseX, mouseY, 200, 200);
}
}

