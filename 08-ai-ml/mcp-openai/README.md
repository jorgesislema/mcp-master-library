# mcp-openai

MCP para orquestar prompts sobre OpenAI con contratos explícitos, límites de uso y estructura de salida controlada.

## Para qué sirve

Sirve como base para encapsular llamadas a modelos OpenAI evitando que el cliente tenga que conocer detalles del proveedor, parámetros internos o políticas de seguridad.

## Casos de uso

- ejecutar prompts con un modelo permitido
- resumir texto con límites de tokens y temperatura
- normalizar salidas para flujos posteriores
- registrar metadatos de uso sin exponer secretos

## Qué debe controlar este MCP

- allowlist de modelos
- límites de tokens y temperatura
- separación entre prompt del sistema y prompt del usuario
- redacción de datos sensibles antes de enviar contexto

## Uso rápido

```bash
cd 08-ai-ml/mcp-openai
npm ci
npm test
```
