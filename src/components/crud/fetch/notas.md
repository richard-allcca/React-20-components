# Uso de json-server para simular una API RESTful

## Instalación

### Paso 1: Instalar json-server globalmente

Ejecuta el siguiente comando en tu terminal:

```bash
npm install -g json-server
```

## Configuración

### Paso 2: Crear un archivo de base de datos

Crea un archivo en la ruta `src/api/db.json` con la estructura de datos que deseas simular. Por ejemplo:

```json
{
  "data": [
    { "id": 1, "name": "Item 1", "constellation": "Constellation A" },
    { "id": 2, "name": "Item 2", "constellation": "Constellation B" }
  ]
}
```

## Ejecución

### Paso 3: Iniciar el servidor

Ejecuta el siguiente comando para iniciar el servidor json-server:

```bash
json-server --watch src/api/db.json
```

El servidor estará disponible en `http://localhost:3000` por defecto.
