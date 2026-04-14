# MCP Template

Plantilla base para crear nuevos MCP servers en TypeScript con una estructura mínima, pruebas, ejemplos de configuración y documentación inicial.

## Objetivo

Usa esta carpeta como punto de partida cuando quieras crear un nuevo servidor MCP sin empezar desde cero. El template ya separa el código de arranque, las herramientas, las utilidades y las pruebas.

## Estructura

- `src/index.ts`: punto de entrada.
- `src/server.ts`: bootstrap del servidor.
- `src/tools/`: herramientas MCP.
- `src/utils/`: helpers compartidos.
- `tests/`: pruebas de referencia.
- `config-examples/`: ejemplos para clientes MCP.

## Flujo recomendado

1. Duplica `00-template` a una carpeta nueva con el nombre del MCP.
2. Cambia `package.json`, `README.md` y `lessons-learned.md`.
3. Sustituye `example.tool.ts` por herramientas reales.
4. Añade pruebas unitarias y, si aplica, pruebas de integración.

## Quick Start

```bash
cd 00-template
npm ci
npm test
```

## Patrón de herramienta

```typescript
export const nowTool = {
	id: 'time.now',
	description: 'Devuelve la hora del servidor',
	async run() {
		return { now: new Date().toISOString() };
	},
};
```

## Recomendaciones

- Valida siempre los inputs.
- Mantén cada herramienta enfocada en una sola responsabilidad.
- Añade observabilidad desde el inicio usando `mcp-logger` y `mcp-metrics`.
- Registra decisiones relevantes en `lessons-learned.md`.
