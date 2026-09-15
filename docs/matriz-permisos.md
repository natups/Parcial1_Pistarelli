# Matriz de Permisos

## Contexto
- **Tarea:** Desarrollo de la lógica y la interfaz del juego Laberinto Recolector.
- **Entorno aislado:** Repositorio local `Parcial1_Pistarelli`.
- **Responsable humano:** Estudiante.

| Acción | Alcance | Decisión | Condición o motivo |
| :--- | :--- | :--- | :--- |
| **Leer archivos** | Todo el repositorio | permitir | Necesario para analizar el proyecto |
| **Buscar contenido** | Todo el repositorio | permitir | Necesario para ubicar funciones y rutas |
| **Editar** | `src/*`, `tests/*` | permitir | Una vez aprobados el GDD y la especificación |
| **Editar** | `GDD.md`, `docs/*` | preguntar | Requiere validación humana previa |
| **Ejecutar pruebas** | `npm test` | permitir | Para validar criterios de aceptación |
| **Instalar dependencias**| `package.json` | preguntar | Solo se permiten paquetes declarados |
| **Acceder a red** | Red externa | denegar | Desarrollo 100% local |
| **Leer secretos** | Ninguno | denegar | No existen ni se requieren credenciales |
| **Eliminar archivos** | Todo el repositorio | preguntar | Evitar pérdida accidental de evidencia |
| **Commit** | Git local | preguntar | Confirmar hitos de desarrollo |

## Recuperación
- **Copia o control de versión disponible:** Sí, Git en repositorio local.
- **Procedimiento ante una acción inesperada:** Revertir los cambios no deseados mediante `git checkout` o `git reset`.