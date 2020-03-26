import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link} from 'react-router-dom'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SectionList = ( props ) =>{

      const {list, sectionId, height, isExpanded } = props
   
      return (
            
            <Paper elevation={2} style={{marginLeft:'16px' , height:height, overflowY:'auto'}}>

                              <Typography variant="h6" style={{margin:'16px 24px 0px',}}>
                                    {'Index'}
                              </Typography>
                     
                              <div style={{display:'flex', flexDirection:'column',alignItems:'center', }}>
                                    <List style={{width:'160px'}}>
                                          {
                                          list ?   list.map( s => {
                                                      return(
                                                      <ListItem key={s.sectionId} value={s.sectionId} selected={s.sectionId === sectionId} >
                                                                  <div style={{display:'flex', flexDirection:'column'}}>
                                                                        <Link   to={`${s.sectionId}`} >
                                                                              <Typography variant="h6">
                                                                                    {s.englishTitle.substring(0,12)}
                                                                              </Typography>
                                                                        </Link>
                                                                  
                                                                  </div>
                                                      
                                                      </ListItem>
                                                      )
                                                }) : ''
                                          }
                                    </List>
                              </div>
                  
		 </Paper>
            
      )
}
export default SectionList