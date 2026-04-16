# mcp-logger

MCP server para logging estructurado. Centraliza la emisión de logs desde cualquier servidor MCP con niveles configurables, redactado automático de PII y exportación a múltiples destinos.

## Para qué sirve

- Emitir logs en formato JSON estructurado con campos estándar (`timestamp`, `level`, `trace_id`, `service`, `message`, `meta`).
- Redactar automáticamente campos sensibles (tokens, contraseñas, tarjetas).
- Enviar logs a stdout, archivo rotado o sink remoto (Loki, CloudWatch, Datadog).

## Instalación

```bash
cd 01-observability/mcp-logger
npm ci
```

## Uso básico

```typescript
import { createLogger } from './src/logger';

const log = createLogger({ service: 'mcp-postgresql', level: 'info' });

log.info('Conexión establecida', { host: 'db.internal', port: 5432 });
log.warn('Latencia elevada', { query: 'SELECT *', ms: 342 });
log.error('Error de conexión', { err: new Error('ECONNREFUSED') });
```

## Campos estándar del log

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `timestamp` | ISO 8601 | Hora en UTC |
| `level` | string | `debug` \| `info` \| `warn` \| `error` |
| `trace_id` | string | ID de traza para correlación |
| `service` | string | Nombre del MCP que emite el log |
| `message` | string | Descripción legible |
| `meta` | object | Datos de contexto adicionales |

## Niveles y cuándo usarlos

| Nivel | Cuándo |
|-------|--------|
| `debug` | Trazas de desarrollo; desactiva en producción |
| `info` | Eventos normales de negocio |
| `warn` | Situaciones anómalas que no detienen el flujo |
| `error` | Fallos que requieren atención inmediata |

## Redactado de PII

Configura los campos a redactar en `config.json`:

```json
{
  "redact": ["password", "token", "api_key", "authorization", "credit_card"]
}
```

El logger reemplaza el valor con `[REDACTED]` antes de emitir.

## Integración con OpenTelemetry

```typescript
import { trace } from '@opentelemetry/api';
const span = trace.getActiveSpan();
const traceId = span?.spanContext().traceId ?? 'no-trace';
log.info('Consulta ejecutada', { traceId, rows: 12 });
```

## Variables de entorno

| Variable | Defecto | Descripción |
|----------|---------|-------------|
| `LOG_LEVEL` | `info` | Nivel mínimo de log |
| `LOG_FORMAT` | `json` | `json` o `pretty` |
| `LOG_SINK` | `stdout` | `stdout`, `file`, `loki` |
| `LOG_FILE` | `logs/app.log` | Ruta si `LOG_SINK=file` |
| `LOKI_URL` | — | Endpoint de Grafana Loki |

## Lecciones aprendidas

- Nunca loguees el contenido completo de requests externos; puede contener tokens o datos personales.
- Usa un `trace_id` único por petición y propagalo a todos los MCPs involucrados.
- En producción desactiva `debug` para evitar filtración de datos internos.

