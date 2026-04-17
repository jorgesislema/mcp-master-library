# Bases de Datos (MCP)

Carpeta para drivers y patrones de integración con bases de datos comunes.

## Submódulos

- `mcp-postgresql`: conexión y pooling, migraciones y observabilidad.
- `mcp-mysql`: acceso seguro a MySQL/MariaDB con buenas prácticas operativas.
- `mcp-mongodb`: exploración de colecciones, índices y agregaciones controladas.
- `mcp-redis`: caché, locks distribuidos y colas ligeras.
- `mcp-sqlserver`: consultas, diagnósticos y automatización sobre SQL Server.
- `mcp-bigquery`: analítica y consultas con control de costo.

## Patrones comunes

- Usa pools y timeouts configurables.
- Implementa retries con backoff solo en operaciones idempotentes.
- Separa lectura y escritura cuando sea posible.
- Centraliza auditoría de operaciones sensibles.

## Recomendaciones

1. Mantén scripts de migración versionados.
2. Añade pruebas de integración con contenedores o entornos efímeros.
3. Protege credenciales con un gestor de secretos.
