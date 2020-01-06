import React, {Fragment} from 'react'

import { Grid } from '@material-ui/core';
import Header from './Header'
import Edition from './Edition/index'
import useWindowSize from './../utils/Viewport';
import HomePage from './HomePage'
import { Route, Switch, useParams } from 'react-router-dom'
import ChronicleTheme from './Theme'
import { ThemeProvider } from '@material-ui/core/styles';




const Layout = ( props)=>{
      const viewport = useWindowSize();
      const {sections} = props;

      return (
           
            <ThemeProvider  theme={ChronicleTheme}>
                 <Fragment>
                     <Header />
                  
                  <Grid container spacing={1} style={{margin:'0px'}}>
                  <Grid id="pages" item xs={12}>
                        <Switch>
                              <Route path="/Edition/:sectionID" exact>
                                    <Edition style={{height:`${viewport.height*.80}px`}} sections={sections}  viewport={viewport} />
                              </Route>
                              <Route path="/Edition" >
                                    <Edition style={{height:`${viewport.height*.80}px`}}  sections={sections}  viewport={viewport} />
                              </Route>
                            
                               <Route path="/" exact>
                                    <HomePage />
                              </Route> 
                        </Switch>
                  </Grid>
            </Grid> 
            </Fragment>
       
            </ThemeProvider>
      )

}
export default Layout