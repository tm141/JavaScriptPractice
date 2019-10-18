function random(number) {
  let out = Math.ceil(Math.random()*number);
  if(out<1){
    out++;
  }
  return out;
}


/*
  1=rock
  2=paper
  3=scissor

  a=player1;
  b=player2;
*/
function play(a,b) {
  switch (a) {
    case 1 :
        if(b==1) {
          return "Tie!";
        } else if(b==2) {
          return "Player 2 Win!";
        } else {
          return "Player 1 Win!";
        }
      break;
    case 2 :
        if(b==1) {
          return "Player 1 Win";
        } else if (b==2) {
          return "Tie!";
        } else {
          return "Player 2 Win!";
        }
      break;
    case 3 :
        if(b==1) {
          return "Player 2 Win!";
        } else if (b==2) {
          return "Player 1 Win!";
        } else {
          return "Tie!";
        }
    default:
      break;
  }
}

function translate(number){
  switch (number){
    case 1:
      return "Rock";
    break;
    case 2:
      return "Paper";
    break;
    case 3:
      return "Scissor";
    break;
    default:
    break;
  }
}

function playGame() {
  let a = random(3);
  let b = random(3);
  let aTranslate = translate(a);
  let bTranslate = translate(b);
  console.log("Player 1 ="+aTranslate);
  console.log("Player 2 ="+bTranslate);
  let winner = play(a,b);
  console.log(winner);
}

function test() {
  for(let i=0;i<5;i++){
    playGame();
  }
}
