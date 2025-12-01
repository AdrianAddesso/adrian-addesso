# Final Taller de Programación 2 – Adrian Addesso

Este proyecto corresponde al trabajo final de la materia **Taller de Programación 2**. A continuación se detallan los pasos para instalar, configurar y ejecutar la aplicación localmente.

---

## 🚀 Requisitos previos
Asegurate de tener instalado:
- **Node.js** (versión LTS recomendada) 👉 https://nodejs.org/
- **npm** (se instala junto con Node)

## 📥 Clonar el repositorio
`git clone https://github.com/AdrianAddesso/adrian-addesso`

Entrar al directorio:
`cd adrian-addesso`

## 📦 Instalar dependencias
`npm install`

## ▶️ Ejecutar el proyecto
`npm start`

**Modo desarrollo**
`npm run dev`

---

# Taller de Programación 2
## Examen Final (1 de diciembre, 2025)

### Enunciado: Sistema de seguimiento de corredores por GPS

Se desea realizar un sistema que reciba y procese coordenadas de posición enviadas por corredores participantes de una maratón. Los datos del corredor se componen de un id alfanumérico de seis caracteres (ej. COR123) y los valores de posición en formato GPS: latitud y longitud.

El objetivo del sistema es almacenar los datos recibidos y, si corresponden al mismo corredor, actualizar sólo su última posición. Además, se pide implementar un sistema de alerta para detectar corredores que estén a menos de 50 metros uno del otro.

La fórmula utilizada para el cálculo de la distancia entre dos ubicaciones GPS será la fórmula de Haversine. El código de dicha fórmula en Javascript para calcular la distancia en metros entre dos puntos es el siguiente:
```javascript
function distanciaGPS(lat1, lon1, lat2, lon2) {
  const R = 6371000; // radio terrestre en metros
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const lat1Rad = lat1 * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) *
    Math.cos(lat2Rad) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // distancia en metros
}
```

### Requerimientos del backend:
- Almacenar, actualizar y listar corredores.
- Revisar distancias al ingresar nuevos datos.
- Devolver alertas cuando existan corredores a menos de 50 metros.

### Endpoints requeridos:

#### 1. POST /corredores
**Recibe:**
```json
{ "id": "COR123", "latitud": -34.6037, "longitud": -58.3816 }
```
**Validaciones:** id de 6 caracteres alfanuméricos, latitud y longitud numéricas.

#### 2. GET /corredores
Lista todos los corredores.

#### 3. Alerta de proximidad
Tras ingresar el corredor, comparar su posición con el resto y devolver lista de IDs si hay peligro.

El servidor recibirá y responderá desde y hacia el frontend con los datos requeridos en formato JSON. En caso de suceder algún inconveniente, se espera que el servidor responda con un objeto con un campo 'errorMsg' informando el motivo de la falla. Todas las respuestas deberán estar correctamente adosadas con su código de estado correspondiente, según el resultado de la operación.

### Aclaraciones sobre el desarrollo esperado:

1. El proyecto debe incluir únicamente el backend del sistema, utilizando Node.js + express. El formato del servidor es de tipo RESTful. Tener en cuenta los lineamientos que propone esta propuesta, especialmente a la hora de elegir las rutas de acceso al sistema.

2. El sistema debe estar correctamente separado en capas y componentes, y esta separación debe estar claramente puesta de manifiesto en la estructura de carpetas y archivos. Entre los componentes que esperamos que estén presentes encontramos: router/controlador, casos de uso, modelo/s, DAO/s, servicio de envío de mails, y factories (los que correspondan de acuerdo al sistema modelado).

3. Prestar atención al sentido de las dependencias entre los componentes, recordando que las capas más cercanas al negocio no deben estar acopladas a las capas más externas (usualmente de infraestructura). Con esto en mente, importar módulos o inyectar dependencias según corresponda.

4. La validación de datos es una parte importante del negocio, por lo tanto, observar cómo y dónde realizarla.

5. No es necesario utilizar una conexión a base de datos real, persistir en el DAO usando memoria ram del servidor.

6. Recordar el rol de las factories, que nos permiten desacoplarnos de las dependencias de nuestros componentes a la hora necesitar una instancia de los mismos. Recordar esto especialmente a la hora de decidir cómo obtener los casos de uso para invocarlos desde la capa de ruteo.