let randomNumber=(parseInt( Math.random()*100+1));

 const sub= document.querySelector('#b')
 const main= document.querySelector('#main')
 const raj= document.querySelector('#number')
 const previous= document.querySelector('#no')
 const after= document.querySelector('#no2')
 const lowOrHi= document.querySelector('.lowOrHi')
 const result= document.querySelector('#resultPass')
 
 const p =document.createElement('p');

 let prevGuess=[];

 let numGuess=1;
 let playGame =true;

 if(playGame){
  sub.addEventListener('click',function(e){
  e.preventDefault();
 const guess= parseInt(raj.value);
 validateGuess(guess);
  });
 }

   function validateGuess(guess){
   if(isNaN(guess)){
    alert('please enter valied no.')
  } else
    if(guess<1){
    alert('please enter possitive no.')
  }  else
    if(guess>100){
    alert('please enter 2 digit  no.')
  }else{
    prevGuess.push(guess)
    if(numGuess===10){
      displayGuess(guess)
      displayMessage(`game Over. Random number was ${randomNumber}`)
     
      endGame()

    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
 }

 function checkGuess(guess){
  if(guess=== randomNumber){
    displayMessage(`congradulation 🎉🎉`)
    endGame()
  }else if(guess< randomNumber){
    displayMessage(`Number is tooo low `)
  }else if(guess > randomNumber){
    displayMessage(`Number is tooo high`)
  }

 }

 function displayGuess (guess){
  raj.value=''
  previous.innerHTML +=`${guess}  , `
  numGuess ++;
  after.innerHTML= `${ 11 -  numGuess}`
 }

 function displayMessage (message){
  lowOrHi.innerHTML=`<h2>${message}</2>`
 }

 function endGame (guess){
  raj.value='';
  raj.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML=`<button id="newGame">Start new game </button>`
  
  result.appendChild(p);
  playGame= false;
  newGame();
 }

 function newGame (guess){
const newGameButton= document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber=(parseInt( Math.random()*100+1));
  prevGuess=[];
  numGuess=1;
  previous.innerHTML ='';
  after.innerHTML= `${ 11 -  numGuess}`;
  raj.removeAttribute('disabled');
  result.removeChild(p);
  playGame=true;
});
 }
