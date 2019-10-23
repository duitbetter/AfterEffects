EXPRESION LIBRARY
____________________________________________



____________________________________________

WORLD SPACE FADE
startFade=thisComp.layer("Control").effect("StartFade")("Slider");
endFade=thisComp.layer("Control").effect("End Fade")("Slider");
cam = thisComp.activeCamera.toWorld([0,0,0]);
pos = toWorld(anchorPoint);
dst = length(cam,pos);
ease(dst,startFade,endFade,100,0)



AUTO CREDITS LESSON

Sliders: Separation, Seed Random, X Random, Y Random

// randomly set position in XYZ space
#Text layer
//Source text
$.evalFile("/Developer/Expressions/Data.txt")
line = "line" + (index-1)


//Position
seedRandom(thisComp.layer("Controls").effect("Seed Random")("Slider"),1);
xRan= thisComp.layer("Controls").effect("X Random")("Slider");
yRan= thisComp.layer("Controls").effect("Y Random")("Slider");
xy = random([-xRan,-yRan],[xRan,yRan]);
z = (index-2)* thisComp.layer("Controls").effect("Separation")("Slider")

xy + [0,0,z]

// Opacity
a=position;
b=thisComp.activeCamera.position;

l = length(a,b);

linear(l,14000,5000,100,0)

// Self-animating camera
#camera 1
z = thisComp.numLayers-2)*thisComp.layer("Controls").effect("Separation")("Slider")
zPos = linear(time,0,thisComp.duration,-8000,z+500)
value + [0,0,zPos]

____________________________________________

Parse Int > Converts string number into a Integer

DECIMALS AND TRUNCATION
posterizeTime(10);
r = random(0,100);
numFixed = r.toFixed(2)
if(r<10) r="0" + numFixed

____________________________________________


FLICKER
//slider
f = random(-100,100);
i = Math.floorrandom(0,9);

if (i==0)f else 0

if(f<0 && f<-20 || )00

// position
y =  effect("Flicker")("Slider");
value + [0,y]

// Fliggle
seedRandmom(3);
w = wiggle(10,100);
pos = clamp(w,60,100);
nes = clamp(w,-60,-100);
pos + neg

WIGGLE
wiggle(1,500,1,2,time)

// Fixed random scale
seedRandom(index, true); //timeless is true
s = random(50,100);

[s,s]

// random color
hue = thisComp.layer("CONTROL").effect("Angle Control")("Angle")
c = content("Ellipse 1").content("Fill 1").color
cHSL = rgbToHsl(c);
hueShift = random(-hue,hue)/360;
cHSL = cHSL + [hueShift,0,0,0]

hslToRgb(cHSL)


// Random opacity pop on
fadeDuration = thisComp.frameDuration*thisComp.layer("CONTROL").effect("T")("Slider");
maxDelay = thisComp.layer("CONTROL").effect("T 2")("Slider");
seedRandom(index,true);
delay = random(maxDelay);
t = time -(inPoint + delay);
linear(t,0,fadeDuration,0,100)




MARKER TRIGGER (AFX223-03)
f=2-; // duration of transitions in frames
dur = (f*thisComp.frameDuration);

if(marker.numKeys>0){ // Error Check
    n = marker.nearestKey(time).index;  // nearest key search
    if(marker.key(n).time < time){n++} // find marker after playback point

    if(n>marker.numKeys){ // n will never pass the total amount of marker key
        marker.numKeys
    }else{
        t = marker.key(n).time;
        ease(time,t-dur,t, n-1,n) //
    }

} else{0}






____________________________________________

AARON COMPTILER EXPRESSIONS
//Create a null layer at the top named "Start Tiles" with a Slider effect "Columns",
//and one at the bottom named "End Tiles"

// For Position:
var controlLayer = thisComp.layer("Start Tiles");
var numColumns = Math.floor(thisComp.layer("Start Tiles").effect("Columns")("Slider").value);
var tileIndex = index - controlLayer.index-1;
var columnIndex = tileIndex%numColumns;

var rowIndex = Math.floor(tileIndex/numColumns);
var columnWidth = thisComp.width/numColumns;
var firstTile = thisComp.layer(controlLayer.index+1);
var rowHeight = firstTile.height/firstTile.width*columnWidth;
var xPos = columnWidth*(columnIndex+.5);
var yPos = rowHeight*(rowIndex+.5);
[xPos, yPos];

// For Scale:
var controlLayer = thisComp.layer("Start Tiles");
var numColumns = Math.floor(thisComp.layer("Start Tiles").effect("Columns")("Slider").value);
var columnWidth = thisComp.width/numColumns;
var firstTile = thisComp.layer(controlLayer.index+1);
var rowHeight = firstTile.width/firstTile.height*columnWidth;
var xyScale = columnWidth

/width*100;
[xyScale, xyScale]
