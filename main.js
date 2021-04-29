canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
img_baground = "mars.jpg";
img_rover = "rover.png";
rover_width = 90 ;
rover_height = 70 ; 
rover_x = 0 ;
rover_y = 0 ;
function add() {
    B_ground = new Image();
    B_ground.onload = uploadbackround;
    B_ground.src = img_baground;
    
    r_ground = new Image();
    r_ground.onload = uploadrover;
    r_ground.src = img_rover;
}
function uploadbackround() {
    ctx.drawImage(B_ground , 0 , 0 , canvas.width , canvas.height);
}
function uploadrover() {
    ctx.drawImage(r_ground , rover_x , rover_y , rover_width , rover_height);
}
window.addEventListener("keydown",heer);
function heer(e){
    keyPressed = e.keyCode;
console.log (keyPressed);
if (keyPressed == '38')
{
up();
console.log("up");
}

if (keyPressed == '40')
{
down();
console.log("down");
}

if (keyPressed == '37')
{
left();
console.log("left");
}

if (keyPressed == '39')
{
right();
console.log("right");
}

}
function up(){
if (rover_y>=0){
    rover_y -= 10;
    console.log("when up is pressed = "+rover_x + "-" + rover_y);
    uploadbackround();
    uploadrover();
}
} 

function down(){
    if (rover_y<=500){
        rover_y += 10;
        console.log("when down is pressed = "+rover_x + "-" + rover_y);
        uploadbackround();
        uploadrover();
    }
    }

    function right(){
        if (rover_x<=500){
            rover_x += 10;
            console.log("when right is pressed = "+rover_x + "-" + rover_y);
            uploadbackround();
            uploadrover();
        }
        }

        function left(){
            if (rover_x>=0){
                rover_x -= 10;
                console.log("when left is pressed = "+rover_x + "-" + rover_y);
                uploadbackround();
                uploadrover();
            }
            }
