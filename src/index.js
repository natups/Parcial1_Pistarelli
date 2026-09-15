const GameLogic = require('./GameLogic');

const config = {
  type: typeof Phaser !== 'undefined' ? Phaser.AUTO : 0,
  width: 512,
  height: 512,
  parent: 'game-container',
  scene: {
    preload: function() {},
    create: function() {
      this.gameLogic = new GameLogic();
    },
    update: function() {}
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GameLogic, config };
}
