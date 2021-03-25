class Form {
constructor(){

}


display(){

    let input, button, greeting;

      input = createInput();
      input.position(20, 65);
    
      button = createButton('submit');
      button.position(input.x + input.width, 65);
      button.mousePressed(greet);
    
      greeting = createElement('h2', 'what is your name?');
      greeting.position(20, 5);
    
      textAlign(CENTER);
      textSize(50);
    
    
    function greet() {
      const name = input.value();
      greeting.html('hello ' + name + '!');
      input.value('');
    input.hide();
    button.hide();
    greeting.html("welcome " + name + " This is a game that helps you improve your math and spellings.", 10, 200)
    
    }
}

}

