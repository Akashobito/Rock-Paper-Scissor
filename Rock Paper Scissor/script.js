   let score =JSON.parse(localStorage.getItem('score'));

      if(score === null){
        score = {
          wins: 0,
          losses: 0,
          tie: 0
        }
      }

      let scoreButton = document.querySelector('.score-text');

      let moveElement = document.querySelector('.moves');

      let resultElement = document.querySelector('.result');

      function computerMove() {
      const randomNumber = Math.random();
      console.log(randomNumber);

      let computerTake = '';

      if(randomNumber >= 0 && randomNumber <=0.3){
        computerTake = 'Rock';
      } else if(randomNumber >0.3 && randomNumber <=0.6){
        computerTake = 'Paper';
      } else if(randomNumber >0.6 && randomNumber <=1){
        computerTake = 'Scissor';
      }
      return computerTake;
    }

    function playGame(playerMove){

      computerTake = computerMove();

      let result = '';

      if(playerMove === 'Rock'){
        if(computerTake === 'Rock'){
        result = 'Tie';
      } else if(computerTake === 'Paper'){
        result = 'You Lose';
      } else if(computerTake === 'Scissor'){
        result = 'You Won';
      } 

      }else if(playerMove === 'Paper'){
          if(computerTake === 'Rock'){
          result = 'You Won';
        } else if(computerTake === 'Paper'){
          result = 'Tie';
        } else if(computerTake === 'Scissor'){
          result = 'You Lose';
        }

      } else if(playerMove === 'Scissor'){
        if(computerTake === 'Rock'){
          result = 'You Lose';
        } else if(computerTake === 'Paper'){
          result = 'You Won';
        } else if(computerTake === 'Scissor'){
          result = 'Tie';
        }
      }
      
      if(result === 'You Won'){
        score.wins += 1;
      }else if(result === 'You Lose'){
        score.losses += 1;
      }else if(result === 'Tie'){
        score.tie += 1;
      }
      
      localStorage.setItem('score',JSON.stringify(score));

      scoreButton.innerText = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.tie};`

      moveElement.innerHTML = ` You <img src="Images/${playerMove}-emoji.png"> 
                    <img src="Images/${computerTake}-emoji.png"> Computer`;

      resultElement.innerText = `${result}`;
    }
