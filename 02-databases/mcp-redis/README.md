# mcp-redis

MCP server para Redis orientado a caché, locking distribuido y estructuras de datos de alta velocidad.

## Casos de uso

- Caché de respuestas MCP costosas.
- Locks distribuidos para evitar concurrencia duplicada.
- Colas simples con listas o streams.

## Ejemplo

```typescript
import { createClient } from 'redis';

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

export async function cacheGetOrSet(key: string, compute: () => Promise<string>) {
	const cached = await redis.get(key);
	if (cached) return cached;

	const value = await compute();
	await redis.setEx(key, 300, value);
	return value;
}
```

## Patrones recomendados

- Usa `SET key value NX PX 30000` para locks básicos.
- Prefiere TTL cortos y explícitos en caché.
- No uses Redis como base principal de auditoría o persistencia crítica sin estrategia adicional.

## Métricas a observar

- `used_memory`
- `evicted_keys`
- `keyspace_hits` / `keyspace_misses`
- latencia de comandos (`LATENCY LATEST`)

## Referencias

- Redis docs: https://redis.io/docs/
