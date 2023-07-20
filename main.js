difference = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(600,400);

    canvas = createCanvas(375,375);
    canvas.position(700,195);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
}
}

function draw() {
    background('#f0e38e');

    document.getElementById("square_side").innerHTML = "Width And Height of the Name will be = " + difference +"px";
        text("Shreyansh Banger", 320, 120);
        fill('#F90093');
        stroke('#F90093');
        square(noseX, noseY, difference);
}
