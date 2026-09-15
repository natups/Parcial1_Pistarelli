# Evidencia de pruebas

Relaciona cada criterio de aceptacion con una prueba o secuencia manual que otra persona pueda repetir.

| Criterio | Version validada | Metodo o comando | Pasos | Resultado esperado | Resultado observado | Evidencia |
|---|---|---|---|---|---|---|
| Camino principal | v1.0.0 | `npm test` | Ejecutar `npm test` | Avance de casilla y consumo de 1 movimiento | Pasó correctamente | 1 passed |
| Recolección | v1.0.0 | `npm test` | Ejecutar `npm test` | Incremento del contador de gemas | Pasó correctamente | 1 passed |
| Caso límite | v1.0.0 | `npm test` | Ejecutar `npm test` | `collectGem` retorna false y no suma gemas en pared | Pasó correctamente | 1 passed |
| Invariante pared | v1.0.0 | `npm test` | Ejecutar `npm test` | Jugador no puede atravesar pared | Pasó correctamente | 1 passed |
| Error / Derrota | v1.0.0 | `npm test` | Ejecutar `npm test` | Movimientos en 0 bloquea juego y cambia a GAME_OVER | Pasó correctamente | 1 passed |
| Invariante movimientos | v1.0.0 | `npm test` | Ejecutar `npm test` | Movimientos nunca es negativo | Pasó correctamente | 1 passed |
| Victoria | v1.0.0 | `npm test` | Ejecutar `npm test` | Salida con 3 gemas cambia estado a VICTORY | Pasó correctamente | 1 passed |

## Resumen de ejecución
- **Comando:** `npm test` (Jest)
- **Resultado:** Test Suites: 1 passed, 1 total; Tests: 7 passed, 7 total.

## Fallos y limites pendientes

- Reproduccion: Ninguno
- Impacto: N/A
- Decision: Pruebas unitarias completadas exitosamente.
