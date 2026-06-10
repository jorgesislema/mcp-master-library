# File Systems MCPs

Categoría para MCPs que exponen acceso controlado a archivos, carpetas y artefactos.

## Para qué sirve

Estos módulos son útiles cuando necesitas navegar, inspeccionar o mover artefactos sin dar acceso irrestricto a todo un sistema de archivos o bucket.

## Casos de uso

- listar archivos relevantes para un flujo MCP
- consultar metadatos antes de descargar contenido
- aplicar filtros por extensión, ruta o tamaño

## Riesgos a controlar

- lectura accidental de rutas sensibles
- descarga de artefactos excesivamente grandes
- exposición de credenciales embebidas en archivos de configuración

## Comparativa rápida

| Módulo | Uso principal | Riesgo principal |
|---|---|---|
| `mcp-local-fs` | archivos locales del workspace | acceso a rutas fuera de alcance |
| `mcp-s3` | buckets y objetos | exposición de datos por prefijos abiertos |
| `mcp-google-drive` | documentos y carpetas compartidas | permisos de sharing mal definidos |
| `mcp-dropbox` | archivos sincronizados | duplicación o sincronización no deseada |
| `mcp-sftp` | servidores remotos | credenciales y rutas sensibles |