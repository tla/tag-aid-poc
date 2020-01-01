import React, {useState, useEffect} from "react";
import PropTypes, { string, any } from "prop-types";
import Parser , {domToReact} from 'html-react-parser';
import * as DataApi from '../utils/Api'


const TextPane =(props) => {

      const [lemmaText, setLemmaText] = useState();
      const [translation, setTranslation] = useState();
      const [readings,setReadings]=useState('');

      const {sectionId, nodeId, onSelectNode} = props;

      const lemmaParserOptions =  {
            replace: function({attribs,children}) {

                  if( attribs && attribs.id  ){
                       if(attribs.id === `text-${nodeId}`)
                              return <span style={{backgroundColor:'yellow'}}>{domToReact(children,lemmaParserOptions)}</span>
                        else {

                              return <span onClick={()=>{handleTextClick(attribs.id)}}>{domToReact(children,lemmaParserOptions)}</span>
                        }
                  }

                  
            }
      }

      useEffect(()=>{
            DataApi.getSection(sectionId, (readings, translation,lemmaText)=>{
                  setLemmaText(lemmaText);
                  setTranslation(translation);
                  setReadings(readings);
            })
      },[props.sectionId])

  
      return (
            <div className="text-pane">
                  <div className="reading">
                        { lemmaText ? Parser(lemmaText,lemmaParserOptions)  : '' }
                  </div>
                  <div className="translation">
                        { translation ? Parser(translation): ''}
                  </div>
            </div>
          )

      function handleTextClick( textNodeId){
            let trimmedId = textNodeId.substring(5)
            console.log(trimmedId)
            onSelectNode(trimmedId)
      }

}

TextPane.propTypes = {
      sectionId:string,
      nodeId:string,
      onSelectNode:any,
};

export default TextPane;
