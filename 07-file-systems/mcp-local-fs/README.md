# mcp-local-fs

MCP para inspeccionar rutas locales de forma controlada.

## Para qué sirve

Sirve para listar archivos, validar existencia de rutas y resumir metadatos sin exponer acceso irrestricto a todo el disco.

## Casos de uso

- explorar un workspace concreto
- filtrar archivos por extensión
- resumir tamaño y fecha de modificación

## Qué debe controlar

- raíz permitida de exploración
- límites de profundidad y cantidad de resultados
- exclusión de carpetas sensibles o temporales

## Uso rápido

```bash
cd 07-file-systems/mcp-local-fs
npm ci
npm test
```
