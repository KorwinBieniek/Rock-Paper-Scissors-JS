let player_points = 0;
let computer_points = 0;

function player_choice(choice) {

    computer_num = getRandomNumberBetween(1, 3);

    let player_bar = document.getElementById('player-bar');
    let computer_bar = document.getElementById('computer-bar');
    let arena = document.getElementById('arena');
    let player_hand = document.getElementById('player-hand');
    let computer_hand = document.getElementById('computer-hand');
    let winner = document.querySelector("h2");
    let player_message = document.getElementById('player_message');
    let computer_message = document.getElementById('computer_message');
    player_message.classList.remove('show_message');
    computer_message.classList.remove('show_message');
    player_message.innerText = 'Loser 🕱'; 
    computer_message.innerText = 'Loser 🕱'; 

    if (computer_points == 0 && player_points == 0) {
        computer_bar.style.width = '100%';
        player_bar.style.width = '100%';
    }

    if (check_winner(choice, computer_num, arena, player_hand, computer_hand, winner, player_points, computer_points) == true) {
        player_points++;
        let computer_hp = 100 - player_points * 20;
        computer_bar.style.width = computer_hp + '%';

        if (player_points == 5) {
            winner.innerText = "You won! Click the button if you want to try again";

            player_points = 0;
            computer_points = 0;
            player_message.innerText = 'Winner ♚'; 

            setTimeout(function () {
                player_message.classList.add('show_message');
                computer_message.classList.add('show_message');     
            }, 1000);

            
        }

    }
    else if (check_winner(choice, computer_num, arena, player_hand, computer_hand, winner) == false) {
        computer_points++;
        let player_hp = 100 - computer_points * 20;
        player_bar.style.width = player_hp + '%';

        if (computer_points == 5) {
            winner.innerText = "You lost! Click the button if you want to try again";

            player_points = 0;
            computer_points = 0;
            computer_message.innerText = 'Winner ♚';

            setTimeout(function () {
                computer_message.classList.add('show_message');
                player_message.classList.add('show_message');
            }, 1000);

            

        }
    }

    console.log('Player points: ' + player_points + '| Computer points: ' + computer_points);



}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function check_winner(player_choice, computer_choice, arena, player_hand, computer_hand, winner, player_points, computer_points) {



    arena.classList.add('blink');
    player_hand.classList.add('paused');
    computer_hand.classList.add('paused');



    setTimeout(function () {

        arena.classList.remove('blink');
    }, 250);


    setTimeout(function () {

        player_hand.classList.remove('paused');
        computer_hand.classList.remove('paused');

        player_hand.src = "images/hand-rotated.png";
        computer_hand.src = "images/hand-rotated.png";

    }, 1000);

    if (player_choice == computer_choice) {
        winner.innerText = "Both players chose the same weapon. It's a tie!";

        if (player_choice == 1) {
            player_hand.src = "images/hand-rotated.png";
        }

        if (player_choice == 2) {
            player_hand.src = "images/paper_hand.png";
        }

        if (player_choice == 3) {
            player_hand.src = "images/scissors_hand.png";
        }

        if (computer_choice == 1) {
            computer_hand.src = "images/hand-rotated.png";
        }

        if (computer_choice == 2) {
            computer_hand.src = "images/paper_hand.png";
        }

        if (computer_choice == 3) {
            computer_hand.src = "images/scissors_hand.png";
        }
    }

    else if (player_choice == 1) {
        player_hand.src = "images/hand-rotated.png";
        if (computer_choice == 3) {
            computer_hand.src = "images/scissors_hand.png";
            winner.innerText = "Rock smashes scissors! You win!";
            return true;
        }
        else {
            computer_hand.src = "images/paper_hand.png";
            winner.innerText = "Paper covers rock! You lose.";
            return false;
        }
    }

    else if (player_choice == 2) {
        player_hand.src = "images/paper_hand.png";
        if (computer_choice == 1) {
            computer_hand.src = "images/hand-rotated.png";
            winner.innerText = "Paper covers rock! You win!";
            return true;
        }
        else {
            computer_hand.src = "images/scissors_hand.png";
            winner.innerText = "Scissors cuts paper! You lose.";
            return false;
        }
    }

    else if (player_choice == 3) {
        player_hand.src = "images/scissors_hand.png";
        if (computer_choice == 2) {
            computer_hand.src = "images/paper_hand.png";
            winner.innerText = "Scissors cuts paper! You win!";
            return true;
        }
        else {
            computer_hand.src = "images/hand-rotated.png";
            winner.innerText = "Rock smashes scissors! You lose.";
            return false;
        }
    }


}

