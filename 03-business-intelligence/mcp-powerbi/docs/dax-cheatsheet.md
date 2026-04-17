# DAX Cheatsheet

Resumen rápido de patrones DAX útiles cuando trabajas con `mcp-powerbi`.

## Consultas comunes

### Obtener total de ventas

```dax
EVALUATE
ROW("Total Ventas", [Total Sales])
```

### Resumen por categoría

```dax
EVALUATE
SUMMARIZECOLUMNS(
	'Product'[Category],
	"Ventas", [Total Sales]
)
```

### Top N productos

```dax
EVALUATE
TOPN(
	10,
	SUMMARIZECOLUMNS('Product'[Name], "Ventas", [Total Sales]),
	[Ventas], DESC
)
```

## Recomendaciones

- Prefiere `SUMMARIZECOLUMNS` sobre construcciones más costosas cuando sea posible.
- Evita iteradores complejos si puedes resolverlo con medidas preexistentes.
- Prueba primero con ventanas pequeñas de datos.
