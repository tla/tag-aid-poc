import React, { useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import * as DataApi from '../../utils/Api';
import Header from './../Header'

mapboxgl.accessToken='pk.eyJ1IjoiYWNhcHNpcyIsImEiOiJjazdhb3AydDkwM2c0M21tZ2NyZmVoMzh4In0.GIgGl88fQo1H8s4CmUAf_A'


const MapView = ( props)=>{

      const mapRef=useRef()
      const { geoData } = props;
     

     

      useEffect( ()=>{
            const mapInstance = new mapboxgl.Map({
                  container: mapRef.current,
                  style:'mapbox://styles/mapbox/light-v10',
                  center: [37.1747759,38.7708186],
                  zoom:5
            });

            mapInstance.on('load', ()=>{
                  const pointData = parsePoints();
                  mapInstance.addSource('cities',
                        {
                              'type':'geojson',
                              'data' : pointData
                        });
               let cityLayer =    mapInstance.addLayer(
                        {
                              'id':'cities',
                              'type':'symbol',
                              'source':'cities',
                           //   'layout':{'visibility':'visible'}
                           'layout': {
                              'icon-image': '{icon}-15',
                              'icon-allow-overlap': true,
                              'text-field': ['get', 'title'],
                              'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                              'text-offset': [0, 0.6],
                              'text-anchor': 'top'
                              }
                        }
                  );

                  mapInstance.on('click', 'cities', function(e) {
                        var coordinates = e.features[0].geometry.coordinates.slice();
                        var description = e.features[0].properties.description;
                         
                        // Ensure that if the map is zoomed out such that multiple
                        // copies of the feature are visible, the popup appears
                        // over the copy being pointed to.
                        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                        }
                         
                        new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(mapInstance);
                        });
                         
                        // Change the cursor to a pointer when the mouse is over the places layer.
                        mapInstance.on('mouseenter', 'cities', function() {
                        mapInstance.getCanvas().style.cursor = 'pointer';
                        });
                         
                        // Change it back to a pointer when it leaves.
                        mapInstance.on('mouseleave', 'cities', function() {
                        mapInstance.getCanvas().style.cursor = '';
                        });

            
            })// end on load handler

      },[])


      return(
      <React.Fragment>
                  <Header  />
                  <div ref={mapRef} style={{height:'600px', width:'100%'}}>
                  
                  </div>
      </React.Fragment>
            
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
                                    'icon':'town-hall',
                                    'description':`<p>
                                          <h6>${f.title}</h5>
                                          <b>description: </b>${g.properties.description}<br/>
                                          <b>provenance: </b>${f.provenance}<br/>
                                          <b>link: </b><a href='${g.properties.link}'>Pleiades</a><br/>
                                          <b>snippet: </b>${g.properties.snippet}
                                          </p>`
                                  
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