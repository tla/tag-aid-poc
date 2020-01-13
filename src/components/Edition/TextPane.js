import React, {useState, useEffect} from "react";
import { string, func, array } from "prop-types";
import Parser , {domToReact} from 'html-react-parser';
import * as DataApi from '../../utils/Api';
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';

const TextPane =(props) => {

      const [lemmaText, setLemmaText] = useState();
      const [translation, setTranslation] = useState();
      const {sectionId, onSelectNode, selectedNodes, onDeselectNode} = props;
      const [parsedText, setParsedText] = useState();
      const [lemmaParserOptions, setLemmaParserOptions] = useState();
      const [enTitle, setEnTitle] = useState();
      const [arTitle, setArTitle] = useState();

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
            let parserOptions =  {
                  replace: function({attribs,children}) {
      
                        if( attribs && attribs.id  ){
                                    let attribNodeId = attribs.id.substring(5);
                                 
                                    let selected = false;
                                     if( props.selectedNodes && props.selectedNodes.length > 0)
                                          selected = props.selectedNodes.indexOf( attribNodeId ) === -1? false:true;
      
                                    if(selected)
                                                return <span style={{backgroundColor:'yellow'}} 
                                                      onClick={()=>{handleUnhighlight(attribs.id)}} 
                                                      >{domToReact(children,lemmaParserOptions)}</span>
                                          else {
                                                return <span onClick={()=>{handleHighlight(attribs.id)}}
                                                // onMouseOver={()=>{handleHighlight(attribs.id)}}
                                                >{domToReact(children,lemmaParserOptions)}</span>
                                    }
                        }
                  }
            }

            setLemmaParserOptions(parserOptions)

      },[props.selectedNodes])

      useEffect(()=>{
            if(!lemmaText)
                  return;
           let parsed =  Parser(lemmaText,lemmaParserOptions);
            setParsedText(parsed);
      },[ props.selectedNodes, lemmaText,lemmaParserOptions])

      useEffect(()=>{
            DataApi.getSection(sectionId, (translation,lemmaText)=>{
                  setLemmaText(lemmaText);
                  setTranslation(translation);
                 // setReadings(readings);
                  let parsed =  Parser(lemmaText,lemmaParserOptions);
                  setParsedText(parsed);
            })
      },[props.sectionId,lemmaParserOptions])

  
      return (
            <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                        <Typography variant="h5" style={{textAlign:'center', marginBottom:'6px'}}>
                              {arTitle ? arTitle.split("(")[0]:''}
                        </Typography>
                        <Typography variant="body2" style={{textAlign:'center'}}>
                              {arTitle? `(${arTitle.split("(")[1]}`:''}
                        </Typography>
                       <div style={{wordWrap:'break-word', marginTop:'16px'}}>
                      
                             <Typography>
                             { parsedText }
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
                        <Typography style={{ marginTop:'16px'}}>
                              { translation ? Parser(translation): ''}
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
