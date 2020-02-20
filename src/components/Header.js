import React,{useState, useEffect,Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Header = ( props)=>{
     
      const [tabIndex, setTabIndex]=useState("#/")
      const [isExpanded, setIsExpanded]= useState(false)

      useEffect(()=>{
            let pageName = window.location.hash.split("/")[1]
            setTabIndex(`#/${pageName}`)
      },[])

    
      return (
            <Grid container spacing={0}>
                  <div id="headerPanel" role="banner" >


                        <div style={{display:'flex', justifyContent:'center', marginBottom:'4px'}}>
                              <img id="banner-logo" src="images/edessa_logo.png" width="60%" alt="The Chronicle of Matthew of Edessa"/>
                        </div>

                        <Hidden mdUp>
                              <Toolbar variant="dense" style={{backgroundColor:'#f8f9fa' }}>
                                    <IconButton edge="start" onClick={()=>{setIsExpanded(true)}}>
                                          <MenuIcon />
                                    </IconButton>
                                    <Drawer anchor="top" open={isExpanded} onClose={()=>{setIsExpanded(false)}}>
                                          <List>
                                          {['Home', 'About', 'Methods','Manuscripts','Edition','Visualizations']
                                          .map((text, index) => (
                                                <Fragment>
                                                      <a key={text} style={{textDecoration:'none'}} href={`#/${text}`}>
                                                            <ListItem button >
                                                                  <ListItemText primary={text}/>
                                                            </ListItem>
                                                            <Divider />
                                                      </a>
                                                 </Fragment>
                                                ))}
                                          </List>
                                    </Drawer>
                              </Toolbar>
                        </Hidden>

                        <Hidden smDown>
                              <div item md={12 }>
                                    <AppBar position="static" style={{backgroundColor:'#f8f9fa' }}>
                                         
                                          <div style={{display:'flex', justifyContent:'flex-end'}}>
                                                      <Tabs value={tabIndex} style={{float:'right', color:'black'}} onChange={handleTabChange} >
                                                            <Tab label="Home" href="/" value="#/" />
                                                            <Tab label="About" href="#/About"  value="#/About"  />
                                                            <Tab label="Methods"  href="#/Methods" value="#/Methods" />
                                                            <Tab label="Manuscripts" href="#/Manuscripts" value="#/Manuscripts" />
                                                            <Tab label="Edition" href="#/Edition"    value="#/Edition"   />
                                                            <Tab label="Visualizations" href="#/Visualizations" value="#/Visualizations" />
                                                      </Tabs>
                                          </div>
                                    </AppBar> 
                              </div>
                        </Hidden>



                  </div>
            </Grid>
      )

      function handleTabChange(e, value){
            setTabIndex(value)
      
      }


}
export default Header