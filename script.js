let btn = document.querySelector(".btn");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let result = document.querySelector(".result");
let user= document.querySelector(".user");
let comp= document.querySelector(".comp");
let reset=document.querySelector(".reset");
let userchoice = "";
let computerchoice;
let userscore = 0;
let computerscore = 0;


rock.addEventListener("click", () => {
    userchoice = "rock";
    playGame();
});
paper.addEventListener("click", () => {
    userchoice = "paper";
    playGame();
});
scissors.addEventListener("click", () => {
    userchoice = "scissors";
    playGame();
});

const computerPlay = () => {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const playGame = () => {
    computerchoice = computerPlay();

    if (userchoice === computerchoice) {
        result.innerText="It's a draw! Computer chose " + computerchoice; 
    } 
    else if ((userchoice === "rock" && computerchoice === "scissors")||(userchoice === "paper" && computerchoice === "rock") ||(userchoice === "scissors" && computerchoice === "paper"))
    {
        result.innerText="You win! Computer chose " + computerchoice;
        userscore++;
        user.innerText = userscore;
    }
    else
    {
        result.innerText="Computer wins! Computer chose " + computerchoice;
        computerscore++;
        comp.innerText =computerscore;
    }
};
reset.addEventListener("click", () => {
userscore=0;
computerscore=0;
user.innerText = userscore;
comp.innerText =computerscore;
}
);