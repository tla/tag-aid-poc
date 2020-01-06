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
                                    <ListItem key={s.id} value={s.id} selected={s.id === sectionId}
                                       >
                                         <Link   to={`${s.id}`} >
                                                <div style={{display:'flex', flexDirection:'column'}}>
                                                            <Typography variant="h6">
                                                                  {s.displayName.substring(0,13)}
                                                            </Typography>
                                                            <Typography variant="subtitle2">
                                                                  {`Section Id:${s.id}`}
                                                            </Typography>
                                                </div>
                                          </Link>
                                    </ListItem>
                                    )
                              }) : ''
                        }
			</List>
		</Paper>
            
      )
}
export default SectionList