import React,{useState, useEffect, useRef} from 'react';
import { Grid } from '@material-ui/core';
import Navigation from './Navigation'

const Header = ( props)=>{

      const { onSearch } = props;
     
      const [tabIndex, setTabIndex]=useState("#/")
      const [isExpanded, setIsExpanded]= useState(false);
      const visualizationsTab = useRef();
      const [ menuVisible, setMenuVisible] = useState( false)

      useEffect(()=>{
            let pageName = window.location.hash.split("/")[1]
            setTabIndex(`#/${pageName}`)
      },[])

    
      return (
            <Grid container spacing={0}>
                

                        <Grid item xs={12}>
                              <div id="headerPanel" role="banner" style={{display:'flex', justifyContent:'center', marginBottom:'4px'}}>
                                    <img id="banner-logo" src="images/edessa_logo.png" width="60%" alt="The Chronicle of Matthew of Edessa"/>
                              </div>
                        </Grid>
                        <Grid item xs={12}>
                              <Navigation  onSearch={onSearch} />
                        </Grid>
                      

            </Grid>
      )

      function handleTabChange(e, value){
            setTabIndex(value)
      
      }

      function handleMouseOverMenu(){
            setMenuVisible(true)
      }


}
export default Header