# mcp-powerbi

Servidor MCP especializado en Power BI para explorar modelos semánticos, ejecutar DAX, inspeccionar esquemas, exportar resultados y automatizar tareas analíticas frecuentes.

## Capacidades principales

- Conexión a Power BI Desktop y Power BI Service.
- Ejecución de consultas DAX con validación previa.
- Exploración de tablas, columnas y medidas.
- Exportación de resultados a CSV.
- Registro de auditoría sobre acciones sensibles.

## Estructura

- `src/powerbi-desktop.ts`: conexión local a Desktop.
- `src/powerbi-service.ts`: integración con el servicio cloud.
- `src/dax-executor.ts`: ejecución y control de consultas DAX.
- `src/schema-explorer.ts`: introspección del modelo.
- `src/audit-logger.ts`: auditoría.

## Casos de uso

- Validar una medida nueva antes de publicarla.
- Explorar rápidamente un modelo semántico sin abrir Power BI Desktop.
- Exportar resultados analíticos desde una herramienta MCP a pipelines posteriores.

## Recomendaciones operativas

- Limita el tamaño de resultado y el tiempo máximo de ejecución por query.
- Mantén un allowlist de workspaces o datasets autorizados.
- Registra en auditoría cada exportación o publicación.

## Documentación relacionada

- `docs/setup-guide.md`
- `docs/dax-cheatsheet.md`
- `docs/troubleshooting.md`
- `docs/security-best-practices.md`
