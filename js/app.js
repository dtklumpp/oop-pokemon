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

const gamePoke = {
    cardList: pokeCards,
    cardsLeft: [],
    round: 1,
    playedCards: [],



    ///note: stop game if less than 6 cards left

    pickCard() {
        index1 = Math.floor(this.cardsLeft.length * Math.random());
        card1 = this.cardsLeft.splice(index1,1);
        this.playedCards.push(card1);
        return card1;
    }

    dealCards(player) {
        player.hand.splice(0,player.hand.length-1); //clear hand
        player.hand.push(pickCard());
        player.hand.push(pickCard());
        player.hand.push(pickCard());
    }

    playRound(human, computer) {
        this.dealCards(human);
        this.dealCards(computer);
        


    }




    playPoke(human,computer) {


    }
}