# Setup Guide

Guía de puesta en marcha para `mcp-powerbi`.

## Requisitos previos

- Node.js 18 o superior.
- Acceso a Power BI Desktop o a Power BI Service.
- Credenciales con permisos mínimos necesarios.

## Instalación

```bash
cd 03-business-intelligence/mcp-powerbi
npm ci
```

## Configuración local

1. Revisa `config-examples/local-desktop.json`.
2. Ajusta el endpoint local de Power BI Desktop.
3. Configura variables de entorno para credenciales si usas Service.

## Configuración cloud

1. Revisa `config-examples/cloud-service.json`.
2. Define tenant, workspace y dataset.
3. Verifica permisos de lectura, ejecución y exportación.

## Validación inicial

- Ejecuta una consulta DAX simple.
- Lista tablas del modelo.
- Comprueba que el auditor registre la operación.
