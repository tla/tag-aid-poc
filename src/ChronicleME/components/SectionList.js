import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const SectionList = ( props ) =>{

      const {list, onSelect, sectionId } = props

      return (
            
            <Paper elevation={2} style={{padding:'12px',overflowY:'scroll'}}>
			<Typography variant="h5">
                        {'Index'}
                  </Typography>
			<List>
                        {
                              list.map( s => {
                                    return(
                                    <ListItem key={s.id} value={s.id} selected={s.id === sectionId}
                                         onClick={()=>{onSelect(s) }} >
                                         {`Section Id:${s.id}`}
                                         <br/>
                                         <div style={{paddingLeft:'16px'}}><h4> {s.displayName.substring(0,13)}</h4></div>
                                    </ListItem>
                                    )
                              })
                        }
			</List>
		</Paper>
            
      )
}
export default SectionList