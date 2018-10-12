const View = require("./ttt-view.js");// require appropriate file
const Game = require("./Node_js/game.js");// require appropriate file



$( () => {
  const rootView = $('.ttt');// Your code here
  const game = new Game();

  new View(game,rootView);
});
