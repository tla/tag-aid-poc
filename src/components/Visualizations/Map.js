import React, { useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import * as DataApi from '../../utils/Api';
mapboxgl.accessToken='pk.eyJ1IjoiYWNhcHNpcyIsImEiOiJjazdhb3AydDkwM2c0M21tZ2NyZmVoMzh4In0.GIgGl88fQo1H8s4CmUAf_A'


const MapView = ( props)=>{

      const mapRef=useRef()
      const { geoData } = props;
     

     

      useEffect( ()=>{
            const mapInstance = new mapboxgl.Map({
                  container: mapRef.current,
                  style:'mapbox://styles/mapbox/streets-v9',
                  center: [37.1747759,38.7708186],
                  zoom:4
            });

            mapInstance.on('load', ()=>{
                  const pointData = parsePoints();
                  mapInstance.addSource('cities',
                        {
                              'type':'geojson',
                              'data' : pointData
                        });
                  mapInstance.addLayer(
                        {
                              'id':'cities',
                              'type':'symbol',
                              'source':'cities',
                              'layout': {
                                    'icon-image': '{icon}-15',
                                    'icon-allow-overlap': true
                                    }
                        }
                  )
            })// end on load handler

      },[])


      return(

            <div ref={mapRef} style={{height:'600px', width:'1000px'}}>
                 
            </div>
      )

     

      function parsePoints(){
           let pointData = {
                 'type':'FeatureCollection',
                
           }
           const pointArray=[]
           geoData.forEach( f =>{
                  const g = f.geometry[0];
                 
                  if(g && g.geometry && g.geometry.type === "Point"){
                        let headache = 10;
                        let pointFeature = {
                              'type':'Feature',
                              'geometry':g.geometry,
                              'properties':{
                                    'title':f.title,
                                    'icon':'music'
                                    }
                        }
                        pointArray.push(pointFeature)
                  }// end if feature is a point
           })// end for each in geo Data
           pointData.features = pointArray;
           return pointData;

      }






}
export default MapView