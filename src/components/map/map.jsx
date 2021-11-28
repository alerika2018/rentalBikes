import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = ({ latLng }) => {
  return (
    <MapContainer
      scrollWheelZoom={true}
      //   style={{ width: "100%", height: "300px" }}
      // 49.22476493713792, -123.10854936831345, -123.10854936831345
      center={[
        latLng.lat ? latLng.lat : "49.22476493713792",
        latLng.lng ? latLng.lng : "-123.10854936831345",
      ]}
      zoom={15}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLng} />
    </MapContainer>
  );
};

export default Map;
