status = "";
item = ""

function preload(){
    item = loadImage("Map.jpg");
}

function setup(){
    canvas = createCanvas(650,360);
    canvas.center();

    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Laded!");
    status = true;
    object_detector.Detect(item, gotResults);
}

function gotResults(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(item, 0,0,650,360);
}