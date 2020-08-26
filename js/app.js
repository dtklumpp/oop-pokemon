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
    //cardsLeft: [],
    round: 1,
    points_per_round: 3,
    playedCards: [],
    rounds_per_game: 3,



    ///note: stop game if less than 6 cards left

    pickCard() {
        logit('pick card marker');
        index1 = Math.floor(this.cardsLeft.length * Math.random());
        //logit(index1);
        //logit(this.cardsLeft[index1].name);
        //logit(this.cardsLeft.length);
        //logit(this.cardsLeft.splice(index1,1));
        let card1 = this.cardsLeft.splice(index1,1)[0];
        //logit(this.cardsLeft.length);
        //logit(card1.name);
        this.playedCards.push(card1);
        return card1;
    },

    dealCards(player) {
        logit('deal cards marker');
        player.hand.splice(0,player.hand.length-1); //clear hand
        player.hand.push(this.pickCard());
        player.hand.push(this.pickCard());
        player.hand.push(this.pickCard());
    },

    playPoint(human, computer) {
        logit('play point marker');
        //logit(human.hand);
        //humChoice = prompt("which card?");
        humChoice = Math.floor(Math.random() * human.hand.length);
        humCard = human.hand.splice(humChoice-1,1)[0];
        compChoice = Math.floor(Math.random() * computer.hand.length);
        compCard = computer.hand.splice(compChoice, 1)[0];
        human.cardHistory.push(humCard);
        computer.cardHistory.push(compCard);
        logit("human plays "+humCard.name+" for "+humCard.damage);
        logit("computer plays "+compCard.name+" for "+compCard.damage);
        if(humCard.damage > compCard.damage){
            human.score += 1;
        }
        else if (compCard.damage > humCard.damage){
            computer.score += 1;
        }
        logit(human.score);
        logit(computer.score);
    },

    playRound(human, computer) {
        logit("playround marker");
        this.cardsLeft = this.cardList;
        this.dealCards(human);
        this.dealCards(computer);
        logit("human hand:");
        for(let i = 0; i < 3; i++){
          logit(human.hand[i].name);
        }
        logit("computer hand:");
        for(let i = 0; i < 3; i++){
          logit(computer.hand[i].name);
        }
        //reset score
        human.score = 0;
        computer.score = 0;
        for(let i = 1; i <= this.points_per_round; i++){
            logit("point "+i+" go!");
            this.playPoint(human,computer);
        }
        if(human.score > computer.score){
            human.rounds += 1;
            logit('human wins round!');
        }
        else if(computer.score > human.score){
            computer.rounds += 1;
            logit('computer wins round!')
        }
        else {logit('nobody wins round!');}
        logit("human rounds won = "+human.rounds);
        logit("computer rounds won = "+computer.rounds);
    },




    playPoke(human,computer) {
        logit('play game marker');
        for(let i = 1; i <= this.rounds_per_game; i++){
            logit("round "+i+" begin!");
            this.playRound(human, computer);
        }
        //human wins ties
        if(human.rounds >= computer.rounds){
            console.log("Human Wins Game!");
        }
        else {console.log("Computer Wins Game!")}
        logit(human.cardHistory);
        logit(computer.cardHistory);
        logit(human.rounds);
        logit(computer.rounds);
        logit(human.score);
        logit(computer.score);
    }
}




class Player {
    constructor(isHuman){
        this.rounds = 0;
        this.hand = [];
        this.score = 0;
        this.cardHistory = [];
        this.humanity = isHuman;
    }
    chooseCard() {
        //do this later...
    }
    //in fact move all doubled methods above in here...
}

const david = new Player(true);
const brock = new Player(false);

gamePoke.playPoke(david, brock);
