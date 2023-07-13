// Base class Game
class Game {
    constructor(name, levels, avatar, theme) {
      this.name = name;
      this.levels = levels;
      this.avatar = avatar;
      this.theme = theme;
    }
  
    playGame() {
      document.write(`<br><br>Playing ${this.name} game...`);
      for (let level of this.levels) {
        document.write(`<br>Level: ${level}`);
        // Simulate gameplay for the level
        // Check if the player wins or loses the level
        // Display appropriate messages
        if (this.checkWin(level)) {
          document.write(`<br>Congratulations! You won Level ${level}`);
        } else {
          document.write(`<br>Sorry! You lost Level ${level}`);
        }
      }
    }
  
    checkWin(level) {
      // Simulate the check for winning or losing the level
      // Return true if the player wins, false otherwise
      // You can add your specific logic here based on the game type
      return Math.random() < 0.5; // Randomly determine win or lose
    }
  }
  
  // Derived class Car Game
  class CarGame extends Game {
    constructor(avatar, theme) {
      super("Need For Speed", ["beginner", "intermediate", "advanced"], avatar, theme);
    }
  
    checkWin(level) {
      // Simulate winning condition for Car Game
      // Return true if the player reaches the winning score, false otherwise
      const winningScore = 100;
      const playerScore = Math.floor(Math.random() * 200); // Random score between 0 and 200
      return playerScore >= winningScore;
    }
  }
  
  // Derived class Puzzle Game
  class PuzzleGame extends Game {
    constructor(avatar, theme) {
      super("Puzzle Master", ["beginner", "intermediate", "advanced"], avatar, theme);
    }
  
    checkWin(level) {
      // Simulate winning condition for Puzzle Game
      // Return true if the player rearranges the puzzle within the time limit, false otherwise
      const timeLimit = 60; // Time limit in seconds
      const playerTime = Math.floor(Math.random() * 120); // Random time between 0 and 120 seconds
      return playerTime <= timeLimit;
    }
  }
  
  // Derived class Shooting Game
  class ShootingGame extends Game {
    constructor(avatar, theme) {
      super("Valarent Shooter", ["mission 1", "mission 2", "mission 3"], avatar, theme);
    }
  
    checkWin(level) {
      // Simulate winning condition for Shooting Game
      // Return true if the player completes the selected mission, false otherwise
      const selectedMission = level;
      const completedMission = Math.random() < 0.5; // Randomly determine completion
      return completedMission;
    }
  }
  
  // Example usage
  const playerAvatar_car = prompt("Enter name for your car");
  const gameTheme_car = prompt("Enter theme for the car game");
  const carGame = new CarGame(playerAvatar_car, gameTheme_car);
  carGame.playGame();
  
  const playerAvatar_puzzel = prompt("Enter name for your puzzel avatar");
  const gameTheme_puzzel = prompt("Enter theme for the puzzel game");
  const puzzelGame = new PuzzleGame(playerAvatar_puzzel, gameTheme_puzzel);
  puzzelGame.playGame();
  
  const playerAvatar_shoot = prompt("Enter name for your shooter avatar");
  const gameTheme_shoot = prompt("Enter theme for the shooting mission");
  const shootingGame = new ShootingGame(playerAvatar_shoot, gameTheme_shoot);
  shootingGame.playGame();