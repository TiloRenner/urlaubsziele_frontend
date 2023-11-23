import { MapContainer, TileLayer, Polygon} from "react-leaflet";
import getCountry from "./getCountry";
import { useEffect, useState } from "react";

export default function MyMaps({ location, countryCode, color }) {
  const position = [location.lat, location.lon];

  const [thisCountry, setThisCountry] = useState([ ])
  const purpleOptions = { color: `rgb(${color})` }
  useEffect(() => {
    setThisCountry(getCountry(countryCode).geometry)
  }, [])
  
  return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={true} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {thisCountry && <Polygon pathOptions={purpleOptions} positions={thisCountry} />}
    </MapContainer>
  );
}