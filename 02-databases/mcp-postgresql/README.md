# mcp-postgresql

MCP server para PostgreSQL orientado a consulta, administración operativa segura y automatización de tareas repetitivas.

## Casos de uso

- Ejecutar consultas parametrizadas desde un cliente MCP.
- Inspeccionar esquema, tablas, índices y relaciones.
- Obtener métricas operativas básicas y diagnosticar consultas lentas.
- Automatizar tareas de mantenimiento seguras y auditables.

## Recomendaciones de arquitectura

- Usa un pool de conexiones en lugar de abrir conexiones por request.
- Mantén queries en modo lectura por defecto y separa las herramientas DDL y DML en un módulo controlado.
- Usa roles distintos para lectura, escritura y administración.

## Ejemplo de uso

```typescript
import { Pool } from 'pg';

const pool = new Pool({
	connectionString: process.env.POSTGRES_URL,
	max: 10,
	idleTimeoutMillis: 30_000,
});

export async function queryRows(sql: string, params: unknown[] = []) {
	const client = await pool.connect();
	try {
		const result = await client.query(sql, params);
		return result.rows;
	} finally {
		client.release();
	}
}
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `POSTGRES_URL` | Connection string principal |
| `PGSSLMODE` | `disable`, `require`, `verify-full` |
| `PG_POOL_MAX` | Máximo de conexiones del pool |

## Consultas recomendadas

```sql
SELECT schemaname, relname, seq_scan, idx_scan
FROM pg_stat_user_tables
ORDER BY seq_scan DESC
LIMIT 20;
```

## Buenas prácticas

- Activa `statement_timeout` para proteger el servidor ante queries costosas.
- Usa parámetros, nunca interpolación directa.
- Si expones administración, registra toda acción en `mcp-auditor`.

## Referencias

- PostgreSQL docs: https://www.postgresql.org/docs/
- pg_stat_statements: https://www.postgresql.org/docs/current/pgstatstatements.html
