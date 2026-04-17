# Troubleshooting

Guía rápida para diagnosticar problemas frecuentes en `mcp-powerbi`.

## Error de autenticación

- Verifica tenant, client ID y secreto.
- Comprueba que la cuenta tenga acceso al workspace y dataset correctos.

## No aparecen tablas

- Confirma que el dataset seleccionado es el esperado.
- Si usas Desktop, revisa que el modelo esté abierto y accesible.

## Consulta DAX lenta

- Reduce columnas devueltas.
- Filtra antes de agregar.
- Revisa medidas con iteradores y relaciones complejas.

## Exportación falla

- Limita el tamaño del dataset.
- Revisa permisos del destino de exportación.
- Confirma que el proceso de auditoría no esté bloqueando la operación por policy.
