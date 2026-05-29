# mcp-slack

MCP para enviar mensajes operativos a Slack bajo un contrato explícito.

## Para qué sirve

Encapsula el envío de notificaciones, alertas o resúmenes a canales y usuarios sin exponer al cliente los detalles del webhook o de la API de Slack.

## Casos de uso

- alertas de incidentes o fallos
- resúmenes de despliegue
- notificaciones de workflows MCP

## Qué debe controlar

- canal o destino permitido
- longitud máxima del mensaje
- redacción de datos sensibles
- deduplicación básica si el evento se repite

## Uso rápido

```bash
cd 06-communication/mcp-slack
npm ci
npm test
```
