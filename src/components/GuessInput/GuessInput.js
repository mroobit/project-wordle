import React from 'react';

function GuessInput({wordLength}) {
  const [guess, setGuess] = React.useState('');

  return <form className="guess-input-wrapper"
    	   onSubmit={event => {
	     event.preventDefault();
      	     if (guess.length != wordLength) {
	       window.alert('Guess must be ' + wordLength + ' letters long!')
	       return
             }
     	     if (!/^[A-Z]+$/.test(guess)) {
	       window.alert('Guess must only contain letters')
	       return
	     }
	     console.log(guess)
             setGuess('')
           }}
         >
         <label htmlFor="guess-input">Enter guess:</label>
         <input
	   required
	   minLength={5}
	   maxLength={5}
	   id="guess-input"
	   type="text"
	   value={guess}
	   onChange={event => {
	     setGuess(event.target.value.toUpperCase())
    	   }}
          />
          </form>;
}

export default GuessInput;
