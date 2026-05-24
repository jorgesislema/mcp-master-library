# Cloud Providers MCPs

Esta categoría agrupa MCPs para trabajar con infraestructura, plataformas cloud y runtimes de despliegue.

## Para qué sirve

Estos módulos son útiles cuando quieres exponer capacidades de infraestructura a un cliente MCP sin abrir acceso irrestricto al proveedor. El objetivo no es dar control total del cloud, sino encapsular operaciones concretas y seguras.

## Casos de uso frecuentes

- inventariar recursos por suscripción, cuenta o proyecto
- consultar estado operativo de servicios concretos
- validar configuraciones antes de desplegar
- resumir riesgos o desviaciones de una infraestructura

## Qué debe tener un buen MCP de cloud

- alcance restringido por suscripción, cuenta, proyecto o cluster
- herramientas separadas para lectura y cambio de estado
- límites explícitos de tiempo, región y volumen de resultados
- auditoría de operaciones sensibles

## Incluye

- `mcp-aws`
- `mcp-azure`
- `mcp-gcp`
- `mcp-docker`
- `mcp-kubernetes`
- `mcp-terraform`

## Recomendación de estudio

Empieza por `mcp-azure` o `mcp-terraform`: muestran mejor el valor de MCP cuando una integración necesita visibilidad, validación y control.