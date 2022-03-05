earRightX = 0;
earRightY = 0;
difference_1 = 0;
difference_2 = 0;

rightElbowY = 0;
leftElbowY = 0;
rightElbowX = 0;
leftElbowX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 160);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
    

}

function modelLoaded() {
    console.log('Pose net is initialized');
}

function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         earRightX = results[0].pose.rightEar.x;
         earRightY = results[0].pose.rightEar.y;
         console.log("rightEarX = " + earRightX + "rightEarY =" + earRightY);
         leftElbowY = results[0].pose.leftElbow.y;
         rightElbowY = results[0].pose.rightElbow.y;
         difference_1 = floor(leftElbowY - rightElbowY);
         leftElbowX = results[0].pose.leftElbow.x;
         rightElbowX = results[0].pose.rightElbow.x;
         difference_2 = floor(leftElbowX - rightElbowX);
         console.log("LeftElbowX = " + leftElbowX + "RightElbowX = " + rightElbowX + "Difference_1 = "  + difference_1);
         console.log("LeftElbowY = " + leftElbowY + "RightElbowY = " + rightElbowY + "Difference_2 = "  + difference_2);
         


     }
}

function draw() {
    background('#abfbff');
    document.getElementById("square_side").innerHTML = "Width and Height of A Rectangle will be = " + difference_1 + "px" + difference_2 + "px";
fill('#038201');
stroke('#a60000');
rect(earRightX, earRightY, difference_2, difference_1);
}
