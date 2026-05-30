# Communication MCPs

Categoría para MCPs orientados a mensajería, alertas y notificaciones.

## Para qué sirve

Estos módulos permiten encapsular integraciones de comunicación para que un agente o cliente MCP pueda enviar mensajes con contratos claros, límites de destinatarios y control de formato.

## Casos de uso

- enviar alertas operativas a un canal o chat concreto
- entregar resúmenes de ejecución a equipos humanos
- disparar flujos de colaboración a partir de eventos del sistema

## Riesgos a controlar

- spam o duplicación de mensajes
- fuga de datos sensibles por canales no autorizados
- mensajes demasiado grandes o mal formateados

## Comparativa rápida

| Módulo | Uso principal | Riesgo principal |
|---|---|---|
| `mcp-slack` | alertas y flujos de equipo | canales o webhooks incorrectos |
| `mcp-teams` | notificaciones corporativas | tarjetas mal formadas o exceso de ruido |
| `mcp-discord` | bots y comunidades técnicas | abuso de rate limits |
| `mcp-email` | reportes y entregas formales | contenido sensible en correo |
| `mcp-telegram` | avisos ligeros y bots | exposición en chats equivocados |