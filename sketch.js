let cnv,g;
let y,m,d;
let b;
let wedding,viewFinder;
var shutterSound;


function preload() {
  wedding = loadImage('Wedding02.jpg');
  viewFinder = loadImage('Viewfinder01.png');
  rainbowBlurred = loadImage('rainbow_blurred.png');
  shutterSound = loadSound( 'ShutterSound1.mp3');
  aThousandYears = loadSound('AThousandYears.mp3');
}

function setup() {
  cnv = createCanvas(600, 400);
  aThousandYears.play();
  cnv.mouseWheel(changeSize);
  g = 150;
  constrain(g,0,255);
  y = year();
  m = month();
  d = day();
  
  b = 10;
  
}
function draw() {
  frameRate(10);
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  if (g < 0) {
    g = 0
  }
  
  if (g > 255) {
    g = 255
  }
  
  if (b < 0) {
    b = 0
  }
  
  tint(g);
  image(wedding,0, 0);
  filter(BLUR, b);
  noTint();
  image(viewFinder,0, 0);

  // print(g);
  
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(y + '/' + m + '/' + d + ' ' + hr + ':' + mn + ':' + sc + '', width/2, 383);
  
  image(rainbowBlurred,0 , 0);
  
  if (mouseIsPressed)
    if (mouseButton === CENTER) {
      b = b - 2;
      return false;
    }
  // print(b);
}

 function mouseClicked() {
    saveCanvas(cnv, 'The Wedding', 'jpg');
       print("The moment is just saved");
       shutterSound.play();
    } 

function changeSize(event) {
  if (event.deltaY > 0) {
    g = g + 30;
  } else {
    g = g - 30;
  }
  return false;
}

