# mcp-mysql

MCP server para MySQL y MariaDB con foco en consultas de negocio, exploración de esquema y operación segura.

## Casos de uso

- Consultas analíticas ligeras.
- Descubrimiento de tablas, columnas e índices.
- Ejecución de tareas de mantenimiento controladas.

## Consideraciones específicas de MySQL

- Ajusta `wait_timeout` y `interactive_timeout` para evitar desconexiones inesperadas.
- Usa `utf8mb4` como charset por defecto.
- Activa TLS para conexiones remotas.

## Ejemplo

```typescript
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	uri: process.env.MYSQL_URL,
	connectionLimit: 10,
	enableKeepAlive: true,
});

export async function runQuery(sql: string, params: unknown[] = []) {
	const [rows] = await pool.execute(sql, params);
	return rows;
}
```

## Checklist operativo

- Configura `sql_mode=STRICT_TRANS_TABLES`.
- Limita el tamaño máximo de resultados retornados al cliente MCP.
- Añade métricas de latencia por consulta y tasa de errores.

## Referencias

- MySQL 8 Reference Manual: https://dev.mysql.com/doc/refman/8.0/en/
