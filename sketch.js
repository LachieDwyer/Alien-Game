var canvas;
var backgroundImage, alien1, alien2;
var database;
var form, game;
var player, playerCount = 0;
var gameState = 0;

function preload(){
backgroundImage = loadImage("assets/bg.jpeg");
alien1 = loadImage("./assets/player1.jpg");
alien2 = loadImage("./assets/player2.jpg");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight)
database = firebase.database()
game = new Game()
game.getState();
game.start();
}

function draw(){
background(backgroundImage)

if(playerCount===2){
    game.update(1);
}


if(gameState===1){
    
    game.play();

}

if(gameState===2){

    game.end();

}
}


function windowResized(){
resizeCanvas(windowWidth, windowHeight)


}