import React, {Fragment} from 'react'
import AboutPage from './About'
import MethodsPage from './Methods'
import Edition from './Edition/index'
import HomePage from './HomePage'
import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import useWindowSize from './../utils/Viewport';
import { Grid } from '@material-ui/core';
import ChronicleTheme from './Theme'
import { ThemeProvider } from '@material-ui/core/styles';




const Layout = ( props)=>{
      const viewport = useWindowSize();
      const {sections, witnesses} = props;

      return (
           
            <ThemeProvider  theme={ChronicleTheme}>
                 <Fragment>
                     <Header />
                  
                  <Grid container spacing={1} style={{margin:'0px'}}>
                  <Grid id="pages" item xs={12}>
                        <Switch>
                              <Route path="/Edition/:sectionID" exact>
                                    <Edition style={{height:`${viewport.height*.80}px`}} sections={sections}  viewport={viewport} witnesses = { witnesses} />
                              </Route>
                              <Route path="/Edition" >
                                    <Edition style={{height:`${viewport.height*.80}px`}}  sections={sections}  viewport={viewport}  witnesses = { witnesses} />
                              </Route>
                              <Route path="/About" >
                                    <AboutPage /> 
                              </Route>
                              <Route path="/Methods" >
                                    <MethodsPage /> 
                              </Route>
                            
                               <Route path="/" exact>
                                    <HomePage sections={sections} />
                              </Route> 
                        </Switch>
                  </Grid>
            </Grid> 
            </Fragment>
       
            </ThemeProvider>
      )

}
export default Layout