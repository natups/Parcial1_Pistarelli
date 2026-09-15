const GameLogic = require('../src/GameLogic');

describe('GameLogic - Laberinto Recolector', () => {
  let game;

  beforeEach(() => {
    game = new GameLogic({
      gridSize: 8,
      movesRemaining: 20,
      playerPos: { x: 0, y: 0 },
      totalGemsRequired: 3,
      gems: [
        { x: 0, y: 1 },
        { x: 2, y: 2 },
        { x: 5, y: 5 }
      ],
      walls: [
        { x: 1, y: 0 },
        { x: 3, y: 3 }
      ],
      exitPos: { x: 7, y: 7 }
    });
  });

  test('Camino principal: Moverse a casilla libre avanza 1 casilla y disminuye 1 movimiento', () => {
    const initialMoves = game.movesRemaining;
    const moved = game.move('DOWN');

    expect(moved).toBe(true);
    expect(game.playerPos).toEqual({ x: 0, y: 1 });
    expect(game.movesRemaining).toBe(initialMoves - 1);
  });

  test('Recolección: Entrar a casilla con gema incrementa el contador de gemas', () => {
    expect(game.gemsCollected).toBe(0);
    game.move('DOWN'); // Se mueve a (0, 1) donde hay una gema
    expect(game.gemsCollected).toBe(1);
  });

  test('Caso límite: Recolectar gema sobre una pared retorna false y no suma al contador', () => {
    // Configurar gema ubicada exactamente sobre una pared
    const customGame = new GameLogic({
      gridSize: 8,
      walls: [{ x: 2, y: 2 }],
      gems: [{ x: 2, y: 2 }],
      gemsCollected: 0
    });

    const result = customGame.collectGem(2, 2);

    expect(result).toBe(false);
    expect(customGame.gemsCollected).toBe(0);
  });

  test('Invariante y pared: El jugador no puede atravesar casillas marcadas como pared', () => {
    // Intentar moverse a (1, 0) que es una pared
    const moved = game.move('RIGHT');

    expect(moved).toBe(false);
    expect(game.playerPos).toEqual({ x: 0, y: 0 }); // Posición sin cambios
  });

  test('Error / Derrota: Al llegar a 0 movimientos se bloquea el movimiento y cambia a GAME_OVER', () => {
    const customGame = new GameLogic({
      movesRemaining: 1,
      playerPos: { x: 0, y: 0 },
      walls: []
    });

    // Consumir el último movimiento
    customGame.move('DOWN');
    expect(customGame.movesRemaining).toBe(0);
    expect(customGame.status).toBe('GAME_OVER');

    // Intentar realizar otro movimiento
    const secondMove = customGame.move('DOWN');
    expect(secondMove).toBe(false);
    expect(customGame.status).toBe('GAME_OVER');
  });

  test('Invariante: El contador de movimientos nunca es negativo', () => {
    const customGame = new GameLogic({
      movesRemaining: 0,
      playerPos: { x: 0, y: 0 },
      walls: []
    });

    customGame.move('DOWN');
    expect(customGame.movesRemaining).toBeGreaterThanOrEqual(0);
    expect(customGame.movesRemaining).toBe(0);
  });

  test('Victoria: Llegar a la salida con 3 gemas recolectadas resulta en VICTORY', () => {
    const customGame = new GameLogic({
      playerPos: { x: 7, y: 6 },
      gemsCollected: 3,
      totalGemsRequired: 3,
      exitPos: { x: 7, y: 7 },
      walls: []
    });

    customGame.move('DOWN');
    expect(customGame.playerPos).toEqual({ x: 7, y: 7 });
    expect(customGame.status).toBe('VICTORY');
  });
});
