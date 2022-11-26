class Game{

    constructor(){
        this.resetTitle = createElement("h2")
        this.resetButton = createButton("Reset")

    }

start(){

player = new Player();
playerCount = player.getCount();

form = new Form();
form.display();



alien1 = createSprite(50, height/2)
alien1.addImage("alien1", alien1)
alien1.scale = 0.5

alien2 = createSprite(width-50, height/2)
alien2.addImage("alien2", alien2)
alien2.scale = 0.5

aliens_array = [alien1,alien2]
}


play(){
this.handleElements()
this.handleResetButton()

image(backgroundImage, 0, 0, width, height)

drawSprites() 
}

handleElements(){
    form.hide();
    this.titleHeading.position(width/2, 50)

    this.resetTitle.html("Reset")
    this.resetTitle.position(width/2 + 400, 40)

    this.resetButton.position(width/2+300, 40)
}

getState(){
var gameStateRef = database.ref("gameState")
gameStateRef.on("value", data => {
gameState = data.val()

})
}

update(state){
database.ref("/").update({
gameState: state
})

}

handleResetButton(){
    this.resetButton.mousePressed(()=>{
        database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
        })
    })

}


end(){
    console.log("Game Over")
}
}