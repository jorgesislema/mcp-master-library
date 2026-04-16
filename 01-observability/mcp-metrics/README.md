# mcp-metrics

MCP server para instrumentación de métricas operacionales siguiendo el modelo RED (Rate, Errors, Duration) y exponiéndolas en formato Prometheus/OpenMetrics.

## Para qué sirve

- Exponer métricas `/metrics` por cada MCP server.
- Instrumentar herramientas con contadores, histogramas y gauges.
- Alimentar dashboards Grafana y alertas de SLA.

## Instalación

```bash
cd 01-observability/mcp-metrics
npm ci
```

## Uso básico

```typescript
import { createMetrics } from './src/metrics';

const metrics = createMetrics({ service: 'mcp-powerbi' });

// Contador de llamadas
metrics.counter('tool_calls_total', { tool: 'execute-dax', status: 'success' });

// Histograma de duración (en ms)
metrics.histogram('tool_duration_ms', 340, { tool: 'execute-dax' });

// Gauge para conexiones activas
metrics.gauge('db_connections_active', 5);
```

## Métricas estándar recomendadas

| Métrica | Tipo | Descripción |
|---------|------|-------------|
| `mcp_requests_total` | Counter | Total de requests por estado |
| `mcp_request_duration_ms` | Histogram | Latencia por tool y percentil |
| `mcp_errors_total` | Counter | Errores por tipo y tool |
| `mcp_active_connections` | Gauge | Conexiones abiertas al momento |
| `mcp_queue_depth` | Gauge | Profundidad de cola de tareas |

## Ejemplo de output Prometheus

```
# HELP mcp_requests_total Total de requests MCP
# TYPE mcp_requests_total counter
mcp_requests_total{tool="execute-dax",status="success"} 142
mcp_requests_total{tool="execute-dax",status="error"} 3

# HELP mcp_request_duration_ms Duración de requests en ms
# TYPE mcp_request_duration_ms histogram
mcp_request_duration_ms_bucket{tool="execute-dax",le="100"} 80
mcp_request_duration_ms_bucket{tool="execute-dax",le="500"} 138
mcp_request_duration_ms_count{tool="execute-dax"} 145
mcp_request_duration_ms_sum{tool="execute-dax"} 48900
```

## Alertas recomendadas (Prometheus Rules)

```yaml
groups:
  - name: mcp-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(mcp_errors_total[5m]) > 0.05
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "Tasa de error MCP > 5% en 5 min"

      - alert: SlowResponseP99
        expr: histogram_quantile(0.99, rate(mcp_request_duration_ms_bucket[5m])) > 2000
        for: 3m
        labels:
          severity: critical
        annotations:
          summary: "P99 latencia > 2s en últimos 5 min"
```

## Variables de entorno

| Variable | Defecto | Descripción |
|----------|---------|-------------|
| `METRICS_PORT` | `9090` | Puerto donde se expone `/metrics` |
| `METRICS_PREFIX` | `mcp` | Prefijo de todas las métricas |
| `METRICS_DEFAULT_LABELS` | `{}` | Labels JSON adicionales en todas las métricas |

## Lecciones aprendidas

- Mantén la cardinalidad baja: no uses IDs de usuario o URLs completas como labels.
- Configura un SLO explícito y una alerta por violación. Sin SLO las métricas son ruido.
- Combina este módulo con `mcp-logger` para correlacionar trazas y métricas mediante `trace_id`.

