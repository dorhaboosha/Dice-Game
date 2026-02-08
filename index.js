/**
 * Dice Game - A simple two-player dice roll game
 * 
 * On page reload, this script rolls two virtual dice (1-6), updates the dice
 * images to reflect the results, and displays the winner (Player 1, Player 2, or Draw).
 * 
 * Note: The game only runs on page reload—not on initial load—to avoid
 * showing randomized results before the user has interacted with the page.
 */
if (performance.getEntriesByType('navigation')[0].type === 'reload') {
    // Generate random dice values (1-6) for each player
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    // Build image paths for each dice face
    var image1Source = "./images/dice" + randomNumber1 + ".png";
    var image2Source = "./images/dice" + randomNumber2 + ".png";

    // Update the dice images in the DOM
    document.querySelector(".img1").setAttribute("src", image1Source);
    document.querySelector(".img2").setAttribute("src", image2Source);

    // Determine and display the winner
    if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }

    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
    }
}

