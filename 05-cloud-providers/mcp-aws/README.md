# mcp-aws

Base para un MCP orientado a inventario y operaciones controladas sobre AWS.

## Casos de uso

- descubrir recursos por cuenta o región
- consultar estado de instancias, buckets o funciones
- preparar automatizaciones seguras con alcance reducido

## Recomendaciones

- separa herramientas de lectura y escritura
- limita siempre por cuenta, región y servicio
- evita devolver payloads masivos sin filtros
