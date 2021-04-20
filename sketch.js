const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

 

    Engine.update(engine);

    


}

async function getBackgroundImg()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/India/Kerela")

    var responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.datetime);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=06 && hour<= 19)
    {
        bg = "sunrise1.png";
    }
    if (hour>=07 && hour<=18)
    {
        bg = "sunrise2.jpg";
    }

    if (hour>=8 && hour<=17)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=16)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=15)
    {
        bg = "sunrise2.png";
    }
    
    if (hour>=8 && hour<=15)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=14)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=13)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=12)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=11)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=10)
    {
        bg = "sunrise2.png";
    }

    if (hour>=8 && hour<=9)
    {
        bg = "sunrise2.png";
    }



    backgroundImg = loadImage(bg)
}