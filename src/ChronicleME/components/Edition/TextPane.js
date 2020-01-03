import React, {useState, useEffect} from "react";
import { string, func, array } from "prop-types";
import Parser , {domToReact} from 'html-react-parser';
import * as DataApi from '../../utils/Api'


const TextPane =(props) => {

      const [lemmaText, setLemmaText] = useState();
      const [translation, setTranslation] = useState();
      const [readings,setReadings]=useState('');
      const {sectionId, selectedNodes, onSelectNode, onDeselectNode} = props;
      const [parsedText, setParsedText] = useState();
      const lemmaParserOptions =  {
            replace: function({attribs,children}) {

                  if( attribs && attribs.id  ){
                              let attribNodeId = attribs.id.substring(5);
                           
                              let selected = false;
                               if( selectedNodes && selectedNodes.length > 0)
                                    selected = selectedNodes.indexOf( attribNodeId ) === -1? false:true;

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
      useEffect(()=>{
            if(!lemmaText)
            return;
           let parsed =  Parser(lemmaText,lemmaParserOptions);
            setParsedText(parsed);
      },[props.selectedNodes, lemmaText,lemmaParserOptions])

    

      useEffect(()=>{
            DataApi.getSection(sectionId, (readings, translation,lemmaText)=>{
                  setLemmaText(lemmaText);
                  setTranslation(translation);
                  setReadings(readings);
                 let parsed =  Parser(lemmaText,lemmaParserOptions);
                 setParsedText(parsed);
            })
      },[props.sectionId])

  
      return (
            <div className="text-pane">
                  <div className="reading">
                        { parsedText }
                  </div>
                  <div className="translation">
                        { translation ? Parser(translation): ''}
                  </div>
            </div>
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
