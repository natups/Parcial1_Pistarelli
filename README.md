# Plantilla PIAPC para repositorios individuales

Esta plantilla prepara un repositorio publico e individual para proyectos academicos de videojuegos. Es independiente del motor, lenguaje y tipo de juego.

## Como usarla

1. Crea un repositorio individual desde esta plantilla y conserva el commit inicial.
2. Completa los datos de este archivo y de `GDD.md` cuando la consigna defina el problema de diseno.
3. Agrega el proyecto creado con el motor elegido, sin mezclar archivos de otros motores.
4. Incorpora al `.gitignore` las reglas oficiales o recomendadas para ese motor.
5. Completa los documentos de `docs/` en el orden indicado por `docs/README.md`.
6. Conserva commits pequenos y revisables durante el desarrollo.

## Datos del proyecto

- Estudiante: Pistarelli Natasha
- Materia, comision y anio: Programación de Inteligencia Artificial y Patrones de Comportamiento, 3er anio.
- Nombre del proyecto: Laberinto Recolector
- Motor y version: Phaser v3.55.2 / Node.js
- Estado: Finalizado (100% Tests pasados)

## Descripcion

Juego de laberinto 2D en cuadrícula donde el jugador debe recolectar gemas y llegar a la salida antes de quedarse sin movimientos. Desarrollado con arquitectura desacoplada para pruebas unitarias con Jest e interfaz gráfica en Phaser 3.

## Requisitos y ejecucion

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Para ejecutar pruebas: `cmd /c npm test`
4. Para jugar en navegador: Abrir `index.html` con Live Server.

## Controles

- **Moverse:** Flechas de dirección (Arriba, Abajo, Izquierda, Derecha) o teclas WASD.

## Creditos

- Motor gráfico: Phaser 3
- Framework de tests: Jest

## Entrega o demostracion

[Agrega el enlace a una compilacion, video o publicacion cuando la entrega lo requiera.]
