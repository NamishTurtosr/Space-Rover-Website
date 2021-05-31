ctx= canvas.getContent("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.strokeStyle();

canvas.addEventListner("mousedown", my_mousedown);

function my_mousedown(e)

    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;


    console.log("X =" + mouse_x + ",Y =" + mouse_y)
    
