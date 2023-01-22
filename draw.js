var up = true
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    location.reload()
  }
  if (e.keyCode == 82) {
    function PerformCalc() {
      if (up == true ) {
        for (var i=0;i<500;i++)
        {
        
          for (var i=0;i<500;i++)
          {
            var x1 = 3*Math.random()|0
            var x2 = 3*Math.random()|0
        if (x1 == 1){
          x = x + 10
        }
        if (x1 == 2){
          x = x - 10
        }
        if (x2 == 1){
          y = y + 10
        }
        if (x2 == 2){
          y = y - 10
        }

           l.beginPath();
              l.strokeStyle = q;
                l.arc(x, y, j, 0, Math.PI * 2, false);
                l.fillStyle = q;
                l.stroke();
                l.fill();
        }
          }
      }
      

      }
    setInterval(PerformCalc, 250);
  
}
    if (e.keyCode == 38) {
    for (var i=0;i<500;i++)
{
y = y - 0.1
   l.beginPath();
      l.strokeStyle = q;
        l.arc(x, y, j, 0, Math.PI * 2, false);
        l.fillStyle = q;
        l.stroke();
        l.fill();
}
  }
    if (e.keyCode == 40) {
    for (var i=0;i<500;i++)
{
y = y + 0.1
   l.beginPath();
      l.strokeStyle = q;
        l.arc(x, y, j, 0, Math.PI * 2, false);
        l.fillStyle = q;
        l.stroke();
        l.fill();
}
  }
  if (e.keyCode == 37) {
    for (var i=0;i<500;i++)
{
x = x - 0.1
   l.beginPath();
      l.strokeStyle = q;
        l.arc(x, y, j, 0, Math.PI * 2, false);
        l.fillStyle = q;
        l.stroke();
        l.fill();
}
  }
  if (e.keyCode == 39) {
    for (var i=0;i<500;i++)
{
x = x + 0.1
   l.beginPath();
      l.strokeStyle = q;
        l.arc(x, y, j, 0, Math.PI * 2, false);
        l.fillStyle = q;
        l.stroke();
        l.fill();
}
  }
     if (
    e.keyCode == 67
  ) {
    r1 = prompt("Enter the Red value in RGB")
    g1 = prompt("Enter the Green value in RGB")
    b1 = prompt("Enter the Blue value in RGB")
    q = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')'
    
  }
};
var j = Math.floor(Math.random()*5);
while (j < 2){
  j += Math.floor(Math.random()*3);
}
var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    q = 'rgb(' + r + ',' + g + ',' + b + ')';

   

var canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    var l = canvas.getContext('2d');


  
    // x and y are the coordinates of the circle
    // vx and vy are the speed
    var x = Math.floor(Math.random() * innerWidth);
    var y = Math.floor(Math.random() * innerHeight);
    var vx = Math.floor(Math.random() * 7);
    var vy = Math.floor(Math.random() * 7);
    var radius = 20;


    move();
   
    // This function will do the animation
    function move() {
        var u = Math.floor(Math.random() * 100000000000000000000);
      if (u < 0){
    x = Math.floor(Math.random() * innerWidth);
    y = Math.floor(Math.random() * innerHeight);
      }
        requestAnimationFrame(move);
 
      

 
        // Creating a circle
        
        l.beginPath();
      l.strokeStyle = q;
        l.arc(x, y, j, 0, Math.PI * 2, false);
        l.fillStyle = q;
        l.stroke();
        l.fill();
        // ball bounces
        // from the edges
if (x > innerWidth){
  x = 1
}
if (x < 0){
  x = innerWidth
}
if (y > innerHeight){
  y = 1
}
if (y < 0){
  y = innerHeight
}      
    }
