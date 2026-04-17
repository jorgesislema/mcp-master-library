# Lessons Learned - mcp-powerbi

Registro de aprendizajes específicos del MCP de Power BI.

## Áreas a documentar

- Diferencias entre Power BI Desktop y Service.
- Límites prácticos de consultas DAX en modelos grandes.
- Problemas frecuentes de autenticación y permisos.
- Estrategias para exportación segura y auditable.

## Entradas iniciales

### Compatibilidad
- Algunas operaciones funcionan distinto entre Desktop y Service; conviene mantener adaptadores separados.

### Rendimiento
- Las consultas DAX con demasiados filtros o iteradores pueden degradar drásticamente el tiempo de respuesta.

### Seguridad
- Exportar datos sin filtro es un riesgo; aplica límites de filas y columnas por defecto.
