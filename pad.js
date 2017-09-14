/**
 * @const PADSPEED Speed of pads
 */
const PADSPEED = 10;

/**
 * @const PADWIDTH width of pads (pixel)
 */
const PADWIDTH = 10;
/**
 * @const PADHEIGHT height of pads (pixel)
 */
const PADHEIGHT = 100;

/**
 * class Pad
 */
class Pad {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h || 100;
    this.color = color || 'white';
  }
  
  moveUp() {
    this.y -= PADSPEED;
  }

  moveDown() {
    this.y += PADSPEED;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }


}