
const drawPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
}

let result = drawPlay();
console.log(result);