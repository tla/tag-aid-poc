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
import {makeStyles,} from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom' 
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
      
const Navigation= ( props)=>{

      const {onSearch} = props;
      const classes = useStyles();
      const [tabIndex, setTabIndex]=useState(0)
      const [isExpanded, setIsExpanded]= useState(false);
      const [searchQuery, setSearchQuery] = useState('');

      useEffect(()=>{
            let pageName = window.location.hash.split("/")[1]
            setTabIndex(`#/${pageName}`)
      },[])
    

      return (
          
      <Grid container spacing={0} style={{maxHeight:'112px', width:'100%'}}>
                  
                   <Hidden mdUp>
                         <Grid item>
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
                              </Grid>
                  </Hidden>

                  
                  <Hidden smDown>
                                    <AppBar  style={{backgroundColor:'#f8f9fa', }} position="static">
                                                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                                                      <Tabs value={tabIndex} style={{ color:'black'}} onChange={handleTabChange} >
                                                            <Tab  label="Home" href="/" value="#/" />
                                                            <Tab label="About" href="#/About"  value="#/About"  />
                                                            <Tab label="Methods"  href="#/Methods" value="#/Methods" />
                                                            <Tab label="Manuscripts" href="#/Manuscripts" value="#/Manuscripts" />
                                                            <Tab label="Search" href="#/Search" value="#/Search" />
                                                            <Tab label="Edition" href="#/Edition"    value="#/Edition"   />
                                                            <Tab label="Visualizations" href="#/Map" value="#/Map" />
                                                      </Tabs>
                                               
                                                      <div style={{ margin:'4px 8px'}}>
                                                            <SearchInput  
                                                                  onPressEnter={handlePressEnter}
                                                                  onChange={handleChange} 
                                                                  searchQuery={searchQuery}
                                                            />
                                                      </div>
                                               
                                         </div>
                                    </AppBar> 
                             
                  </Hidden>  
         
            
      </Grid>
      
      )

      function handleChange(e){
            setSearchQuery(e.target.value);
      }

      function handlePressEnter(e, value){
           onSearch(searchQuery)
           setSearchQuery('');
           props.history.push('/Search');
      }

      function handleTabChange(e, value){
            setTabIndex(value)
      }

      

      

}
export default withRouter(Navigation)