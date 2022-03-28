LeftWristX = 0;
RightWristX = 0;
Difference = 0;
function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 450);
canvas.position(560, 130);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialised");
}

function draw()
{
background("#969A97");
textSize(Difference);
text('Yaansh', 20, 225);
fill("#3d3de0");

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;

        Difference = floor(LeftWristX - RightWristX);

        console.log("Left wrist x = " + LeftWristX + " , Right wrist x = " + RightWristX + " , Difference = " + Difference);

    }
}
