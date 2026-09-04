const canvas = document.getElementById("testshape");
const ctx = canvas.getContext("2d");
canvas.width = 2250;
canvas.height = 1600;

//------CUBE------//
function cube(x1, x2, y1, y2) {
  ctx.fillStyle = "blue";
  ctx.fillRect(x1, x2, y1, y2);
}

//-----CIRCLE-----//
function circle(c,x, y, r, sa, end) {
  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.arc(x, y, r, sa, Math.PI * end);
  ctx.fill();
}

//-----LINE-----//
function line(c, lw, x1, y1, x2, y2) {
  ctx.strokeStyle = c;
  ctx.lineWidth = lw;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

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
//-----4 POINT POLY LINE-----//
function fourPoints(c, lw, fs, mx, my, x1, y1, x2, y2, x3, y3) {
  ctx.strokeStyle = c;
  ctx.lineWidth = lw;
  ctx.fillStyle = fs;
  ctx.beginPath();
  ctx.moveTo(mx, my);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
//-----5 POINT POLY LINE-----//
function fivePoints(c, lw, fs, mx, my, x1, y1, x2, y2, x3, y3, x4, y4) {
  ctx.strokeStyle = c;
  ctx.lineWidth = lw;
  ctx.fillStyle = fs;
  ctx.beginPath();
  ctx.moveTo(mx, my);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

//--------SIN WAVE----------//
function sin(s, lw, ys, fr, a) {
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
  ctx.stroke();
}
sin("blue", 5, 200, 0.01, 50);

//--------SIN WAVE WITH FILL----------//
function sinFill(f, s, lw, ys, fr, a, phase = 0) {
  ctx.fillStyle = f;
  ctx.strokeStyle = s;
  ctx.lineWidth = lw;
  ctx.beginPath();
  for (let x = 0; x <= canvas.width; x++) {
    const y = ys + Math.sin(x * fr + phase) * a;

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
function yGrid(c, lw, x1, y1, x2, y2, times) {
  for (let i = 0; i < times; i++) {
    line(c, lw, x1 + i * 100, y1, x2 + i * 100, y2);
  }
}
function xGrid(c, lw, x1, y1, x2, y2, times) {
  for (let i = 0; i < times; i++) {
    line(c, lw, x1, y1 + i * 100, x2, y2 + i * 100);
  }
}
xGrid("grey", 2, 0, 0, 2250, 0, 23);
yGrid("grey", 2, 0, 0, 0, 1600, 24);

let phase = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
   //xGrid("grey", 2, 0, 0, 2250, 0, 23);
   //yGrid("grey", 2, 0, 0, 0, 1600, 24);
  sinFill("	#4188ff", "#4188ff", 0, 900, 0.011, 10, phase);
  sinFill("	#649eff", "#649eff", 0, 920, 0.009, 20, phase);
  circle("#d1b65d",1400,1150,300,0,600);
  circle("#ffda5f",1050,1200,500,0,600);
  circle("#ffe386",700,1170,300,0,600);

  fivePoints("grey",2,"grey",800,600,850,600,900,840,830,860,800,820);
  fivePoints("grey",2,"grey",1300,600,1350,580,1340,820,1330,835,1200,800);


  sinFill("#78aaff", "#78aaff", 0, 950, 0.007, 25, phase);
  sinFill("#92bbff", "#92bbff", 0, 1000, 0.006, 40, phase);
  sinFill("#accbff", "#accbff", 0, 1050, 0.005, 50, phase);
  phase += 0.01;
  requestAnimationFrame(draw);
}

draw();
