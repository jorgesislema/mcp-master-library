# Lessons Learned Template

Usa este archivo para registrar aprendizajes durante el desarrollo del MCP.

## Qué documentar

- Decisiones de diseño y por qué se tomaron.
- Limitaciones detectadas en APIs externas.
- Riesgos operativos o de seguridad identificados.
- Errores repetidos y cómo evitarlos.

## Formato recomendado

### Fecha
- Contexto
- Decisión
- Impacto
- Seguimiento pendiente

## Ejemplo

### 2026-04-07
- Contexto: la API externa imponía rate limits agresivos.
- Decisión: añadir caché de 5 minutos y reintentos exponenciales.
- Impacto: se redujeron errores transitorios y consumo innecesario.
- Seguimiento pendiente: ajustar TTL según métricas reales.
