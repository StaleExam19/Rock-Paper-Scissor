const weapons = [
    {
        name: "rock",
        win: "scissors",
        losesTo: "paper",
        imageSrc: "./img/fist.svg"
    },
    {
        name: "paper",
        win: "rock",
        losesTo: "scissors",
        imageSrc: "./img/paper.svg"
    },
    {
        name: "scissors",
        win: "paper",
        losesTo: "rock",
        imageSrc: "./img/scissors.svg"
    },
]

let chosen_weapon;
// let possibleWeapons = ["rock", "paper", "scissor"];

let player_score = 0;
let computer_score = 0;

document.addEventListener("DOMContentLoaded", evt => {
    const weapon_option = document.querySelectorAll(".weapon-option");
    const start_button = document.getElementById("start-button");
    const gameState = document.getElementById("gameState");


    const player_weapon = document.querySelector("#player-weapon img");
    const computer_weapon_img = document.querySelector("#computer-weapon img");


    start_button.addEventListener("click", evt => {
        // let the computer choose its weapon
        const player_score_container = document.getElementById("player-score");
        const computer_score_container = document.getElementById("computer-score");


        
        let computer_weapon = weapons[Math.floor(Math.random() * weapons.length)];
        computer_weapon_img.src = computer_weapon.imageSrc;



        gameState.classList.remove("hidden");
        start_button.classList.add("hidden");



        if (chosen_weapon.name === computer_weapon.name) {
            gameState.innerText = "Round Draw";
        } else if (chosen_weapon.losesTo === computer_weapon.name) {
            gameState.innerText = "Round Lose";
            computer_score += 1;
            computer_score_container.innerText = computer_score;
        } else if (chosen_weapon.win === computer_weapon.name) {
            gameState.innerText = "Round Won";
            player_score += 1;
            player_score_container.innerText = player_score;
        }


        if (player_score == 5 || computer_score == 5) {
            computer_score_container.innerText = 0;
            player_score_container.innerText = 0;

            if (player_score > computer_score) 
                gameState.innerText = "You Won";
            else 
                gameState.innerText = "Computer Won";
    
            computer_score = 0;
            player_score = 0;   
        }

    });


    weapon_option.forEach(val => {
        val.addEventListener('click', evt => {
            chosen_weapon = weapons.find(val => val.name == evt.currentTarget.getAttribute("data-choice"));

            // display the chosen weapon
            player_weapon.src = chosen_weapon.imageSrc;

            gameState.classList.add("hidden");
            start_button.classList.remove("hidden");

        });
    })
});