const STARTING_POKER_CHIPS = 100; // pointsUse Cmd+I to generate code
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

console.log(`Welcome! 챔피언십 타이틀은 ${playerOneName}, ${playerTwoName}, ${playerThreeName} 중 한 명에게 주어집니다. 각 선수는 ${STARTING_POKER_CHIPS} 의 칩을 가지고 시작합니다. 흥미진진한 경기가 될 것입니다. 최고의 선수가 승리하길 바랍니다!`);

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints += 75;

gameHasEnded
