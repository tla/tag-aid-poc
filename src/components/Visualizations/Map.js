import React, { useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken='pk.eyJ1IjoiYWNhcHNpcyIsImEiOiJjazdhb3AydDkwM2c0M21tZ2NyZmVoMzh4In0.GIgGl88fQo1H8s4CmUAf_A'
const MapView = ( props)=>{

      const mapRef=useRef()

      useEffect( ()=>{
            const mapInstance = new mapboxgl.Map({
                  container: mapRef.current,
                  style:'mapbox://styles/mapbox/streets-v9',
                  center: [37.1747759,38.7708186],
                  zoom:2
            })

      },[])


      return(

            <div ref={mapRef} style={{height:'400px', width:'600px'}}>
                 
            </div>
      )


}
export default MapView