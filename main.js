var nosex=0;
var nosey=0;
function preload(){
lipstick=loadImage("https://i.postimg.cc/HkMSbPg5/lipstick.png");
poushtach=loadImage("https://i.postimg.cc/ryhYTrjd/moustach.png");
}
function setup() {

    canvas=createCanvas(400, 400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
posenet=ml5.poseNet(video,modleloaded);
posenet.on("pose",gotresult);
  }
function draw(){
  image(video ,0,0,400,400);
  fill("pink");
  // image(lipstick,nosex -15,nosey -5,30,30)
  image(poushtach,nosex -15,nosey -3,50,50)
  // circle(nosex,nosey -100,25);
  
}
function modleloaded(){
  console.log("posenet is initialzeded")
}
function gotresult(result){
  if(result.length>0){
    console.log(result);
    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y;
  }

}
function ts(){
  save("my picture.png")
}