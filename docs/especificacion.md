# Especificación

## Problema
Necesidad de implementar la lógica de movimiento, recolección y colisiones de un juego en cuadrícula 2D de forma aislada y verificable.

## Resultado esperado
Un juego funcional en navegador web en Phaser 3 donde el jugador recolecta 3 gemas y llega a la salida, respaldado por pruebas unitarias automatizadas.

## Alcance
- **Incluye:** Lógica de juego en `src/GameLogic.js`, interfaz gráfica en `src/index.js` e `index.html`, y pruebas unitarias en `tests/GameLogic.test.js`.
- **No incluye:** Backend, base de datos, múltiples niveles ni sprites externos.

## Restricciones
- **Técnicas:** JavaScript ES6+, Phaser 3, Node.js y Jest.
- **Operativas:** La lógica del juego debe poder probarse sin requerir renderizado en pantalla (separación de responsabilidades).
- **De calidad:** Cobertura de pruebas unitarias para el camino principal y casos límite.

## Casos y criterios de aceptación

| Caso | Dado | Cuando | Entonces | Evidencia |
| :--- | :--- | :--- | :--- | :--- |
| **Camino principal** | Jugador en casilla adyacente libre | Presiona una tecla de dirección | Avance 1 casilla y disminuye 1 paso restante | `npm test` |
| **Recolección** | Jugador entra a casilla de gema | Ejecuta movimiento | Incrementa el contador de gemas en 1 | `npm test` |
| **Caso límite** | Gema ubicada sobre una pared | Intenta recolectar la gema | La recolección retorna `false` y no suma puntos | `npm test` |
| **Error / Derrota** | Movimientos restantes igual a 0 | Intenta realizar un movimiento | Se bloquea el movimiento y cambia a estado de derrota | `npm test` |

## Invariantes
- El contador de movimientos nunca puede ser negativo.
- El jugador nunca puede atravesar casillas marcadas como pared.

## Preguntas abiertas
- Ninguna al momento de iniciar la implementación.