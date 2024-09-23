
const drawPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      result = 'Rock';
    } else if (randomNumber === 1) {
      result = 'Paper';
    } else {
      result = 'Scissors';
    } 
}

let computer = drawPlay();
console.log(computer);