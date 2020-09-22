class Game {
    constructor() {

    }
    getState() {
        var gsRef = database.ref('gameState');
        gsRef.on("value", function(data){
            gameState: data.val()
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }
    async start() {
        if(gameState === 0) {
            player = new Player()
            var pcRef = await database.ref('playerCount').once("value");
            if(pcRef.exists()) {
                playerCount = pcRef.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
    }
    play() {
        console.log("play");
        form.hide();
        textSize(30);
        text("GAME STARTS!!", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined) {
            var displayPos = 130;
            for(var plr in allPlayers) {
                displayPos = displayPos + 20;
                textSize(15);
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, displayPos)
                if(plr === "player " + player.index){
                    fill("red");
                }
                else {
                    fill("black");
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 50;
            player.update();
        }
    }
}