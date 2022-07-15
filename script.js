function randomChoice(max) {
    var rand = Math.floor(Math.random() * max);
    return rand;
  }
  var result;
//0 will be scissors, 1 will be rock, 2 will be paper
  function randomChoice0(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "tie";
    }
    else if (comp == 1){
        result = "lost";
    }
    else{ result = "win"}
  }

  function randomChoice1(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "win";
    }
    else if (comp == 1){
        result = "tie";
    }
    else{ result = "lost"}
  }

  function randomChoice2(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "lost";
    }
    else if (comp == 1){
        result = "win";
    }
    else{ result = "tie"}
  }