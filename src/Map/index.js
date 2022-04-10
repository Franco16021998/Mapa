import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerWithBadge from "../MarkerWithBadge";
import L from "leaflet";

class MapView extends React.Component {
    
    
  render() {
    const customMarker = new L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40]
    });
    const styleMap = { "width": "100%", "height": "150vh" }
    const position = [51.505, -0.09]

    return (
      <MapContainer
        style={styleMap}
        center={position}
        zoom={12}>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[51.52, -0.15]} icon={customMarker}>
          10
        </Marker>
         
      </MapContainer>
    )
  }

}

export default MapView;