# mcp-github

GitHub repository and issue automation.

## CÃ³digo incluido

- src/index.ts: manifiesto del servidor y demo bÃ¡sica.
- src/server.ts: tipos y constructor mÃ­nimo del servidor.
- src/tools/main.tool.ts: herramienta principal del MCP.
- 	ests/smoke.test.mjs: smoke test sin dependencias externas.

## Uso rÃ¡pido

`ash
cd 04-version-control/mcp-github
npm ci
npm test
`

## QuÃ© hace este scaffold

- expone una herramienta principal con contrato estable
- devuelve metadatos del mÃ³dulo para pruebas rÃ¡pidas
- sirve como base para reemplazar la implementaciÃ³n demo por lÃ³gica real

## PrÃ³ximos pasos

1. Sustituir la implementaciÃ³n demo por integraciÃ³n real.
2. AÃ±adir validaciÃ³n de entrada y manejo de errores.
3. Incorporar logging, mÃ©tricas y auditorÃ­a si aplica.
