nosex=0;
nosey=0;
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO); 
    video.size(300, 300);
     video.hide();
     posenet=ml5.poseNet(video,modelloaded);
     posenet.on('pose',gotposes);
}
function take_snapshot()
{
    save("lipstick.png");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-25;
        nosey=results[0].pose.nose.y+15;
        console.log("nose x="+nosex);
        console.log("nose y="+nosey);
    }
}
function preload()
{
    lipstick=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function modelloaded()
{
console.log("modelloaded");
}
function draw()
{
    image(video,0,0,300,300);
    image( lipstick,nosex,nosey,50,20)
}