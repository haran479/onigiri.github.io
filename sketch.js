let hand; 

function preload (){
 hand = loadImage('hand.png');
}


function setup() {
 createCanvas(800,550);
   
}
function draw (){ 
  if (mouseIsPressed) {
    
  image (hand, mouseX, mouseY, 200, 200);
}
}

