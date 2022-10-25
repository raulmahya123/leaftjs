import React from 'react'
import {
  MapContainer,
  TileLayer,
  Polygon
} from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';
import {statesData} from './data'

const center = [-6.8995231941771, 107.6210690166196];

export default function App() {
  return (
    <MapContainer
    center={center}
    zoom={10}
    style={{width:'100vw', height:'100vh'}}
    className='w-full h-full md:md-cols-2'
    >  
    <TileLayer
    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=AovbylPLNOywA6s1eoNJ"
    attribution= '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    />
   {
    statesData.features.map((state)=>{
      const coordinates = state.geometry.coordinates[0].map((item)=> [item[1],item[0]]);

      return (<Polygon
        pathOptions={{
          fillColor : "#FD8D3c",
          fillOpacity : 0.7,
          weight : 2,
          opacity : 1,
          dashArray: 3,
          color: 'white'
        }}
        positions={coordinates}
        eventHandlers={{
          mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({
              fillOpacity: 0.7 ,
              weight: 5,
              dashArray: "",
              color: '#666',
              fillColor: '#D45962'
            })
          },
          mouseout: (e) => {
            const layer = e.target;
            layer.setStyle({
              fillOpacity: 0.7 ,
              weight: 2,
              dashArray: "3",
              color: 'white',
              fillColor : "#FD8D3c",
            })
          },
          click: (e) => {

          }
        }}
        />)
    })
   }
    
    </MapContainer>
  )
}
