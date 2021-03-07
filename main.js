var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color1 = "red";
ctx.beginPath();
ctx.strokeStyle ="blue" ;
ctx.lineWidth = 6;
ctx.arc(250, 300, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.arc(340, 300, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 6;
ctx.arc(430, 300, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 6;
ctx.arc(290, 350, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 6;
ctx.arc(385, 350, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.lineWidth = 1 ;
ctx.rect(140,220,430,200);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
var color_TextInput = document.getElementById("color").value;

function my_mousedown(e) {
    console.log(color_TextInput);
    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color_TextInput;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}