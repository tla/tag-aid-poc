import React, {useState, useEffect} from "react";
import { string, func, array } from "prop-types";
import Parser , {domToReact} from 'html-react-parser';
import * as DataApi from '../../utils/Api';
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';

const TextPane =(props) => {

      const {sectionId, leftText, rightText, onSelectNode, selectedNodes, onDeselectNode} = props;

      const [lemmaParserOptions, setLemmaParserOptions] = useState();
      const [enTitle, setEnTitle] = useState();
      const [arTitle, setArTitle] = useState();
      const [leftHTML, setLeftHTML] = useState();
      const [rightHTML, setRightHTML] = useState();

      //set the title based on sectionId
      useEffect(()=>{
            if(!props.sections)
            return;
            const selectedSection = props.sections.find( s =>{
                  return s.sectionId === sectionId;
            });
            if(selectedSection){
                  setEnTitle(selectedSection.englishTitle);
                  setArTitle(selectedSection.armenianTitle);
            }
      },[sectionId,props.sections])

      useEffect(()=>{
           DataApi.getReading(sectionId,props.leftText, (html)=>{
                 let parsed = Parser(html, lemmaParserOptions)
                  setLeftHTML(parsed)
           });
      },[props.sectionId, props.leftText])

      useEffect(()=>{
            DataApi.getReading(sectionId,props.rightText, (html)=>{
                  let parsed = Parser(html, lemmaParserOptions)
                   setRightHTML(parsed)
            });

      },[props.sectionId, props.rightText])


      // useEffect(()=>{
      //       DataApi.getSection(sectionId, (translation,lemmaText)=>{
      //             setLemmaText(lemmaText);
      //             setTranslation(translation);
      //            // setReadings(readings);
      //             let parsed =  Parser(lemmaText,lemmaParserOptions);
      //             setParsedText(parsed);
      //       })
      // },[props.sectionId,lemmaParserOptions])


// complicated stuff about selecting nodes - it can be done in 2 and now 3 places and affects all the others      
      // useEffect(()=>{
      //       let parserOptions =  {
      //             replace: function({attribs,children}) {
      
      //                   if( attribs && attribs.id  ){
      //                               let attribNodeId = attribs.id.substring(5);
                                 
      //                               let selected = false;
      //                                if( props.selectedNodes && props.selectedNodes.length > 0)
      //                                     selected = props.selectedNodes.indexOf( attribNodeId ) === -1? false:true;
      
      //                               if(selected)
      //                                           return <span style={{backgroundColor:'yellow'}} 
      //                                                 onClick={()=>{handleUnhighlight(attribs.id)}} 
      //                                                 >{domToReact(children,lemmaParserOptions)}</span>
      //                                     else {
      //                                           return <span onClick={()=>{handleHighlight(attribs.id)}}
      //                                           // onMouseOver={()=>{handleHighlight(attribs.id)}}
      //                                           >{domToReact(children,lemmaParserOptions)}</span>
      //                               }
      //                   }
      //             }
      //       }
      //       setLemmaParserOptions(parserOptions)
      // },[props.selectedNodes])

      // useEffect(()=>{
      //       if(!lemmaText)
      //             return;
      //      let parsed =  Parser(lemmaText,lemmaParserOptions);
      //       setParsedText(parsed);
      // },[ props.selectedNodes, lemmaText,lemmaParserOptions])
      
      
      
      return (
            <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                        <Typography variant="h5" style={{textAlign:'center', marginBottom:'6px'}}>
                              {arTitle ? arTitle.split("(")[0]:''}
                        </Typography>
                        <Typography variant="body2" style={{textAlign:'center'}}>
                              {arTitle? `(${arTitle.split("(")[1]}`:''}
                        </Typography>
                    
                      <div style={{whiteSpace:'pre-line',marginTop:'16px'}}>
                              <Typography variant="h6" >
                                    { leftHTML }
                             </Typography>

                      </div>
                           
                       
                  </Grid>

                  <Grid item xs={12} md={6}>
                  <Typography variant="h5" style={{textAlign:'center',marginBottom:'6px'}}>
                              {enTitle ? enTitle.split("(")[0]:''}
                        </Typography>
                        <Typography variant="body2" style={{textAlign:'center'}}>
                              {enTitle? `(${enTitle.split("(")[1]}`:''}
                        </Typography>
                        <Typography variant="h6" style={{ marginTop:'16px',wordWrap:'break-word'}}>
                              { rightHTML}
                        </Typography>
                        
                  </Grid>
            </Grid>
          )

      function handleHighlight( textNodeId){
            let trimmedId = textNodeId.substring(5)
            console.log(trimmedId)
            onSelectNode(trimmedId)
      }

      function handleUnhighlight(textNodeId){
            let trimmedId = textNodeId.substring(5)
            console.log('deselected', trimmedId)
            onDeselectNode(trimmedId)
      }

}

TextPane.propTypes = {
      sectionId:string,
      selectedNodes:array,
      onSelectNode:func
};

export default TextPane;
