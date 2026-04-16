# mcp-mongodb

MCP server para MongoDB pensado para exploración de colecciones, consultas seguras y análisis operativo básico.

## Casos de uso

- Buscar documentos mediante filtros controlados.
- Inspeccionar índices y distribución de colecciones.
- Ejecutar agregaciones predefinidas o limitadas.

## Ejemplo

```typescript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URL!);
await client.connect();

export async function findUsers(status: string) {
	return client.db('app').collection('users')
		.find({ status })
		.limit(100)
		.toArray();
}
```

## Buenas prácticas

- Restringe pipelines de agregación arbitrarios si el MCP será multiusuario.
- Crea índices sobre filtros frecuentes antes de exponer nuevas herramientas.
- Evita devolver documentos completos si contienen payloads grandes; usa proyecciones.

## Referencias

- MongoDB Manual: https://www.mongodb.com/docs/manual/
