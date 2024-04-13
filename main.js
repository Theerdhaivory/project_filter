lipX=0;
lipY=0;
reyeX=0;
reyeY=0;

function preload(){
    lip_img = loadImage('https://i.postimg.cc/MTgDx8jD/l1.png');
    glass_img = loadImage('https://i.postimg.cc/wTgT64Y5/images-1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, loaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lip_img, lipX, lipY, 50 ,30);
    image(glass_img, reyeX, reyeY, 80 ,50);
}

function take_snap(){
    save('filtered_img.png');
}

function loaded(){
    console.log('Posenet loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lipX = results[0].pose.nose.x;
        lipY= results[0].pose.nose.y;
        lipX = lipX-22;
        lipY = lipY+18;
        console.log("lip x="+lipX);
        console.log("lip y="+lipY);
        reyeX = results[0].pose.rightEye.x;
        reyeY= results[0].pose.rightEye.y;
        reyeX = reyeX-22;
        reyeY = reyeY-10;
    }
}