var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

/* You can log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth); */

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;





var fight = function(enemyName) {

    while(enemyHealth > 0) {
    //alertplayers that they are starting a round
    

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

   //if player choses to  fight, then fight
   if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } 
  
  else if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are your sure you'd like to quit?");

      //if yes(true), leave fight
      if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight!");
          //subtract money from playerMoney
          playerMoney = playerMoney - 2;
      }

      //if no(false), ask question again by running fight() again.
      else {
          fight()
      }
  } 
  
  else {
    window.alert("You need to choose a valid option. Try again!");
}
}
}

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}

//fucntion to start game
var startGame = function() {
  
  //resets player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      
      //let player know what round they are in 
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
    
    //pick new enemy to fight based on the index of enemy names array 
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    //use debugger to pause script and check what is going on in the code
    //debugger;

    // pass the pickedEnemyName variable's value into the fight function
    fight(pickedEnemyName);
    }
    
    else {
      window.alert("You have lost your robot in battle! GAME OVER!");
      break;
    }
  }
  //play again
  endGame()
}

var endGame = function() {
  // if player is still alive, player wins
  if (playerHealth > 0){
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
  }

  else {
    window.alert("You've lost your robot in battle.");
  }
  
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {

    //restart the game
    startGame();
  }

  else {
    window.alert("Thank you for playing Robot Gladiator!")
  }
}

startGame()