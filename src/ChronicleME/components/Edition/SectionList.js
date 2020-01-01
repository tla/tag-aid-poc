import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const SectionList = ( props ) =>{

      const {list, onSelect, sectionId , height} = props

      return (
            
            <Paper elevation={2} style={{padding:'12px',overflowY:'auto',height:height}}>
			<Typography variant="h5">
                        {'Index'}
                  </Typography>
			<List>
                        {
                           list ?   list.map( s => {
                                    return(
                                    <ListItem key={s.id} value={s.id} selected={s.id === sectionId}
                                         onClick={()=>{onSelect(s) }} >
                                         
                                         <div style={{display:'flex', flexDirection:'column'}}>
                                          <Typography variant="body1">
                                                      {s.displayName.substring(0,13)}
                                                </Typography>
                                                <Typography variant="subtitle2">
                                                {`Section Id:${s.id}`}
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