import React, { useEffect, useState, useRef} from 'react'
import { Grid } from '@material-ui/core';
import Header from '../Header';
import * as DataApi from '../../utils/Api'
import {withRouter} from 'react-router-dom';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const TextImageDisplay = ( props )=>{

      const myContainer = useRef();
      const [imageUrl, setImageUrl] = useState();

      useEffect(()=>{
            if(props.page && props.page.text)
                  myContainer.current.innerHTML = props.page.text
    
            if(props.page && props.page.pbId.indexOf(".jpg")>-1){
                  let path = `images/mss/Ox-e.32/${props.page.pbId}`
                  setImageUrl(path);
            }
      }, [props.page])


      return (
            <div style={{display:"flex", justifyContent:'space-between',}}>
                  <div ref={myContainer} style={{minWidth:'35%',maxWidth:'35%',textAlign:"left", backgroundColor:'#f0ebf5', wordWrap:'break-word'}} >
                  </div>
                  <div style={{width:'65%',minWidth:'65%',padding:'2px'}}>
                        { imageUrl && 
                       <TransformWrapper
                       defaultScale={1}
                       defaultPositionX={200}
                       defaultPositionY={100}
                       
                       >
{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
<React.Fragment>
            <div className="tools">
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
              <button onClick={resetTransform}>x</button>
            </div>


                       <TransformComponent>
                         <img src={imageUrl} alt="test" style={{width:'100%'}}/>
                       </TransformComponent>

                       </React.Fragment>
                )}

                     </TransformWrapper> 
                              
}
                  </div>
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
                        let firstFew = data.slice(0,42);
                        console.log(firstFew.length)
                        setPages(firstFew)
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
                        <ul style={{listStyle:'none'}}>
                             {
                                 pages &&  pages.map( page =>{
                                       if(page.pdId !== "header")
                                         return (

                                             <li>  <TextImageDisplay key = {page.pbId} page={page} /></li>
                                         )
                                   })
                             }
                   
                      
                        </ul>
                  </Grid>
            </Grid>
      )


}
export default withRouter(ManuscriptImageView)