export async function distanciaGPS(lat1, lon1, lat2, lon2) {
  const R = 6371000; // radio terrestre en metros
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;

    const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Verificar corredores dentro de 50 metros
export async function checkDistancia(service, lat, lon) {
    const alerta = [];
    const corredores = await service.getAll();

    for (const corredor of corredores) {
        const distancia = await distanciaGPS(lat,lon,corredor.latitud,corredor.longitud );
        if (distancia <= 50) {
            alerta.push(corredor.id);
            console.log(`Corredor ${corredor.id} está dentro de 50 metros.`);
        }
    }

    return alerta;
}
