
import React from 'react';
import { useContext } from 'react';
import { countryContext } from './MainContext';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function CountryMap() {
const {country} = useContext(countryContext)
  if (!country?.coordinates) return null;

  const lat = country.coordinates.lat;
  const lng = country.coordinates.lng;

  if (lat == null || lng == null) return null;

  return (
    <div className="mt-8">

      <h2 className="mb-4 text-xl font-bold text-[#1e3a5f]">
        Country Location
      </h2>

      <div className="h-[450px] w-full overflow-hidden rounded-xl">

        <MapContainer
          key={country.codes?.alpha_2}
          center={[lat, lng]}
          zoom={5}
          scrollWheelZoom={true}
          className="h-full w-full"
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[lat, lng]}
            icon={customIcon}
          >
            <Tooltip permanent={false} direction="top">
              {country.names.common}
            </Tooltip>

            <Popup>
              <div>
                <h3 className="font-bold">
                  {country.names.common}
                </h3>

                <p>
                  Capital: {country.capitals?.[0] || "N/A"}
                </p>

                <p>
                  Region: {country.region}
                </p>
              </div>
            </Popup>

          </Marker>

        </MapContainer>

      </div>
    </div>
  );
}
