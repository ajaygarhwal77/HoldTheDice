`use-strict`;
//Selecting all the important things
const newGameButton = document.querySelector(`.newgame`);   //New game button
const diceImage = document.querySelector(`.dicedisplay`);  //Dice image
const rollDiceButton = document.querySelector(`.rolldice`);  //Roll dice button
const holdButton = document.querySelector(`.hold`);   //Hold up button
const currentScorePlayer1 = document.querySelector(`.currentscore--1`);   //Current score for player 1
const currentScorePlayer2 = document.querySelector(`.currentscore--2`);  //Current score for player 2
const score1 = document.querySelector(`.score--1`); //Total score for player 1
const score2 = document.querySelector(`.score--2`); //Total score for player 2
const player1area = document.querySelector(`.player1area`);
const player2area = document.querySelector(`.player2area`);
const player1NameHeading = document.querySelector(`.name1`);
const player2NameHeading = document.querySelector(`.name2`);
const closeInstructions = document.querySelector(`.closeinstructions`);
const genralInstructions = document.querySelector(`.genralinstructions`);



//Setting up default values
let currentscore = 0;
let activeplayer = 1;
holdButton.disabled = true;
rollDiceButton.disabled = true;


//Adding functionality to roll dice button
rollDiceButton.addEventListener(`click`, function () {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    //This will execute when number is not equal to zero
    if (diceNumber !== 1) {
        if (activeplayer === 1) {
            currentscore += diceNumber;              //When the active player is 1
            currentScorePlayer1.textContent = currentscore;
            diceImage.src = `dice-${diceNumber}.png`;
        } else {
            currentscore += diceNumber;        //When the active player is 2
            currentScorePlayer2.textContent = currentscore;
            diceImage.src = `dice-${diceNumber}.png`;
        };

        //When the dice number is equals to zero
    } else {
        if (activeplayer === 1) {
            currentscore = 0;          //This will execute when player 1 got 1
            currentScorePlayer1.textContent = 0;
            activeplayer++;
            diceImage.src = `dice-${diceNumber}.png`;
            player2area.classList.add(`activeplayer`);
            player1area.classList.remove(`activeplayer`);
        } else {
            currentscore = 0;            //This will execute when player 2 got 1
            currentScorePlayer2.textContent = 0;
            activeplayer--;
            diceImage.src = `dice-${diceNumber}.png`;
            player2area.classList.remove(`activeplayer`);
            player1area.classList.add(`activeplayer`);
        };
    };
});


//Adding functionality to hold up button
holdButton.addEventListener(`click`, function () {
    if (activeplayer === 1) {
        score1.textContent = Number(score1.textContent) + Number(currentScorePlayer1.textContent);
        currentscore = 0;
        activeplayer++;
        currentScorePlayer1.textContent = 0;
        diceImage.src = `dice-1.png`;
        player2area.classList.add(`activeplayer`);
        player1area.classList.remove(`activeplayer`);
    } else {
        score2.textContent = Number(score2.textContent) + Number(currentScorePlayer2.textContent);
        currentscore = 0;
        activeplayer--;
        currentScorePlayer2.textContent = 0;
        diceImage.src = `dice-1.png`;
        player2area.classList.remove(`activeplayer`);
        player1area.classList.add(`activeplayer`);
    };
    if (Number(score1.textContent) >= 100) {
        player1area.classList.add(`winner`);
        player1NameHeading.classList.add(`winningheading`);
        diceImage.classList.add(`hidden`);
        rollDiceButton.classList.add(`hidden`);
        holdButton.classList.add(`hidden`);
        currentScorePlayer1.textContent = `You won`;
    } else if (Number(score2.textContent) >= 100) {
        player2area.classList.add(`winner`);
        player2NameHeading.classList.add(`winningheading`);
        diceImage.classList.add(`hidden`);
        rollDiceButton.classList.add(`hidden`);
        holdButton.classList.add(`hidden`);
        currentScorePlayer2.textContent = `You won`;
    };
});

newGameButton.addEventListener(`click`, function () {
    score1.textContent = 0;
    currentscore = 0;
    score2.textContent = 0;
    currentScorePlayer1.textContent = 0;
    currentScorePlayer2.textContent = 0;
    diceImage.src = `dice-1.png`;
    player1area.classList.remove(`activeplayer`);
    player2area.classList.remove(`activeplayer`);
    rollDiceButton.classList.remove(`hidden`);
    holdButton.classList.remove(`hidden`);
    diceImage.classList.remove(`hidden`);
    player1area.classList.remove(`winner`);
    player1NameHeading.classList.remove(`winningheading`);
    player2area.classList.remove(`winner`);
    player2NameHeading.classList.remove(`winningheading`);
    activeplayer = Math.trunc(Math.random() * 2) + 1;
    holdButton.disabled = false;
    rollDiceButton.disabled = false;
    if (activeplayer === 1) {
        player1area.classList.add(`activeplayer`);
    } else {
        player2area.classList.add(`activeplayer`);
    };
});


closeInstructions.addEventListener(`click`, function () {
    genralInstructions.classList.add(`hidden`);
});