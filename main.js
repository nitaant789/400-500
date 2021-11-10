song1_status="";
music1 ="";
music2 = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload(){
music1 = loadSound("music.mp3");
music2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
   canvas.center();
    video = createCapture(VIDEO);
     video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
       poseNet.on('pose', gotPoses);
 }
 function modelLoaded(){
   console.log("PoseNet is initialized");
 }
 function gotPoses(results){
   if(results.length > 0){
     console.log(results);
     scoreLeftWrist = results[0].pose.keypoints[9].score;
     
    console.log("left wrist score = "+scoreLeftWrist);
     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log("left Wrist Y"+ leftWristX+"left Wrist Y"+ leftWristY);
     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("right Wrist Y"+ rightWristX+"right Wrist Y"+ rightWristY);
   }
  }
function draw() { 
   image(video, 0, 0, 600, 500);
   song1_status= music1.isPlaying();
   
   fill("#FF0000");
     stroke("#000000");
     if(scoreLeftWrist > 0.2){
      circle(leftWristX, leftWristY, 20);
      music2.stop()
      if (song1_status == false) {
       music1.play();
       document.getElementById("song_name").innerHTML = " Now playing : harry Potter song"
      }
     } 
     
}