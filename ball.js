/**
 * @const BALLRADIUS ball radius (pixel)
 */
const BALLRADIUS = 10;
/**
 * class Ball
 */
class Ball {
    constructor(x, y, color) {
        /**
         * @var y Y coordinate
         */
        this.x = x || 100;

        /**
         * @var x X coordinate
         */
        this.y = y || 100;

        /**
         * @var color Color of ball
         */
        this.color = color || 'red';

        /**
         * @var vx Velocity X
         */
        this.vx = 1;

        /**
         * @var vy Velocity Y
         */
        this.vy = 1;

        /**
         * @var speed Speed of ball
         */
        this.speedY = 4;
        this.speedX = 4;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, BALLRADIUS, 0, Math.PI*2);
        ctx.fill(); // fill() is to fill in the circle, stroke() is for a empty circle.
    }

    move() {
        this.x += this.vx*this.speedX;
        this.y += this.vy*this.speedY;
    }
}