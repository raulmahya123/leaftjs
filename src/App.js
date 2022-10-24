import React from 'react'
import {
  MapContainer,
  TileLayer
} from 'react-leaflet'
import './App.css'

const center = [-6.8995231941771, 107.6210690166196];

export default function App() {
  return (
    <MapContainer
    center={center}
    zoom={10}
    style={{width:'100vw', height:'100vh'}}
    >  
    </MapContainer>
  )
}
