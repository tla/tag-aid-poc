import React, { useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import * as DataApi from '../../utils/Api';
import EditionHeader from './../Edition/EditionHeader'

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
                  let pointLayer =    mapInstance.addLayer(
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

                  const polygons = parsePolygons();
                  polygons.forEach( p =>{
                  
                  try{
                        mapInstance.addSource(p.title,
                              {
                                    'type': 'geojson',
                                    'data':p.data
                              }
                        );
                        mapInstance.addLayer({
                              'id':p.title,
                              'type':'fill',
                              'source':p.title,
                              'paint':{
                                    'fill-color':'#077',
                                    'fill-opacity': 0.2
                              },
                        })

                        let el = window.document.createElement('div');
                        el.className = 'marker';
                        el.innerText=p.title;
                        new mapboxgl.Marker(el)
                        .setLngLat(p.representativePoint)
                        .addTo(mapInstance );
                      
                  }catch(error){
                        console.log(error)
                  }

                  })// end for each poly

            
            })// end on load handler

      },[])


      return(
      <React.Fragment>
                  <EditionHeader  />
                  <div ref={mapRef} style={{height:'700px', width:'100%'}}>
                  
                  </div>
      </React.Fragment>
            
      )

     

      function parsePoints(){
           let pointData = {
                 'type':'FeatureCollection',
           }
           const pointArray=[];
         
           geoData.forEach( f =>{
                  const g = f.geometry[0];
                 
                  if(g && g.geometry && g.geometry.type === "Point"){
                       
                        let feature = f;
                        let geometry = g;
                        const linkText = g.properties.link.indexOf('pleiades') > -1? "Pleiades": g.properties.link.indexOf("geonames" )>-1?"Geonames":"Other"

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
                                          <b>link: </b><a href='${g.properties.link}'>${linkText}</a><br/>
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

      function parsePolygons(){
            const polygonArray=[];
            geoData.forEach( f =>{
                  const g = f.geometry[0];
                 
                  if(g && g.geometry && g.geometry.type === "Polygon"){
                        let polygonFeature ={
                        'title':f.title,
                        'representativePoint':f.representativePoint,
                        'data': {
                              'type':'Feature',
                              'geometry':g.geometry,
                              }
                        }
                        polygonArray.push(polygonFeature)
                  }// end if feature is a polygon
           })// end for each in geo Data

           return polygonArray;

      }






}
export default MapView