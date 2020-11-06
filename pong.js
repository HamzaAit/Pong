let y;
let vx;
let vy;
let orientationx;
let orientationy;

function setup() {
    createCanvas(600, 400);
    y = 10;
    vx = 0;
    vy = 0;
    orientationx = -1;
    orientationy = -1;
}




function draw() {
    background(0);
    fill(255);
    rect(10, y, 20, 60);
    // rect(570,10,20,60);
    circle(300 + vx, 200 + vy, 14);
    vx += 2 * orientationx;
    vy += 4 * orientationy;

    // Collision with top and bottom
    if (200 + vy -7 <= 0){
        orientationy = 1;
    }
    else if(200 + vy + 7 >= 400 ){
        orientationy = -1;
    }

    //Moving the paddle within the screen
    if (keyIsDown(DOWN_ARROW))
        y += 5;
    else if (keyIsDown(UP_ARROW))
        y -= 5;
    y = constrain(y, 0, 340);

    //Collision ball - paddle (temporarily right border)
    if(300 + vx - 7 <= 30 && 300 + vx - 7 >=25 && 200 + vy -7 >= y && 200 + vy + 7 <= y + 60 ){
        orientationx = 1;
    }
    else if(300 + vx + 7 >= 600 ){
        orientationx = -1;
    }

}

