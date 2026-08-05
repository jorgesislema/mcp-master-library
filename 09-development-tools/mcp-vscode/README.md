# mcp-vscode

Servidor MCP orientado a automatizar tareas comunes dentro de Visual Studio Code: abrir archivos, ejecutar comandos, buscar código y sugerir refactors.

## Casos de uso

- Abrir un archivo o navegar a una ubicación concreta.
- Ejecutar comandos controlados del workspace.
- Buscar símbolos, texto o patrones en el código.
- Generar sugerencias de refactor guiadas por reglas del repositorio.

## Precauciones

- Limita los comandos permitidos.
- Nunca expongas ejecución arbitraria sin validación.
- Registra actividad sensible en auditoría.

## Componentes

- `src/vscode-api.ts`
- `src/workspace-manager.ts`
- `src/terminal-executor.ts`
- `src/extension-manager.ts`
