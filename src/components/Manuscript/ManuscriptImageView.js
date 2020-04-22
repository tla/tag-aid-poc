import React, { useEffect, useState, useRef} from 'react'
import { Grid } from '@material-ui/core';
import Header from '../Header';
import * as DataApi from '../../utils/Api'
import {withRouter} from 'react-router-dom';

const TextImageDisplay = ( props )=>{

      const myContainer = useRef();
      const [imageUrl, setImageUrl] = useState();

      useEffect(()=>{
            if(props.page.text)
                  myContainer.current.innerHTML = decodeURI(props.page.text)
      },props.page)

      useEffect(()=>{
            if(props.page.imageFile){
                  let path = `images/mss/Ox-e.32/${props.page.imageFile}`
                  setImageUrl(path);
            }

      }, props.page)


      return (
            <div display="flex">
                  <div ref={myContainer}>
                  </div>
                  {
                        
                      imageUrl &&  <img  src={imageUrl} alt="picture of manuscript" style={{height:'400px'}} />
                  }
            </div>
      )
}

const ManuscriptImageView = ( props ) =>{
    
      // let {manuscriptId} = useParams()
      // if(! manuscriptId)
      const     manuscriptId = "Ox-e.32";
      const [pages, setPages] = useState([])

      useEffect(()=>{
            if(!manuscriptId)
            return;
            DataApi.getManuscriptImage(manuscriptId, (data)=>{
                  try{
                        console.log(data)
                        setPages(data)
                  }catch(error){
                        console.log(error)
                  }
            });
      },[]);

      return (

            <Grid container >
                  <Grid item>
                              <Header  />
                  </Grid> 
                  
                  <Grid item xs={12} >
                        <Grid container alignItems="center" direction="column" >
                             {
                                 pages &&  pages.map( page =>{
                                         return (
                                               <TextImageDisplay key = {page.id} page={page} />
                                         )
                                   })
                             }
                   
                      
                        </Grid>
                  </Grid>
            </Grid>
      )


}
export default withRouter(ManuscriptImageView)