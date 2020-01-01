import React, {useEffect, useState} from 'react'
import { Grid } from '@material-ui/core';
import Header from './Header'
import Edition from './Edition/index'
import useWindowSize from './../utils/Viewport';
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Layout = ( props)=>{
      const viewport = useWindowSize();
      const {sections, history} = props;


console.log('window height is ',viewport.height)
      return (
           
            <Grid container spacing={1} >
                  <Grid id="header"  item xs={12}>
                        <Header onSelectTab={handleSelectTab} />
                  </Grid>
                  <Grid id="pages" item xs={12}>
                        <Switch>
                              <Route path="/Edition" >
                                    <Edition sections={sections}  height={`${viewport.height * .66}px`} />
                              </Route>
                               <Route path="/" exact>
                                    <HomePage />
                              </Route> 
                        </Switch>
                  </Grid>
            </Grid>
           
       
      )

            function handleSelectTab(){
                  history.push('/Edition')
            }

}
export default Layout