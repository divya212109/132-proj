img = "";
status = "";

function setup() {
    canvas = createCanvas (640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
img = loadImage('bed.jpeg');
}

function draw() {
image(img, 0, 0, 640, 420);
fill("#a9f5e7")
text("Bed", 45, 75);
noFill();
stroke("#a9eaf5");
rect(45, 80, 434, 338);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}