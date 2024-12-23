/* 
Let's play! 
You have to return which player won! 
In case of a draw return Draw!. 
*/

const rps = (p1, p2) => {
    if (p1 === p2) {
      return "Draw!";
    } else if (p1 === "rock") {
      if (p2 === "scissors") {
        return "Player 1 wins";
      }
      return "Player 2 wins";
    } else if (p1 === "scissors") {
      if (p2 === "paper") {
        return "Player 1 wins";
      }
      return "Player 2 wins";
    } else if (p1 === "paper") {
      if (p2 === "rock") {
        return "Player 1 wins";
      }
      return "Player 2 wins";
    }
  };