# Plan de intervención

## Objetivo del plan

Conectar la clase `GameLogic` con la escena de Phaser 3 y asegurar el correcto funcionamiento en entorno dual (Node.js/Navegador).

## Cambios propuestos

| Paso | Cambio mínimo | Archivos previstos | Verificación | Riesgo | Condición de detención |
|---:|---|---|---|---|---|
| 1 | Exportación híbrida de GameLogic | `src/GameLogic.js` | `npm test` en verde | Incompatibilidad con Jest | Error de módulo |
| 2 | Configurar escena e interfaz Phaser | `src/index.js` | Visualización en Live Server | Referencia a GameLogic no encontrada | Error en consola |
| 3 | Agregar html en raíz | `index.html` | Carga de scripts en orden | Fallo de ruta | Script no encontrado |

## Orden de implementación

1. Ajustar exportaciones en `GameLogic.js`.
2. Crear instancia y dibujo de grilla en `index.js`.
3. Validar con pruebas y renderizado visual.

## Fuera de alcance

- Modificaciones no autorizadas sobre `GDD.md`.