import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const Header = ( props)=>{

      const [tabIndex, setTabIndex]=useState(0)

return (
  <div id="header">
      
        <AppBar position="static" style={{backgroundColor:'#C3BDC1' }}>
             <div style={{display:'flex', justifyContent:'space-between',padding:'5px'}}>
                  <Typography variant="h5" style={{marginTop:'5px'}}>
                        {'The Chronical of Mathew of Edessa'}
                  </Typography>
                  <div >
                        <Tabs value={tabIndex} style={{float:'right'}} onChange={handleTabChange} >
                              <Tab label="Home"href="/"  />
                              <Tab label="About" href="#/About" />
                              <Tab label="Methods"  href="#/Methods"/>
                              <Tab label="Manuscripts" href="#/Manuscripts" />
                              <Tab label="Edition" href="#/Edition" />
                              <Tab label="Visualizations" href="#/Visualizations" />
                        </Tabs>
                  </div>
            </div>
      </AppBar>
  </div>
)

function handleTabChange(e, value){
      setTabIndex(value)
     
}


}
export default Header