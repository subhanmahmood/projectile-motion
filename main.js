var canvas = document.querySelector( 'canvas' );

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext( '2d' );

var GRAVITY = 9.81;
var VELOCITY = 10;
var ANGLE = 30;
var vy = VELOCITY * Math.sin( ANGLE );
var vx = VELOCITY * Math.cos( ANGLE );

console.log( "done" );
var x = 200;
var y = window.innerHeight;
var dx = 2;
var radius = 30;
console.log(window.innerHeight);
function animate( ) {
  c.clearRect( 0, 0, innerWidth, innerHeight );
  requestAnimationFrame( animate );
  c.beginPath( );
  c.arc( x, y, radius, 0, Math.PI * 2, false );
  c.stroke( )
  x += vx;
  y += vy;
  if ( x + radius > innerWidth || x - radius < 0 ) {
    dx = -dx;
  }

}

animate( );
