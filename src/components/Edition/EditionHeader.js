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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChronicleTheme from './../Theme';
import {
      fade,
      ThemeProvider,
      withStyles,
      makeStyles,
      createMuiTheme,
    } from '@material-ui/core/styles';
    import TextField from '@material-ui/core/TextField';

    import SearchInput from './SearchInupt'

const useStyles = makeStyles(theme => ({
      search: {
            float:'right',
            display:'inline',
            height:'40px',
           width:'300px',
            border:'2px solid red',
            marginRight:'16px'
      }
       
         
}));
      
const EditionHeader = ( props)=>{
      const classes = useStyles();
      const [tabIndex, setTabIndex]=useState(0)
      const [isExpanded, setIsExpanded]= useState(false);
      const [searchQuery, setSearchQuery] = useState('');

      useEffect(()=>{
            let pageName = window.location.hash.split("/")[1]
            setTabIndex(`#/${pageName}`)
      },[])
    

      return (
            
      <Grid container spacing={0} style={{maxHeight:'112px'}}>
                  <div  item xs={12} className="header" >
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
                                                <Fragment key={text}>
                                                      <a  style={{textDecoration:'none'}} href={`#/${text}`}>
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
                                         
                                    <AppBar  style={{backgroundColor:'#f8f9fa' }}>
                                           <div   className="header" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                                
                                                <Typography variant="h5" style={{padding:'12px 42px',color:'black'}}>
                                                      The Chronicle of Matthew of Edessa
                                                </Typography>
                                                
                                                <SearchInput  
                                                       onPressEnter={handlePressEnter}
                                                       onChange={handleChange} 
                                                       searchQuery={searchQuery}
                                                      />
                                          </div>

                                          <div style={{display:'flex', justifyContent:'flex-end',}}>
                                                <Tabs value={tabIndex} style={{ color:'black'}} onChange={handleTabChange} >
                                                      <Tab  label="Home" href="/" value="#/" />
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
         
            
      </Grid>
      )

      function handleChange(e){
            setSearchQuery(e.target.value);

      }

      function handlePressEnter(e, value){
            alert(`seraching for ${searchQuery}`)
     
      }

      function handleTabChange(e, value){
            setTabIndex(value)
      }

      

      

}
export default EditionHeader