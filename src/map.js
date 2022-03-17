import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css";

// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// const position = [51.505, -0.09];

function PopupExample(lat,lon) {
    const position =[lat, lon];
    // console.log(position);
  return (
    <MapContainer center={position} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
export default PopupExample;