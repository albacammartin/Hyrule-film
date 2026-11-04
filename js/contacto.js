
// Coordenadas de MasterD 
const masterD = [37.374729640557895, -5.975069699181408];

// Crea el mapa en el div con id="mapa"
const mapa = L.map('mapa').setView(masterD, 15);

// Carga las imágenes del mapa desde OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(mapa);

// Pone un marcador en MasterD con un mensaje
L.marker(masterD).addTo(mapa).bindPopup('Sede de MasterD');

// Pide al navegador la ubicación del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(

        // Si el usuario DA permiso: centra el mapa en su ubicación
        function (posicion) {
            const usuario = [posicion.coords.latitude, posicion.coords.longitude];
            mapa.setView(usuario, 15);
            L.marker(usuario).addTo(mapa).bindPopup('Estás aquí').openPopup();
        },

        // Si el usuario NO da permiso: el mapa se queda en MasterD
        function () {
            console.log('Sin permiso de ubicación: se muestra la sede de MasterD');
        }
    );
}