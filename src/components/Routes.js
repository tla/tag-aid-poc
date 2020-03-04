import React,{useState, useEffect} from 'react';
import AboutPage from './About';
import MethodsPage from './Methods';
import ManuscriptPage from './Manuscript';
import Edition from './Edition/index';
import HomePage from './HomePage';
import EditionLanding from './EditionLanding';
import ManuscriptView from './Manuscript/ManuscriptView';
import ManuscriptViewClientParse from './Manuscript/ManuscriptViewClientParse'
import { Route, Switch } from 'react-router-dom';
import useWindowSize from '../utils/Viewport';
import ChronicleTheme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import SearchResults from './Edition/SearchResults';
import * as DataApi from './../utils/Api';
import MapView from './Visualizations/Map'


const Routes = ( props)=>{
      const viewport = useWindowSize();
      const {sections, witnesses} = props;
      const [searchTerm, setSearchTerm ] = useState('');
      const [translationDictionary, setTranslationDictionary] = useState([]);
      const [translationIndex, setTranslationIndex] = useState();
      const [armenianDictionary, setArmenianDictionary] = useState([])
      const [armenianIndex, setArmenianIndex] = useState();
      const [mapFeatures,setMapFeatures] = useState([])

      useEffect(()=>{
            if( ! translationIndex )
            DataApi.getTranslationIndex((data)=>{
                  setTranslationIndex(data )
            })
      },[])

      useEffect(()=>{
            if( translationDictionary.length===0 )
                  DataApi.getLunrData((data)=>{
                        setTranslationDictionary(data )
            })
      },[])
      useEffect(()=>{
            if( ! armenianIndex )
                  DataApi.getArmenianIndex((data)=>{
                        setArmenianIndex(data )
            })
      },[])
      useEffect(()=>{
            if( armenianDictionary.length===0 )
            DataApi.getLunrArmenianData((data)=>{
                  setArmenianDictionary(data )
            })
      },[]);

      useEffect(()=>{
            if(mapFeatures.length===0){
                  DataApi.getLocationData((data)=>{
                        console.log(`got data ${data.length}`)
                        setMapFeatures(data)
                  })
            }
      })



      return (
            <ThemeProvider  theme={ChronicleTheme}>
                        <Switch>
                              <Route path="/Edition/:sectionID" exact>
                                    <Edition onSearch={setSearchTerm} sections={sections}  viewport={viewport} witnesses = { witnesses} />
                              </Route>
                              <Route path="/Edition">
                                    <EditionLanding   sections={sections}   />
                                    {/* <CustomizedInputs     /> */}
                              </Route>
                              <Route path="/About" >
                                    <AboutPage /> 
                              </Route>
                              <Route path="/Methods" >
                                    <MethodsPage /> 
                              </Route>
                              <Route path="/Manuscripts" >
                                    <ManuscriptPage /> 
                              </Route>
                                <Route path="/ManuscriptView/:manuscriptId" exact>
                                    <ManuscriptViewClientParse  viewport={viewport}  /> 
                              </Route>   
                             {/* <Route path="/ManuscriptView" >
                                    <ManuscriptView  viewport={viewport}  /> 
                              </Route>   */}
                              <Route path="/Home" exact>
                                    <HomePage sections={sections} />
                              </Route> 
                              <Route path="/Search" exact>
                                    <SearchResults 
                                          translationDictionary={translationDictionary} translationIndex={translationIndex}
                                          armenianDictionary = {armenianDictionary} armenianIndex={armenianIndex}
                                          onSearch={setSearchTerm} searchTerm = {searchTerm} />
                              </Route>
                              <Route path="/Map" exact>
                                    <MapView geoData= {mapFeatures}  />
                              </Route>
                               <Route path="/" exact>
                                    <HomePage sections={sections} />
                              </Route> 
                        </Switch>
            </ThemeProvider>
      )

}
export default Routes