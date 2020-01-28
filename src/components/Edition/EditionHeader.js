import React,{useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'

const EditionHeader = ( props)=>{

const [tabIndex, setTabIndex]=useState("#/")

useEffect(()=>{
      let pageName = window.location.hash.split("/")[1]
      setTabIndex(`#/${pageName}`)
})
    

return (
      <div  className="header">
                  <Typography variant="h5" style={{padding:'12px 42px'}}>
                        The Chronicle of Matthew of Edessa
                  </Typography>
                  <AppBar position="static" style={{backgroundColor:'#f8f9fa' }}>
                     
                                    <Tabs value={tabIndex} style={{ color:'black'}} onChange={handleTabChange} >
                                          <Tab  label="Home" href="/" value="#/" />
                                          <Tab label="About" href="#/About"  value="#/About"  />
                                          <Tab label="Methods"  href="#/Methods" value="#/Methods" />
                                          <Tab label="Manuscripts" href="#/Manuscripts" value="#/Manuscripts" />
                                          <Tab label="Edition" href="#/Edition/1019321"    value="#/Edition"   />
                                          <Tab label="Visualizations" href="#/Visualizations" value="#/Visualizations" />
                                    </Tabs>
                       
                  </AppBar> 
      </div>
)

function handleTabChange(e, value){
      setTabIndex(value)
     
}


}
export default EditionHeader