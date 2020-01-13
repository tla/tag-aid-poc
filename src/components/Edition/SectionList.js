import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link} from 'react-router-dom'

const SectionList = ( props ) =>{

      const {list, sectionId } = props
      

      return (
            
            <Paper elevation={2} style={{padding:'12px',overflowY:'auto',height:'100%'}}>
			<Typography variant="h5">
                        {'Index'}
                  </Typography>
			<List>
                        {
                           list ?   list.map( s => {
                                    return(
                                    <ListItem key={s.sectionId} value={s.sectionId} selected={s.sectionId === sectionId}
                                       >
                                        
                                                <div style={{display:'flex', flexDirection:'column'}}>
                                                <Link   to={`${s.sectionId}`} >
                                                                  <Typography variant="h6">
                                                                        {s.englishTitle.substring(0,13)}
                                                                  </Typography>
                                                            </Link>
                                                            <Typography variant="subtitle2" style={{marginLeft:'16px'}}>
                                                                  {`Section Id:${s.sectionId}`}
                                                            </Typography>
                                                </div>
                                         
                                    </ListItem>
                                    )
                              }) : ''
                        }
			</List>
		</Paper>
            
      )
}
export default SectionList