//console.log('you are NOT hearing me talk');
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

//logit(pokeCards.length);

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
        //logit('PICK CARD MARKER');
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
        //logit('DEAL CARDS MARKER');
        player.hand.splice(0,player.hand.length-1); //clear hand
        player.hand.push(this.pickCard());
        player.hand.push(this.pickCard());
        player.hand.push(this.pickCard());
    },

    playPoint(human, computer) {
        //logit('PLAY POINT MARKER');
        //logit(human.hand);
        let displayString = "which card?\n";;
        for(let i = 0; i < human.hand.length; i++){
          displayString += ("card "+(i+1)+" = "+human.hand[i].name+" for "+human.hand[i].damage+"\n")
        }
        humChoice = prompt(displayString);
        //humChoice = Math.floor(Math.random() * human.hand.length)+1;
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
        //logit(human.score);
        //logit(computer.score);
    },

    playRound(human, computer) {
        //logit("PLAY ROUND MARKER");
        this.cardsLeft = this.cardList;
        this.dealCards(human);
        this.dealCards(computer);
        logit("human hand:");
        logit(human.hand[0].name+", "+human.hand[1].name+", "+human.hand[2].name);
        /*
        for(let i = 0; i < 3; i++){
          logit(human.hand[i].name);
        }
        */
        logit("computer hand:");
        logit(computer.hand[0].name+", "+computer.hand[1].name+", "+computer.hand[2].name);
        /*
        for(let i = 0; i < 3; i++){
          logit(computer.hand[i].name);
        }
        */
        //reset score
        human.score = 0;
        computer.score = 0;
        for(let i = 1; i <= this.points_per_round; i++){
            logit("point "+i+" go!");
            this.playPoint(human,computer);
        }
        logit(human.score);
        logit(computer.score);
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
        logit("");
    },




    playPoke(human,computer) {
        //logit('PLAY GAME MARKER');
        for(let i = 1; i <= this.rounds_per_game; i++){
            logit("ROUND "+i+" BEGIN!");
            this.playRound(human, computer);
        }
        //human wins ties
        if(human.rounds >= computer.rounds){
            console.log("Human Wins Game!");
        }
        else {console.log("Computer Wins Game!")}
        logit("human rounds won: "+human.rounds);
        logit("computer rounds won: "+computer.rounds);
        logit("computer cards played:");
        logit("total damage = "+human.totalDamage());
        logit(computer.cardHistory);
        logit("human cards played:");
        logit("total damage = "+computer.totalDamage());
        logit(human.cardHistory);
        //logit(human.score);
        //logit(computer.score);
    }
}




class Player {
    constructor(isHuman){
        this.rounds = 0;
        this.hand = [];
        this.score = 0;
        this.cardHistory = [];
        this.humanity = isHuman;
        this.damage = 0;
    }
    chooseCard() {
        //do this later...
    }
    totalDamage(){
      for(let eachCard of this.cardHistory){
        this.damage += eachCard.damage;
      }
      return this.damage;
    }
    //in fact move all doubled methods above in here...

}

const david = new Player(true);
const brock = new Player(false);

gamePoke.playPoke(david, brock);
