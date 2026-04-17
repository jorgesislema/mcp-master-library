# mcp-sqlserver

MCP server para Microsoft SQL Server con foco en consulta segura, introspección de esquema y administración controlada.

## Casos de uso

- Consulta de datos operativos y reporting.
- Inspección de índices, planes de ejecución y locks.
- Automatización de tareas rutinarias y recolección de diagnósticos.

## Recomendaciones

- Usa autenticación integrada o secretos gestionados; evita cuentas compartidas.
- Separa conexiones de reporting y transaccionales.
- Revisa `MAXDOP`, `tempdb` y waits antes de exponer herramientas de tuning.

## Consultas útiles

```sql
SELECT TOP 20 wait_type, wait_time_ms, signal_wait_time_ms
FROM sys.dm_os_wait_stats
ORDER BY wait_time_ms DESC;
```

## Referencias

- SQL Server docs: https://learn.microsoft.com/sql/sql-server/
