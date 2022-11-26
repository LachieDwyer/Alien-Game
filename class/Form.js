class Form {
    constructor(){
        this.textInput = createInput("").attribute("placeholder", "Enter your alien's name")
        this.playButton = createButton("Begin Battle")
        this.titleHeading = createElement("h1")
        this.greeting = createElement("h2")
    }

    setElementsPosition(){
        this.textInput.position(width/2-30, height/2);
        this.playButton.position(width/2, height/2+50);
        this.titleHeading.position(width/2, 100);
        this.greeting.position(width/2-100, height/2);
    }

    handleMousePressed(){
        this.playButton.mousePressed(()=> {
        this.textInput.hide();
        this.playButton.hide();
        var message = `Hello ${this.textInput.value()}, please wait for another alien to begin the battle`
        this.greeting.html(message);
        playerCount += 1
        player.name = this.textInput.value()
        player.index = playerCount
        player.addPlayer();
        player.updateCount(playerCount);
    
    });}

    hide(){
        this.greeting.hide()
        this.textInput.hide()
        this.playButton.hide()
    }

    display(){
        this.setElementsPosition()
        this.handleMousePressed()
        }
    
}