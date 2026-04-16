# mcp-bigquery

MCP server para Google BigQuery, orientado a analítica, exploración de datasets y automatización de consultas de costo controlado.

## Casos de uso

- Ejecutar consultas analíticas sobre datasets grandes.
- Descubrir tablas, particiones y esquemas.
- Estimar costo antes de ejecutar una query real.

## Buenas prácticas clave

- Usa particionado y clustering para reducir bytes escaneados.
- Ejecuta siempre `dryRun` cuando la query venga de un usuario o herramienta generativa.
- Aplica límites de presupuesto por proyecto y por servicio.

## Ejemplo conceptual

```typescript
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery();

export async function estimateQueryCost(query: string) {
	const [job] = await bigquery.createQueryJob({ query, dryRun: true });
	return job.metadata.statistics.totalBytesProcessed;
}
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `GOOGLE_APPLICATION_CREDENTIALS` | Ruta al JSON de service account |
| `BIGQUERY_PROJECT_ID` | Proyecto por defecto |
| `BIGQUERY_LOCATION` | Región (`US`, `EU`, etc.) |

## Referencias

- BigQuery docs: https://cloud.google.com/bigquery/docs
