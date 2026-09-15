// Carga compatible para Node/Jest y Navegador
var RawGameLogic = typeof require !== 'undefined' ? require('./GameLogic') : window.GameLogic;
var GameLogicClass = (typeof RawGameLogic === 'function') ? RawGameLogic : (RawGameLogic.GameLogic || RawGameLogic.default);

const config = {
  type: typeof Phaser !== 'undefined' ? Phaser.AUTO : 0,
  width: 512,
  height: 512,
  parent: 'game-container',
  scene: {
    create: function() {
      // Instanciar motor de lógica
      this.gameLogic = new GameLogicClass();
      this.tileSize = 64;

      // Función local para actualizar texto
      const updateUI = () => {
        this.statusText.setText(
          `Movs: ${this.gameLogic.movesRemaining} | Gemas: ${this.gameLogic.gemsCollected}/${this.gameLogic.totalGemsRequired}\nEstado: ${this.gameLogic.status}`
        );
      };

      // 1. Dibujar Grilla
      const graphics = this.add.graphics();
      graphics.lineStyle(1, 0x444444, 1);
      for (let i = 0; i <= 8; i++) {
        graphics.moveTo(i * this.tileSize, 0);
        graphics.lineTo(i * this.tileSize, 512);
        graphics.moveTo(0, i * this.tileSize);
        graphics.lineTo(512, i * this.tileSize);
      }
      graphics.strokePath();

      // 2. Dibujar Paredes (Cuadrados rojos)
      this.gameLogic.walls.forEach(w => {
        this.add.rectangle(w.x * 64 + 32, w.y * 64 + 32, 60, 60, 0xff0000);
      });

      // 3. Dibujar Salida (Cuadrado verde)
      this.add.rectangle(this.gameLogic.exitPos.x * 64 + 32, this.gameLogic.exitPos.y * 64 + 32, 60, 60, 0x00ff00);

      // 4. Dibujar Gemas (Rombos azulejos)
      this.gemsSprites = [];
      this.gameLogic.gems.forEach(g => {
        const gem = this.add.rectangle(g.x * 64 + 32, g.y * 64 + 32, 24, 24, 0x00ffff);
        this.gemsSprites.push({ x: g.x, y: g.y, sprite: gem });
      });

      // 5. Dibujar Jugador (Cuadrado amarillo)
      this.playerSprite = this.add.rectangle(
        this.gameLogic.playerPos.x * 64 + 32,
        this.gameLogic.playerPos.y * 64 + 32,
        40,
        40,
        0xffff00
      );

      // 6. Texto de interfaz
      this.statusText = this.add.text(10, 10, '', { font: '16px Arial', fill: '#ffffff' });
      updateUI();

      // 7. Controles de Teclado
      this.input.keyboard.on('keydown', (event) => {
        let key = event.key.toUpperCase();
        if (['ARROWUP', 'W'].includes(key)) key = 'UP';
        if (['ARROWDOWN', 'S'].includes(key)) key = 'DOWN';
        if (['ARROWLEFT', 'A'].includes(key)) key = 'LEFT';
        if (['ARROWRIGHT', 'D'].includes(key)) key = 'RIGHT';

        if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(key)) {
          this.gameLogic.move(key);
          
          // Actualizar posición del jugador
          this.playerSprite.setPosition(
            this.gameLogic.playerPos.x * 64 + 32,
            this.gameLogic.playerPos.y * 64 + 32
          );

          // Ocultar gemas recolectadas
          this.gemsSprites.forEach(g => {
            const isRemaining = this.gameLogic.gems.some(item => item.x === g.x && item.y === g.y);
            if (!isRemaining) g.sprite.setVisible(false);
          });

          updateUI();
        }
      });
    }
  }
};

// Inicializar en Navegador
if (typeof window !== 'undefined' && typeof Phaser !== 'undefined') {
  window.game = new Phaser.Game(config);
}

// Exportación para Jest
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GameLogic: GameLogicClass, config };
}