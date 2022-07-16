function randomChoice(max) {
    var rand = Math.floor(Math.random() * max);
    return rand;
  }
  var result;
  var counterWon = 0;
  var counterLost = 0;
  var allTimeWon = 0;
  var allTimeLost = 0;
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
        counterLost++;
    }
    else{ result = "win"
    console.log(result);
    alert(result);
    counterWon++;
  }
  if(counterLost > 1 || counterWon >1){
    allTimeLost = counterLost;
    allTimeWon = counterWon;
    if(counterLost>1){
      alert("HA! YOU LOST THE MATCH TO A COMPUTER FOREHEAD");
    }
    if(counterWon>1){
      alert("How does it feel to have you biggest achievement today be that you beat a computer??")
    }
    
    counterLost =0;
    counterWon = 0;

  }
  }

  function randomChoice1(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "win";
        alert(result);
        counterWon++;
    }
    else if (comp == 1){
        result = "tie";
        alert(result);
    }
    else{ result = "lost"
    alert(result);counterLost++;}
    if(counterLost > 1 || counterWon >1){
      allTimeLost = counterLost;
      allTimeWon = counterWon;
      if(counterLost>1){
        alert("HA! YOU LOST THE MATCH TO A COMPUTER FOREHEAD");
      }
      if(counterWon>1){
        alert("How does it feel to have you biggest achievement today be that you beat a computer??")
      }
      
      counterLost =0;
      counterWon = 0;

    }

  }

  function randomChoice2(){
    var comp = randomChoice(3);
    if (comp == 0){
        result = "lost";
        alert(result);
        counterLost++;
    }
    else if (comp == 1){
        result = "win";
        alert(result);
        counterWon++;
    }
    else{ result = "tie";
    alert(result);}
    if(counterLost > 1 || counterWon >1){
      allTimeLost = counterLost;
      allTimeWon = counterWon;
      if(counterLost>1){
        alert("HA! YOU LOST THE MATCH TO A COMPUTER FOREHEAD");
      }
      if(counterWon>1){
        alert("How does it feel to have you biggest achievement today be that you beat a computer??")
      }
      
      counterLost =0;
      counterWon = 0;

    }
  }