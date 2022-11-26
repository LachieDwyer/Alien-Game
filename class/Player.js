class Player {
    constructor(){
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;   
    this.life = 3;
    this.score = 0;
    this.rank = 0;
    }
    
    addPlayer(){    
    var playerIndex = "players/player" + this.index;
    if (this.index=== 1){
        this.positionX = 50
    }
    else{
        this.positionX = width-50

    }

    database.ref(playerIndex).set({
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
        score:this.score,
        rank:this.rank,
        life:this.life
    })

    }

    
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", data =>{
            playerCount = data.val();
        })

    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });

    }

}