const canvas = document.getElementById("testshape");
const ctx = canvas.getContext("2d");
canvas.width = 2250;
canvas.height = 1600;

//------CUBE------//
function cube(x1, x2, y1, y2) {
  ctx.fillStyle = "blue";
  ctx.fillRect(x1, x2, y1, y2);
}
cube(300, 400, 200, 100);

//-----CIRCLE-----//
function circle(x, y, r, sa, end) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, r, sa, Math.PI * end);
  ctx.fill();
}
circle(500, 700, 50, 0, 5);
//-----LINE-----//
function line(x1, y1, x2, y2) {
  ctx.strokeStyle = "green";
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
line(800, 300, 900, 400);
//-----TRIANGLE/POLYLINES-----//
function triangle(mx, my, x1, y1, x2, y2) {
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 2;
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.moveTo(mx, my);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
triangle(800, 1600, 1000, 1700, 700, 1000);

//--------SIN WAVE WITH FILL----------//
function sinFill(f, s, lw, ys, fr, a) {
  ctx.fillStyle = f;
  ctx.strokeStyle = s;
  ctx.lineWidth = lw;
  ctx.beginPath();
  for (let x = 0; x <= canvas.width; x++) {
    const y = ys + Math.sin(x * fr) * a;

    if (x === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.lineTo(canvas.width, canvas.height); // Extends the path down to the bottom of the canvas
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOTICE: FUNCTIONS CAN BE CALLED ANYTIME, SO FOR EVERYTHING CALL IT HERE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
sinFill("red", "white", 2, 750, 0.005, 50);
sinFill("orange", "red", 2, 800, 0.005, 50); //note: place the back one first, as everything else is placed ontop
sinFill("yellow", "orange", 2, 850, 0.005, 50);
sinFill("green", "yellow", 2, 900, 0.005, 50);
sinFill("blue", "green", 2, 950, 0.005, 50);
sinFill("purple", "blue", 2, 1000, 0.005, 50);
sinFill("pink", "purple", 2, 1050, 0.005, 50);
sinFill("white", "pink", 2, 1100, 0.005, 50);