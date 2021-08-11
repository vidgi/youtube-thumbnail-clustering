let sf = 1; // scaleFactor
let panx = 0; // pan X
let pany = 0; // pan Y
let mx, my; // mouse coords;
let sel;
var clusterToDisplay = 18;

var index = 0;
var w = window.innerWidth;
var h = window.innerHeight;
var thumbWidth = 1280 / 8;
var thumbHeight = 720 / 8;

// var screenFactor = 1;
let clusters;
var cluster_keys;

var allClusterImageList = [];
var indexMax;

function preload() {
  clusters = loadJSON('clusters.json');
}

function setup() {
  textAlign(CENTER);
  sel = createSelect();
  sel.position(10, 10);

  cluster_keys = Object.keys(clusters);
  for (let i = 0; i < cluster_keys.length; i++) {
    const key = cluster_keys[i];
    sel.option(i);
    var oneClusterList = [];
    for (j = 0; j < clusters[key].length; j++) {
      str1 = '../cover-video/images/'
      url = str1.concat(clusters[key][j]);
      oneClusterList.push(loadImage(url));
    }
    allClusterImageList.push(oneClusterList);
    sel.changed(mySelectEvent);

  }
  // console.log(allClusterImageList);
  createCanvas(w, h);
  background(255);
  frameRate(30);
}

function draw() {
  background(255);
  mx = mouseX;
  my = mouseY;


  translate(mx, my);
  scale(sf);
  translate(-mx, -my);
  translate();

  if (mouseIsPressed) {
    panx -= pmouseX - mouseX;
    pany -= pmouseY - mouseY;
  }


  var x = 0;
  var y = 0;
  var padding = 20;

  for (let i = 0; i < allClusterImageList[clusterToDisplay].length; i += 1) {
    image(allClusterImageList[clusterToDisplay][i], x, y, thumbWidth, thumbHeight);
    if (x > w - thumbWidth - padding) {
      x = 0
      y += (thumbHeight + padding)
    } else {
      x += (thumbWidth + padding)
    }
  }

}

window.addEventListener("wheel", function(e) {
  if (e.deltaY > 0)
    sf *= 1.05;
  else
    sf *= 0.95;
});

function mySelectEvent() {
  clusterToDisplay = parseInt(sel.value());
  // background(200);
}