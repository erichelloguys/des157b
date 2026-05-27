
let translateX = 250;
let translateY = 20;
let bodyX = 250 - translateX;
let bodyY = 120 - translateY;
let leftArmX = 200 - translateX;
let leftArmY = 150 - translateY;
let rightArmX = 280 - translateX;
let rightArmY = 140 - translateY;
let leftLegX = 220 - translateX;
let leftLegY = 240 - translateY;
let rightLegX = 250 - translateX;
let rightLegY = 240 - translateY;
let headX = 250 - translateX;
let headY = 100 - translateY;
let headD = 50;
let ropeX = 250 - translateX;
let ropeY = 20 - translateY;
let angleOfRotation = 0;
let speedOfRotation = 3;
let acceleRotation = 0.3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    background("#9B0B0B");
}

function draw() {
    background("#9B0B0B");
    stroke("#FF0004");
    ellipse(250, 420, 380, 200);
    line(250, 320, 400, 500);
    line(400, 500, 80, 360);
    line(80, 360, 420, 360);
    line(420, 360, 100, 500);
    line(100, 500, 250, 320); //room
    stroke("#FC7F82");
    strokeWeight(5);
    fill("#6C0002");
    quad(100, 0, 400, 0, 400, 320, 100, 320);
    fill("#740709");
    quad(0, 0, 100, 0, 100, 320, 0, 500);
    quad(400, 0, 500, 0, 500, 500, 400, 320);
    noFill();
    quad(0, 500, 100, 320, 400, 320, 500, 500);
    noFill(); //beam
    stroke(0);
    strokeWeight(10);
    line(0, 25, 500, 25);
    push();
    translate(translateX, translateY);
    rotate(radians(angleOfRotation));
    angleOfRotation = angleOfRotation + speedOfRotation;

    if (angleOfRotation >= 0 && angleOfRotation >= 90) {
        speedOfRotation = -speedOfRotation;
        speedOfRotation = speedOfRotation + acceleRotation;
    }
    if (angleOfRotation <= 0 && angleOfRotation <= -90) {
        speedOfRotation = -speedOfRotation;
        speedOfRotation = speedOfRotation - acceleRotation;
    }
    if (angleOfRotation <= -95) {
        speedOfRotation = 0;
        bodyX = bodyX - 5;
        leftArmX = leftArmX - 4;
        rightArmX = rightArmX - 4;
        leftLegX = leftLegX - 5;
        rightLegX = rightLegX - 4;
        headX = headX - 5;
        bodyY = bodyY - 2;
        leftArmY = leftArmY - 1;
        rightArmY = rightArmY - 1;
        leftLegY = leftLegY - 2;
        rightLegY = rightLegY - 2;
        headY = headY - 2;
    }

    if (angleOfRotation >= 95) {
        speedOfRotation = 0;
        bodyX = bodyX + 5;
        leftArmX = leftArmX + 4;
        rightArmX = rightArmX + 4;
        leftLegX = leftLegX + 5;
        rightLegX = rightLegX + 4;
        headX = headX + 5;
        bodyY = bodyY - 2;
        leftArmY = leftArmY + 1;
        rightArmY = rightArmY + 1;
        leftLegY = leftLegY + 2;
        rightLegY = rightLegY + 2;
        headY = headY + 2;
    }
    if (rightArmX <= -530 || leftArmX >= 530) {
        phaseReset();
    } //From 0-90 want speed to be decreasing
    //need acceleration = -0.1, once hit 90, reverse speed, if speed
    // angle -= angle + sped + acel
    //rotation = 0, reverse acel
    drawBody(bodyX, bodyY);
    drawLeftArm(leftArmX, leftArmY);
    drawRightArm(rightArmX, rightArmY);
    drawLeftLeg(leftLegX, leftLegY);
    drawRightLeg(rightLegX, rightLegY);
    drawHead(headX, headY, headD);
    drawRope(ropeX, ropeY);
    pop();
}
function drawBody(x, y) {
    fill("#5B6F7C");
    strokeWeight(1);
    beginShape();
    vertex(x, y);
    vertex(x - 30, y + 20);
    vertex(x - 30, y + 120);
    vertex(x + 30, y + 120);
    vertex(x + 30, y + 20);
    vertex(x, y);
    endShape();
}
function drawLeftArm(x, y) {
    fill("#CEC9BF");
    strokeWeight(1);
    quad(x, y, x, y + 100, x + 20, y + 100, x + 20, y - 10);
}
function drawRightArm(x, y) {
    strokeWeight(1);
    quad(x, y, x, y + 110, x + 20, y + 110, x + 20, y + 10);
}
function drawLeftLeg(x, y) {
    fill("#5B6F7C");
    strokeWeight(1);
    quad(x, y, x, y + 140, x + 30, y + 140, x + 30, y);
}
function drawRightLeg(x, y) {
    fill("#5B6F7C");
    strokeWeight(1);
    quad(x, y, x, y + 140, x + 30, y + 140, x + 30, y);
}
function drawHead(x, y, d) {
    strokeWeight(1);
    fill("#E3C2B3");
    circle(x, y, d);
    fill(0, 0, 0);
    circle(x - 10, y - 5, d - 40);
    circle(x + 10, y - 5, d - 40);
    beginShape();
    curveVertex(x - 10, y + 10);
    curveVertex(x - 10, y + 10);
    curveVertex(x, y + 20);
    curveVertex(x + 10, y + 10);
    curveVertex(x, y + 10);
    curveVertex(x - 10, y + 10);
    curveVertex(x - 10, y + 10);
    endShape();
}
function drawRope(x, y) {
    noFill();
    strokeWeight(5);
    beginShape();
    curveVertex(x, y);
    curveVertex(x, y);
    curveVertex(x - 30, y + 80);
    curveVertex(x, y + 110);
    curveVertex(x + 30, y + 80);
    curveVertex(x, y);
    curveVertex(x, y);
    endShape();
}
function phaseReset() {
    translateX = 250;
    translateY = 20;
    bodyX = 250 - translateX;
    bodyY = 120 - translateY;
    leftArmX = 200 - translateX;
    leftArmY = 150 - translateY;
    rightArmX = 280 - translateX;
    rightArmY = 140 - translateY;
    leftLegX = 220 - translateX;
    leftLegY = 240 - translateY;
    rightLegX = 250 - translateX;
    rightLegY = 240 - translateY;
    headX = 250 - translateX;
    headY = 100 - translateY;
    headD = 50;
    ropeX = 250 - translateX;
    ropeY = 20 - translateY;
    angleOfRotation = 0;
    speedOfRotation = 3;
    acceleRotation = 0.1;
}