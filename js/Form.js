class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');

  }

hide(){
  this.greeting.hide();
  this.input.hide();
  this.button.hide();
}


  display(){

    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 -50, 0);
    
    this.input.position(displayWidth/2 -50, displayHeight/2-40);
    this.button.position(displayWidth/2 +50, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
     this.button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      this.greeting.html("Hello " + name )
      this.greeting.position(displayWidth/2 -50, displayHeight/2 -20)
    });

  }
}
