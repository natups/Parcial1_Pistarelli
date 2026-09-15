class GameLogic {
  constructor(config = {}) {
    this.gridSize = config.gridSize || 8;
    this.movesRemaining = config.movesRemaining !== undefined ? config.movesRemaining : 20;
    this.playerPos = config.playerPos ? { ...config.playerPos } : { x: 0, y: 0 };
    this.gemsCollected = config.gemsCollected || 0;
    this.totalGemsRequired = config.totalGemsRequired || 3;
    this.gems = config.gems ? config.gems.map(g => ({ ...g })) : [
      { x: 2, y: 2 },
      { x: 4, y: 4 },
      { x: 6, y: 6 }
    ];
    this.walls = config.walls ? config.walls.map(w => ({ ...w })) : [
      { x: 1, y: 1 },
      { x: 3, y: 3 }
    ];
    this.exitPos = config.exitPos ? { ...config.exitPos } : { x: 7, y: 7 };
    this.status = config.status || 'PLAYING';
  }

  isWall(x, y) {
    if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize) {
      return true;
    }
    return this.walls.some(w => w.x === x && w.y === y);
  }

  collectGem(x, y) {
    if (this.isWall(x, y)) {
      return false;
    }

    const gemIndex = this.gems.findIndex(g => g.x === x && g.y === y);
    if (gemIndex !== -1) {
      this.gems.splice(gemIndex, 1);
      this.gemsCollected++;
      return true;
    }
    return false;
  }

  move(direction) {
    if (this.status !== 'PLAYING' || this.movesRemaining <= 0) {
      this.status = 'GAME_OVER';
      return false;
    }

    let dx = 0;
    let dy = 0;

    const dir = typeof direction === 'string' ? direction.toUpperCase() : direction;
    if (dir === 'UP' || dir === 'W') { dy = -1; }
    else if (dir === 'DOWN' || dir === 'S') { dy = 1; }
    else if (dir === 'LEFT' || dir === 'A') { dx = -1; }
    else if (dir === 'RIGHT' || dir === 'D') { dx = 1; }
    else if (typeof direction === 'object' && direction !== null) {
      dx = direction.x || 0;
      dy = direction.y || 0;
    }

    const targetX = this.playerPos.x + dx;
    const targetY = this.playerPos.y + dy;

    if (this.isWall(targetX, targetY)) {
      return false;
    }

    this.playerPos.x = targetX;
    this.playerPos.y = targetY;

    this.movesRemaining = Math.max(0, this.movesRemaining - 1);

    this.collectGem(targetX, targetY);

    if (this.playerPos.x === this.exitPos.x && this.playerPos.y === this.exitPos.y) {
      if (this.gemsCollected >= this.totalGemsRequired) {
        this.status = 'VICTORY';
      }
    }

    if (this.movesRemaining === 0 && this.status !== 'VICTORY') {
      this.status = 'GAME_OVER';
    }

    return true;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameLogic;
}
