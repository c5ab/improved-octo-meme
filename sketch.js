
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var browser
var input
var camera
var wallpaper
var wallpaper1

function preload(){


}
function setup() {
  createCanvas(windowWidth,windowHeight);
 textSize(24)
 text("Please select payment method",50,200)

camera = createButton("card")
camera.position(200,240)
camera.scale = 0.9
camera.mouseClicked(open)



 

  
}


function draw() 
{
  
  Engine.update(engine);
  
  const value = input.value()
  ;

  


}


function open(){
text("Rs.1099 has been debited from your account",0,500)
}


