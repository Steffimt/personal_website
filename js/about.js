const menuHamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');


menuHamburger.addEventListener('click', () => {
  
  navLinks.classList.toggle('mobile-menu-active');
});

const rand = function(min, max) {
  return Math.random() * ( max - min ) + min;
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'lighter';
});
let backgroundColors = [ '#000', '#000' ];
let colors = [
  ['#002aff', "#009ff2"],
  ['#FF69B4', '#FF1493'], // Pink hues
  // ['#FFB6C1', '#FF69B4'], // Pink hues
  ['#0054ff', '#27e49b'],
  // ['#FF1493', '#C71585'], // Pink hues
  ['#202bc5', '#873dcc']
];
let count = 60;
let blur = [ 12, 70 ];
let radius = [ 1, 120 ];

ctx.clearRect( 0, 0, canvas.width, canvas.height );
ctx.globalCompositeOperation = 'lighter';

let grd = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
grd.addColorStop(0, backgroundColors[0]);
grd.addColorStop(1, backgroundColors[1]);
ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let items = [];

while(count--) {
    let thisRadius = rand( radius[0], radius[1] );
    let thisBlur = rand( blur[0], blur[1] );
    let x = rand( -100, canvas.width + 100 );
    let y = rand( -100, canvas.height + 100 );
    let colorIndex = Math.floor(rand(0, 299) / 100);
    let colorOne = colors[colorIndex][0];
    let colorTwo = colors[colorIndex][1];
    
    ctx.beginPath();
    ctx.filter = `blur(${thisBlur}px)`;
    let grd = ctx.createLinearGradient(x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius);
  
    grd.addColorStop(0, colorOne);
    grd.addColorStop(1, colorTwo);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.arc( x, y, thisRadius, 0, Math.PI * 2 );
    ctx.closePath();
    
    let directionX = Math.round(rand(-99, 99) / 100);
    let directionY = Math.round(rand(-99, 99) / 100);
  
    items.push({
      x: x,
      y: y,
      blur: thisBlur,
      radius: thisRadius,
      initialXDirection: directionX,
      initialYDirection: directionY,
      initialBlurDirection: directionX,
      colorOne: colorOne,
      colorTwo: colorTwo,
      gradient: [ x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius ],
    });
}


function changeCanvas(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let adjX = 2;
  let adjY = 2;
  let adjBlur = 1;
  items.forEach(function(item) {
    
      if(item.x + (item.initialXDirection * adjX) >= canvas.width && item.initialXDirection !== 0 || item.x + (item.initialXDirection * adjX) <= 0 && item.initialXDirection !== 0) {
        item.initialXDirection = item.initialXDirection * -1;
      }
      if(item.y + (item.initialYDirection * adjY) >= canvas.height && item.initialYDirection !== 0 || item.y + (item.initialYDirection * adjY) <= 0 && item.initialYDirection !== 0) {
        item.initialYDirection = item.initialYDirection * -1;
      }
      
      if(item.blur + (item.initialBlurDirection * adjBlur) >= radius[1] && item.initialBlurDirection !== 0 || item.blur + (item.initialBlurDirection * adjBlur) <= radius[0] && item.initialBlurDirection !== 0) {
        item.initialBlurDirection *= -1;
      }
    
      item.x += (item.initialXDirection * adjX);
      item.y += (item.initialYDirection * adjY);
      item.blur += (item.initialBlurDirection * adjBlur);
      ctx.beginPath();
      ctx.filter = `blur(${item.blur}px)`;
      let grd = ctx.createLinearGradient(item.gradient[0], item.gradient[1], item.gradient[2], item.gradient[3]);
      grd.addColorStop(0, item.colorOne);
      grd.addColorStop(1, item.colorTwo);
      ctx.fillStyle = grd;
      ctx.arc( item.x, item.y, item.radius, 0, Math.PI * 2 );
      ctx.fill();
      ctx.closePath();
    
  });
  window.requestAnimationFrame(changeCanvas);
  
}

window.requestAnimationFrame(changeCanvas);




// // gets the canvas element
// const canvas = document.querySelector('canvas');

// // gets the width and height of browser viewport
// const width = window.innerWidth;
// const height = window.innerHeight;

// //   set the width and height of canvas equal to browser viewport
// canvas.width = width;
// canvas.height = height;

// //   call the getContext method to draw 2d shape
// const ctx = canvas.getContext('2d');

// // create Ball class
// class Ball {
//   constructor(x, y, velx, vely, size, color) {
//     this.x = x; // horizontal position of the ball
//     this.y = y; // vertical position of the ball
//     this.velx = velx; // velocity x added to coordinate x when we animate our ball
//     this.vely = vely; // velocity y added to coordinate y
//     this.size = size; // size is a radius of the ball
//     this.color = color; // fill ball shape with given color
//   }

//   // create draw func
//   drawBall() {

//   //   const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
//   //   gradient.addColorStop(0, this.color);
//   //   gradient.addColorStop(1, 'transparent');
    
//     ctx.beginPath(); // start drawing
//     ctx.fillStyle = this.color; // fill ball shape with given color

//     // x and y is center of the ball
//     // size is radius of the ball
//     // 0 is a start point of degree around radius of the ball
//     // 2 * Math.PI is an end point which is equivalent to 360 degree
//     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//     ctx.fill(); // finish drawing
//     ctx.filter = 'blur(24px)';
//   }

//   // create update func
//   updateBall() {
//     // if x and y position is greater than or less than
//     // browser viewport than balls turn another direction
//     if (this.x + this.size >= width || this.x - this.size <= 0) {
//       this.velx = -this.velx;
//     }

//     if (this.y + this.size >= height || this.y - this.size <= 0) {
//       this.vely = -this.vely;
//     }

//     // x and y velocity added to x and y coordinate
//     // everytime updateBall func is called
//     this.x += this.velx;
//     this.y += this.vely;
//   }
// }

// //   create random number generator func
// function random(min, max) {
//   const num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num;
// }

// //   create some balls and store in an array
// const balls = [];

// while (balls.length < 13) {
//   let size = random(30, 100);

//   // create a new instance of Ball class
//   // now replace static number with random number
//   const ball = new Ball(
//     random(size, width - size),
//     random(size, height - size),
//     random(-2, 2),
//     random(-2, 2),
//     size,
//     `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
//   );

//   balls.push(ball);
// }

// //   create loop func
// function loop() {
//   // cover the previous frame's drawing before the next one is drawn
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
//   ctx.fillRect(0, 0, width, height);

//   // run necessary func
//   for (let i = 0; i < balls.length; i++) {
//     balls[i].drawBall();
//     balls[i].updateBall();
//   }

//   // lets calls loop func itself over and over again
//   //  and make animation smooth
//   requestAnimationFrame(loop);
// }

// // finaly call the loop func once ot start
// loop();