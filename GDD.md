# GDD Simplificado - Laberinto Recolector

## Juego y experiencia
- **Género y situación de juego:** Puzle Top-Down en cuadrícula 2D por turnos.
- **Rol del jugador:** Controlar a un personaje explorador en un mapa 2D.
- **Experiencia buscada:** Resolver el laberinto recolectando todas las gemas antes de agotar los movimientos disponibles.

## Comportamiento a resolver
- **Entidad:** Jugador, Gemas y Salida.
- **Problema actual:** El jugador necesita recolectar elementos y llegar a la salida sin atravesar paredes ni agotar sus pasajes.
- **Comportamiento esperado:** El jugador se desplaza por cuadrículas, recolecta gemas al pisarlas y activa la salida únicamente tras juntar el total de gemas.

## Reglas
- **Estados y condiciones:** Mapa de 8x8. El jugador inicia con 20 movimientos. Hay 3 gemas en el mapa.
- **Acciones:** Moverse arriba, abajo, izquierda y derecha con flechas o WASD.
- **Resultado esperado:** Cada movimiento consume 1 paso. Entrar en la casilla de una gema incrementa el contador. Llegar a la Salida con 3 gemas resulta en Victoria. Llegar a 0 pasos resulta en Derrota.
- **Caso límite:** Si una gema coincide con la posición de una pared, la función de recolección debe retornar `false` y no sumar al contador.

## Límites
- **Fuera de alcance:** Gráficos complejos, animaciones avanzadas, efectos de sonido y múltiples niveles.
- **Restricciones técnicas:** JavaScript con Phaser 3, renderizado con figuras geométricas simples (rectángulos nativos) y pruebas en Jest.
- **Criterios de aceptación:** Movimiento de a 1 casilla, recolección efectiva de gemas, condición de victoria en salida y manejo de caso límite de obstrucción.