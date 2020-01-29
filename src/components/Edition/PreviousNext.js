import React, { useEffect, useState} from 'react'
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const PreviousNext = ( props )=>{

      const {onPrevious, onNext, sections, sectionId} = props

      const [title, setTitle] = useState();

      useEffect( ()=>{
            if( !sections || !sectionId)
                  return
            let yearName = sections.find( s=> { return s.sectionId.toString() === sectionId.toString()}).englishTitle;
           yearName =  yearName.split("(")[0];
           setTitle(yearName)

      }, [sections,sectionId])


      return (

            <div style={{display:'flex', justifyContent:'center',padding:'8px'}}>
                  <IconButton onClick={onPrevious} style={{margin:'2px 10px'}}>
                        <PlayCircleOutlineOutlinedIcon style={{width:'50px',height:'50px' ,transform:'rotate(180deg)'}}/>
                  </IconButton>
                  <Typography variant = "h5" style={{marginTop:'20px'}}>
                        {title}
                  </Typography>
                  <IconButton  onClick={onNext} style={{margin:'2px 10px'}}>
                        <PlayCircleOutlineOutlinedIcon style={{width:'50px',height:'50px'}} />
                  </IconButton>
            </div>


      )


}

export default PreviousNext