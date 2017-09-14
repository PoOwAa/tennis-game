/*************************
 * CONSTANTS
 ************************/

/**
 * @const FPS refresh rate / sec
 */
const FPS = 60;

/**
 * @var c The canvas element
 */ 
var c;
/**
 * @var ctx The canvas context object
 */
var ctx;
/**
 * The ball
 */
var ball;
/**
 * Pads
 */
var padLeft,padRight;
/**
 * Half size of canvas and pads
 */
var chw,chh,phw,phh;


/************************************
 * Let's the game begin!
 ***********************************/
window.onload = function() {
  /**
   * Create the canvas
   */
  c = document.getElementById('canvasGame');
  /**
   * Make it 2d
   */
  ctx = c.getContext('2d');
  
  /**
   * Don't need to recalculate this every time
   */
  chw = c.width / 2;
  chh = c.height / 2;
  phw = PADWIDTH / 2;
  phh = PADHEIGHT / 2;

  // Left pad
  padLeft =   new Pad(0, chh - PADHEIGHT / 2, PADWIDTH, PADHEIGHT, 'blue');
  // Right pad
  padRight =  new Pad(c.width - PADWIDTH, chh - phh, PADWIDTH, PADHEIGHT, 'yellow');
  // The ball
  ball = new Ball(chw-BALLRADIUS/2,chh-BALLRADIUS/2,'red');

  // Make it infinite
  setInterval(function() {
    draw();
    document.onkeydown = movePad;
    moveBall();
    autoPad();
  }
  , 1000/FPS);
}


/**
 * Draws the whole content
 */
function draw() {  
  
  // Background drawing
  drawBg();
  
  // Left pad
  padLeft.draw();
  // Right pad
  padRight.draw();
  
  // Draw the ball
  ball.draw();
}

/**
 * AI
 */
function autoPad() {
  if ((padRight.y + phh < ball.y) && (padRight.y+PADHEIGHT < c.height) && (ball.x > (c.width - c.width/10)) ) {
    padRight.moveDown();
  }
  if ((padRight.y + phh > ball.y) && (padRight.y > 0) && (ball.x > (c.width - c.width/10)) ) {
    padRight.moveUp();
  }
}

function moveBall() {
  // Left - right
  if (  ( (ball.x <= 0 + PADWIDTH + BALLRADIUS)   && ( (ball.y < padLeft.y + PADHEIGHT)   && (ball.y > padLeft.y ))) ||
        ( (ball.x >= c.width-BALLRADIUS-PADWIDTH) && ( (ball.y < padRight.y + PADHEIGHT)  && (ball.y > padRight.y)))) {
    
          ball.vx = -ball.vx;
          ball.speedX = calcSpeed()+4;
  }

  // Up - down
  if ( ball.y <= 0 + BALLRADIUS || ball.y >= c.height-BALLRADIUS/2) {
      ball.vy = -ball.vy;
      ball.speedY = calcSpeed()+4;
  }


  ball.move();
}

function calcSpeed() {
  return Math.random() * (5 - 2) - 2;
}

/**
 * Move the pad
 * @param {event} e 
 */
function movePad(e) {
  e = window.event;
  
      switch (e.keyCode) {
      
        case 40:
          if ( padLeft.y + PADHEIGHT < c.height ){
            padLeft.moveDown();
          }
          break;
      
          case 38:
          if ( padLeft.y > 0)  {
            padLeft.moveUp();
          }
          break;
      
      }
}
/**
 * Draws the background
 */
function drawBg() {
  ctx.fillStyle ='black';
  ctx.fillRect(0, 0, c.width, c.height);
}