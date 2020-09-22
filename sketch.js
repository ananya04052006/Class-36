var database;
var playerCount, gameState, form, player, game;
var allPlayers;

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  gameState = 0;
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount === 4) {
    game.update(1);
  }
  if(gameState === 1) {
    clear();
    game.play();
  }

}