# mcp-debugger

MCP server con utilidades de debugging para MCP servers: inspección de estado interno, snapshots, replay de requests y análisis de dependencias.

## Para qué sirve

- Capturar snapshots del estado de un MCP server en tiempo de ejecución.
- Reproducir (replay) una herramienta con inputs previos para reproducir bugs.
- Inspeccionar conexiones activas, colas y memoria.
- Generar un report de health para diagnóstico rápido.

## Instalación

```bash
cd 01-observability/mcp-debugger
npm ci
```

## Herramientas disponibles

### `debug.snapshot`
Captura el estado actual del servidor: conexiones, uptime, memoria, configuración activa.

```typescript
// request MCP
{ "tool": "debug.snapshot" }

// response
{
  "uptime_s": 3602,
  "memory_mb": { "rss": 48.2, "heap_used": 22.1 },
  "active_connections": 3,
  "config": { "LOG_LEVEL": "info", "DB_POOL_SIZE": 10 }
}
```

### `debug.replay`
Reproduce la última N llamadas a una herramienta con sus inputs originales.

```typescript
{ "tool": "debug.replay", "params": { "target_tool": "execute-dax", "last": 5 } }
```

### `debug.healthcheck`
Verifica conectividad con dependencias externas (DB, APIs) y devuelve `passing` / `degraded` / `failing`.

```typescript
{ "tool": "debug.healthcheck" }
// response: { "status": "degraded", "checks": { "db": "passing", "powerbi_api": "failing" } }
```

## Flujo de debugging recomendado

```
1. Activa el endpoint debug.snapshot → identifica uso anómalo de memoria o conexiones.
2. Llama debug.healthcheck → detecta qué dependencia falla.
3. Usa debug.replay con los inputs del request fallido → reproduce el error localmente.
4. Correlaciona el trace_id con mcp-logger para ver el stack completo.
```

## Variables de entorno

| Variable | Defecto | Descripción |
|----------|---------|-------------|
| `DEBUG_ENABLED` | `false` | Habilitar endpoints de debug (¡desactivar en producción!) |
| `DEBUG_REPLAY_BUFFER` | `100` | Número máximo de requests guardados para replay |
| `DEBUG_SECRET` | — | Header `X-Debug-Secret` requerido para acceder a los endpoints |

## Advertencia de seguridad

Nunca expongas los endpoints de debug sin autenticación. Usa `DEBUG_SECRET` o restringe el acceso por red. Los snapshots pueden contener información sensible de configuración.

## Lecciones aprendidas

- Los bugs más difíciles suelen ser de estado: el replay ayuda a aislar cuándo el estado se corrompió.
- El healthcheck debe ser el primer paso en cualquier incident runbook.
- Desactiva siempre `DEBUG_ENABLED=true` antes de promover a producción.

