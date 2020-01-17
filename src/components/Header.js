import React,{useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Header = ( props)=>{

const [tabIndex, setTabIndex]=useState("#/")

useEffect(()=>{
      let pageName = window.location.hash.split("/")[1]
      setTabIndex(`#/${pageName}`)
})
    

return (
      <div id="headerPanel" role="banner" >
           <div style={{display:'flex', justifyContent:'center', marginBottom:'4px'}}>
            <img id="banner-logo" src="images/edessa_logo.png" width="60%" alt="The Chronicle of Matthew of Edessa"/>
            </div> 
            
            <AppBar position="static" style={{backgroundColor:'#f8f9fa' }}>
                  <div style={{display:'flex', justifyContent:'flex-end',padding:'5px',fontSize:'16px'}}>
                              <Tabs value={tabIndex} style={{float:'right'}} onChange={handleTabChange} 
                              style={{color:'black'}}>
                                    <Tab label="Home" href="/" value="#/" />
                                    <Tab label="About" href="#/About"  value="#/About"  />
                                    <Tab label="Methods"  href="#/Methods" value="#/Methods" />
                                    <Tab label="Manuscripts" href="#/Manuscripts" value="#/Manuscripts" />
                                    <Tab label="Edition" href="#/Edition/1019321"    value="#/Edition"   />
                                    <Tab label="Visualizations" href="#/Visualizations" value="#/Visualizations" />
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