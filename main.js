function preload() {
   gameover= loadSound("gameover.wav");
   jump= loadSound("jump.wav");
   kick= loadSound("kick.wav");
   coin= loadSound("coin.wav");
   lose= loadSound("mariodie.wav")

	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas')
video= createCapture(VIDEO);
video.size(800,400);
video.parent('game-console');


poseNet= ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotResults)
}

function modelloaded(){
	console.log("Model is loaded");
}

function gotResults(results){
	if(results.length>0){
		console.log(results);

		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y
	}
}

function draw() {
	game()
}







