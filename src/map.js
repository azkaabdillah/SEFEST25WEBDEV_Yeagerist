import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ikon kustom untuk marker lokasi pengguna & kantor BPBD
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [35, 35],
});

const officeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
});

// Koordinat kantor BPBD
const bpbdOffices = [
  { name: "BPBD Jakarta", lat: -6.186486, lng: 106.875412 },
  { name: "BPBD Bandung", lat: -6.914744, lng: 107.609810 },
  { name: "BPBD Semarang", lat: -7.005145, lng: 110.438125 },
  { name: "BPBD Surabaya", lat: -7.257472, lng: 112.752090 },
  { name: "BPBD Medan", lat: 3.595196, lng: 98.672226 },
  { name: "BPBD Makassar", lat: -5.147665, lng: 119.432732 },
  { name: "BPBD Denpasar", lat: -8.670458, lng: 115.212631 },
];

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        () => console.error("Gagal mendapatkan lokasi pengguna")
      );
    }
  }, []);

  return (
    <div className="container" style={{marginTop: '6rem', marginBottom: '3rem'}}>
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h4>Lokasi Kantor BPBD di Indonesia</h4>
        </div>
        <div className="card-body">
          <MapContainer
            center={[-2.5, 118]} // Posisi tengah Indonesia
            zoom={5}
            style={{ height: "500px", width: "100%", borderRadius: "10px" }}
            className="border"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Marker untuk setiap kantor BPBD */}
            {bpbdOffices.map((office, index) => (
              <Marker key={index} position={[office.lat, office.lng]} icon={officeIcon}>
                <Popup>{office.name}</Popup>
              </Marker>
            ))}

            {/* Marker lokasi pengguna */}
            {userLocation && (
              <Marker position={userLocation} icon={userIcon}>
                <Popup>Lokasi Anda</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
