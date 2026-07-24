            let score = JSON.parse(localStorage.getItem('score'));
            if (!score) {
                score = { Wins: 0, Losses: 0, Ties: 0 };
                localStorage.setItem('score', JSON.stringify(score));
            }
            document.querySelector('.scores').innerHTML = `Wins: ${score.Wins}...Losses: ${score.Losses}...Ties: ${score.Ties}`;
            
            let computerMove = '';
            let Result = '';
            function resetScore (){
                score.Wins = 0;
                score.Losses = 0;
                score.Ties = 0;
                localStorage.setItem('score', JSON.stringify(score));

                document.querySelector('.scores').innerHTML = `Wins: ${score.Wins}...Losses: ${score.Losses}...Ties: ${score.Ties}`;
                document.querySelector('.user-move').innerHTML = '👾';
                document.querySelector('.computer-move').innerHTML = '👾';
                alert('Score has been reset');
            }
            function Game (userMove) {

                if(userMove === 'Rock'){

                    if(computerMove === 'Rock'){
                        Result = 'Tie';
                    }else if(computerMove === 'Paper'){
                        Result = 'You Loose';
                    }else if(computerMove === 'Scissor'){
                        Result = 'You Win';
                    }

                }else if(userMove === 'Paper'){

                    if(computerMove === 'Rock'){
                        Result = 'You Win';
                    }else if(computerMove === 'Paper'){
                        Result = 'Tie';                       
                    }else if(computerMove === 'Scissor'){
                        Result = 'You Loose';
                    }

                }else if(userMove === 'Scissor'){

                    if(computerMove === 'Rock'){
                        Result = 'You Loose';                    
                    }else if(computerMove === 'Paper'){
                        Result = 'You Win';                        
                    }else if(computerMove === 'Scissor'){
                        Result = 'Tie';
                    }

                }

                if (userMove === 'Rock'){
                    document.querySelector('.user-move').innerHTML = '✊';
                }else if(userMove === 'Paper'){
                    document.querySelector('.user-move').innerHTML = '✋';
                }else if(userMove === 'Scissor'){
                    document.querySelector('.user-move').innerHTML = '✌️';
                }

                if(Result === 'You Win'){
                    score.Wins += 1;
                }else if(Result === 'You Loose'){
                    score.Losses += 1;
                }else if(Result === 'Tie'){
                    score.Ties += 1;
                }
                
                document.querySelector('.final-Result').innerHTML = `${Result}`;

                localStorage.setItem('score', JSON.stringify(score));
            
                document.querySelector('.scores')
                    .innerHTML = `Wins: ${score.Wins}...Losses: ${score.Losses}...Ties: ${score.Ties}`
                
                // alert(`You Picked ${userMove}. Computer Picked ${computerMove}. ${Result}
                //     Wins: ${score.Wins}
                //     Losses: ${score.Losses}
                //     Ties: ${score.Ties}
                // `)
            }

            function pickComputerMove () {

                const randomNumber = Math.random();
                if (randomNumber > 0 && randomNumber < 1/3){
                    computerMove = 'Rock';
                    
                }else if(randomNumber >= 1/3 && randomNumber < 2/3){
                    computerMove = 'Paper';
                   
                }else if(randomNumber >= 2/3 && randomNumber < 1){
                    computerMove = 'Scissor';   
                }

                if (computerMove === 'Rock'){
                    document.querySelector('.computer-move').innerHTML = '✊';
                }else if(computerMove === 'Paper'){
                    document.querySelector('.computer-move').innerHTML = '✋';
                }else if(computerMove === 'Scissor'){
                    document.querySelector('.computer-move').innerHTML = '✌️';
                }
            }

        