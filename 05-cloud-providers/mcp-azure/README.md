# mcp-azure

MCP para inventario, diagnóstico operativo y validación de alcance sobre recursos de Azure.

## Para qué sirve

Úsalo como base cuando quieras consultar recursos de Azure sin exponer acceso irrestricto al proveedor. Un cliente MCP debería poder pedir un resumen de recursos, comprobar un estado o validar alcance con una entrada pequeña y controlada.

## Casos de uso

- listar recursos de una suscripción o resource group
- resumir el estado de servicios de una aplicación
- validar si una operación está dentro del alcance permitido
- preparar el contexto para automatizaciones o despliegues posteriores

## Código incluido

- `src/index.ts`: manifiesto del servidor
- `src/server.ts`: tipos del scaffold
- `src/tools/main.tool.ts`: herramienta principal de inventario
- `tests/smoke.test.mjs`: validación mínima del módulo

## Uso rápido

```bash
cd 05-cloud-providers/mcp-azure
npm ci
npm test
```

## Cómo evolucionarlo

1. Añade un adaptador real al SDK o CLI de Azure.
2. Restringe la entrada a `subscriptionId`, `resourceGroup` y `resourceType`.
3. Devuelve solo campos útiles para operación y troubleshooting.
4. Registra en auditoría cualquier acción que modifique estado.
