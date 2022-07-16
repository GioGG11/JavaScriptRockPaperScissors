function randomChoice(max) {
    var rand = Math.floor(Math.random() * max);
    return rand;
  }
  var result;

//0 will be scissors, 1 will be rock, 2 will be paper
  function test(){
    alert("Test");
  }

function randomChoice0(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "tie";
        console.log(result);
        alert(result);
    }
    else if (comp == 1){
        result = "lost";
        console.log(result);
        alert(result);
    }
    else{ result = "win"
    console.log(result);
    alert(result);
  }
  }

  function randomChoice1(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "win";
        alert(result);
    }
    else if (comp == 1){
        result = "tie";
        alert(result);
    }
    else{ result = "lost"
    alert(result);}
  }

  function randomChoice2(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "lost";
        alert(result);
    }
    else if (comp == 1){
        result = "win";
        alert(result);
    }
    else{ result = "tie";
    alert(result);}
  }