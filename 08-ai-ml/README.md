# AI and ML MCPs

Categoría para MCPs orientados a prompting, inferencia, recuperación y orquestación de modelos.

## Para qué sirve

Un MCP de AI/ML convierte una integración con modelos en una herramienta gobernable. La diferencia importante es que el MCP define contratos, límites y trazabilidad sobre una API que de otro modo sería demasiado libre.

## Casos de uso frecuentes

- ejecutar prompts con parámetros bien definidos
- escoger modelos y políticas por tarea
- consultar embeddings o búsquedas vectoriales
- aplicar validaciones, límites de tokens y trazabilidad

## Riesgos que esta categoría debe controlar

- uso de modelos no permitidos
- prompts sin validación de contexto
- exposición de secretos o datos sensibles
- respuestas demasiado grandes o costosas

## Incluye

- `mcp-ollama`
- `mcp-openai`
- `mcp-anthropic`
- `mcp-deepseek`
- `mcp-huggingface`
- `mcp-vector-db`

## Recomendación de estudio

Empieza por `mcp-openai` y `mcp-vector-db`: juntos muestran bien la diferencia entre orquestar prompting y exponer recuperación estructurada.