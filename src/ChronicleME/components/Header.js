import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const Header = ( props)=>{

      const [tabIndex, setTabIndex]=useState(0)
     const tabStyle={width:'40px', fontSize:'16px'}

return (
    

  
      <div id="headerPanel" role="banner" >
           <div style={{display:'flex', justifyContent:'center', marginBottom:'48px'}}>
            <img id="banner-logo" src="images/edessa_logo.png" width="80%" alt="The Chronicle of Matthew of Edessa"/>
            </div> 
        <AppBar position="static" style={{backgroundColor:'#f8f9fa' }}>
             <div style={{display:'flex', justifyContent:'flex-end',padding:'5px',fontSize:'16px'}}>
                        <Tabs value={tabIndex} style={{float:'right'}} onChange={handleTabChange} 
                        style={{color:'black'}}>
                              <Tab label="Home"href="/"  />
                              <Tab label="About" href="#/About"  />
                              <Tab label="Methods"  href="#/Methods"/>
                              <Tab label="Manuscripts" href="#/Manuscripts"  />
                              <Tab label="Edition" href="#/Edition"  />
                              <Tab label="Visualizations" href="#/Visualizations"  />
                        </Tabs>
            </div>
      </AppBar> 
      </div>
)

function handleTabChange(e, value){
      setTabIndex(value)
     
}


}
export default Header