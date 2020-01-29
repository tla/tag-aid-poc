import React, {useEffect} from 'react';
import AboutPage from './About';
import MethodsPage from './Methods';
import ManuscriptPage from './Manuscript';
import Edition from './Edition/index';
import HomePage from './HomePage';
import { Route, Switch } from 'react-router-dom';
import useWindowSize from './../utils/Viewport';
import { Grid } from '@material-ui/core';
import ChronicleTheme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';




const Layout = ( props)=>{
      const viewport = useWindowSize();
      const {sections, witnesses} = props;

      useEffect(()=>{
            console.log('no witnesses : ', witnesses.length)
      },[witnesses])

      return (
           
            <ThemeProvider  theme={ChronicleTheme}>

                 
                        <Switch>
                              <Route path="/Edition/:sectionID" exact>
                                    <Edition  sections={sections}  viewport={viewport} witnesses = { witnesses} />
                              </Route>
                              <Route path="/Edition" >
                                    <Edition   sections={sections}  viewport={viewport}  witnesses = { witnesses} />
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
                              <Route path="/Home" exact>
                                    <HomePage sections={sections} />
                              </Route> 
                            
                               <Route path="/" exact>
                                    <HomePage sections={sections} />
                              </Route> 
                        </Switch>
                 
     
            </ThemeProvider>
      )

}
export default Layout