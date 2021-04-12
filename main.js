
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



car_1 = "Car_1.png";
car_1_x = 10;
car_1_y = 10;
car_1_width = 100;
car_1_height = 50;

car_2 = "Car_2.png";
car_2_x = 10;
car_2_y = 70;
car_2_width = 110;
car_2_height = 55;

background_image = "background.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_image;

    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadcar_1;
    car_1_imgTag.src= car_1;

    car_2_imgTag = new Image();
    car_2_imgTag.onload = uploadcar_2;
    car_2_imgTag.src= car_2;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar_1() {
    ctx.drawImage(car_1_imgTag, car_1_x,car_1_y , car_1_width, car_1_height);
   
}

function uploadcar_2() {
    ctx.drawImage(car_2_imgTag, car_2_x,car_2_y , car_2_width, car_2_height);
   
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log(keyPressed);

    //car 1 keys
    if (keyPressed == '38'){
        up();
        console.log("up");
        
    }

    if (keyPressed == '40'){
        down();
        console.log("down");
        
    }

    if (keyPressed == '39'){
        right();
        console.log("right");
        
    }

    if (keyPressed == '37'){
        left();
        console.log("left");
        
    }


    //car 2 keys
    if (keyPressed == '87'){
        up();
        console.log("W");
        
    }

    if (keyPressed == '83'){
        down();
        console.log("S");
        
    }

    if (keyPressed == '68'){
        right();
        console.log("D");
        
    }

    if (keyPressed == '65'){
        left();
        console.log("A");
        
    }


    
}