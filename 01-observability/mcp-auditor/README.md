# mcp-auditor

MCP server para auditoría inmutable de acciones críticas. Registra quién hizo qué, cuándo y con qué resultado. Diseñado para entornos regulados (SOC 2, ISO 27001, GDPR).

## Para qué sirve

- Registrar eventos de negocio de alto impacto: publicaciones, eliminaciones, cambios de configuración, exportaciones.
- Proporcionar un trail de auditoría a prueba de manipulación (append-only).
- Generar reportes de cumplimiento en JSON o CSV.

## Instalación

```bash
cd 01-observability/mcp-auditor
npm ci
```

## Uso básico

```typescript
import { audit } from './src/auditor';

await audit({
  actor: 'user:jorge@empresa.com',
  action: 'report.publish',
  resource: 'powerbi:workspace/prod/report/ventas-q1',
  result: 'success',
  meta: { size_bytes: 204800 },
});
```

## Esquema del evento de auditoría

```typescript
interface AuditEvent {
  id: string;          // UUID v4
  timestamp: string;   // ISO 8601 UTC
  actor: string;       // Identidad del ejecutor (usuario, servicio)
  action: string;      // Verbo.recurso (ej. report.publish)
  resource: string;    // URI del recurso afectado
  result: 'success' | 'failure' | 'denied';
  trace_id?: string;   // Correlación con log/trace
  meta?: Record<string, unknown>;
}
```

## Backends soportados

| Backend | Descripción |
|---------|-------------|
| `file` | Archivo append-only JSONL local |
| `postgresql` | Tabla `audit_log` con partición por mes |
| `s3` | Bucket con versionado habilitado |
| `azure-blob` | Container con políticas de retención |

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `AUDIT_BACKEND` | `file` \| `postgresql` \| `s3` \| `azure-blob` |
| `AUDIT_DB_URL` | Connection string (si backend=postgresql) |
| `AUDIT_S3_BUCKET` | Nombre del bucket S3 |
| `AUDIT_FILE_PATH` | Ruta del archivo local |

## Buenas prácticas

- Separa el almacén de auditoría del almacén de aplicación para evitar que una brecha de datos comprometa el trail.
- Habilita WORM (Write Once Read Many) en el destino (S3 Object Lock, Azure Immutable Blob) si la regulación lo requiere.
- Firma los eventos con HMAC si necesitas prueba de integridad matemática.
- Retén logs de auditoría al menos 13 meses (requisito PCI DSS y SOC 2).

## Lecciones aprendidas

- Los eventos de auditoría nunca deben incluir el contenido completo de los datos (solo identificadores y resumen).
- Implementa alertas sobre `result: 'denied'` frecuentes — pueden indicar ataque o misconfiguration.

