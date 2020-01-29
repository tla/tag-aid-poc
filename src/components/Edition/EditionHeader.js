import React,{useState, useEffect,Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';



const EditionHeader = ( props)=>{

const [tabIndex, setTabIndex]=useState(0)
const [isExpanded, setIsExpanded]= useState(false);

useEffect(()=>{
      let pageName = window.location.hash.split("/")[1]
      setTabIndex(`#/${pageName}`)
})
    

return (
      <Grid container spacing={0}>
            <div  item xs={12} className="header" >

            <div item xs={12}>
                        <Typography variant="h5" style={{padding:'12px 42px'}}>
                              The Chronicle of Matthew of Edessa
                        </Typography>
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
                                                      <a style={{textDecoration:'none'}} href={`#/${text}`}>
                                                            <ListItem button key={text}>
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
                                                      <div style={{display:'flex', justifyContent:'flex-end',}}>
                                                            <Tabs value={tabIndex} style={{ color:'black'}} onChange={handleTabChange} >
                                                                  <Tab  label="Home" href="/" value="#/" />
                                                                  <Tab label="About" href="#/About"  value="#/About"  />
                                                                  <Tab label="Methods"  href="#/Methods" value="#/Methods" />
                                                                  <Tab label="Manuscripts" href="#/Manuscripts" value="#/Manuscripts" />
                                                                  <Tab label="Edition" href="#/Edition/1019321"    value="#/Edition"   />
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
export default EditionHeader