console.log('you are NOT hearing me talk');
const logit = function(input1){
    console.log(input1);
}

const pokeCards = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ]

logit(pokeCards.length);

/*
constructor(human, computer){
    this.cardList = pokeCards;
    this.cardsLeft = this.cardList;
    this.dude1 = human;
    this.dude2 = computer;
    this.round = 1;
    this.playedCards = [];
}
*/






//the POKEMON game object
//to play, run gamePoke.playPoke(comb1, comb1), inputting your combatants
const gamePoke = {
    cardList: pokeCards,
    cardsLeft: [],
    round: 1,
    points_per_round: 1,
    playedCards: [],
    rounds_per_game: 3,



    ///note: stop game if less than 6 cards left

    pickCard() {
        index1 = Math.floor(this.cardsLeft.length * Math.random());
        card1 = this.cardsLeft.splice(index1,1);
        this.playedCards.push(card1);
        return card1;
    },

    dealCards(player) {
        player.hand.splice(0,player.hand.length-1); //clear hand
        player.hand.push(this.pickCard());
        player.hand.push(this.pickCard());
        player.hand.push(this.pickCard());
    },

    playPoint(human, computer) {
        logit(human.hand);
        humChoice = prompt("which card?");
        humCard = human.hand.splice(humChoice-1,1);
        compChoice = Math.floor(Math.random() * computer.hand.length);
        compCard = computer.hand.splice(compChoice, 1);
        human.history.push(humCard);
        computer.history.push(compCard);
        if(humCard.damage > compCard.damage){
            human.score += 1;
        }
        else if (compCard.damage > humCard.damage){
            computer.score += 1;
        }
    },

    playRound(human, computer) {
        this.dealCards(human);
        this.dealCards(computer);
        //reset score
        human.score = 0;
        computer.score = 0;
        for(let i = 1; i <= this.points_per_round; i++){
            this.playPoint(human,computer);
        }
        if(human.score > computer.score){
            human.rounds += 1;
        }
        else if(computer.score > human.score){
            computer.rounds += 1;
        }
    },




    playPoke(human,computer) {
        for(let i = 1; i <= this.rounds_per_game; i++){
            this.playRound(human, computer);
        }
        //human wins ties
        if(human.rounds >= computer.rounds){
            console.log("Human Wins!");
        }
        else {console.log("Computer Wins!")}
    }
}




class Player {
    constructor(isHuman){
        this.rounds = 0;
        this.hand = [];
        this.score = 0;
        this.history = [];
        this.humanity = isHuman;
    }
    chooseCard() {
        //do this later...
    }
}

const david = new Player(true);
const brock = new Player(false);

gamePoke.playPoke(david, brock);
