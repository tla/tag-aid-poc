import React, {useState, useEffect} from "react";
import Parser , {domToReact} from 'html-react-parser';
import * as DataApi from '../../utils/Api';
import Typography from '@material-ui/core/Typography'


const TextPane =(props) => {

      const {sectionId, reading, onSelectNode, selectedNode, selectedSentence, onSelectSentence,
      persons} = props;
      const [rawText, setRawText] = useState();
      const [enTitle, setEnTitle] = useState();
      const [arTitle, setArTitle] = useState();
      const [textHTML, setTextHTML] = useState('');
      
      const parserOptions = {
            replace: function({attribs,children}) {
                  if( attribs && attribs.id ){
                              let nodeId = reading ==="Translation" ? attribs.id.split('-')[1] : attribs.id;
                              let rank = reading ==="Translation" ? attribs.id.split('-')[0] : attribs.key;
// this can be further refactored - it was in transition... 
                              if( reading === "Translation"){
                                    let selected= props.selectedSentence ? props.selectedSentence.startId === nodeId  : false;
                                    if(selected) {
                                                return <span style={{backgroundColor:'yellow'}} >
                                                      {domToReact(children,parserOptions)}</span>
                                    } else {
                                                return <span onClick={()=>{console.log("selected"); handleHighlight(attribs.id, attribs.key)}}
                                                >{domToReact(children,parserOptions)}</span>
                                    }
                              } else {

                                    let selected= props.selectedNode ? props.selectedNode === nodeId : false;
                                    let inSelectedSentence = props.selectedSentence? (rank >= selectedSentence.startRank && rank <= selectedSentence.endRank ) : false;
                                    let textStyle={
                                          color: selected? 'red':'black',
                                          backgroundColor: inSelectedSentence? 'yellow':'transparent'
                                    }
                                   
                                          return <span style={textStyle} onClick={()=>{console.log("selected"); handleSelected(nodeId)}} >
                                                {domToReact(children,parserOptions)}</span>

                              }

                  }
            }
      }

      //get the title based on sectionId
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

      //
      useEffect(()=>{
            setRawText(null);
            DataApi.getReading(sectionId,props.reading, (html)=>{
                  setRawText(html);
                  let parsed = Parser(html, parserOptions)
                  setTextHTML(parsed)
            });
      },[props.sectionId, props.reading])


      useEffect(()=>{
            setTextHTML(null);
          if(! rawText )
          return;
            let parsed =  Parser(rawText, parserOptions);
            setTextHTML(parsed);
      })
//[ selectedNode, selectedSentence, persons]
      return (
           <div>
                        <Typography variant="h5" style={{textAlign:'center', marginBottom:'6px'}}>
                              { enTitle? reading === "Translation" ? enTitle.split("(")[0]:arTitle.split("(")[0] : ''}
                        </Typography>
                        <Typography variant="body2" style={{textAlign:'center'}}>
                              {enTitle? reading ==="Translation" ? `(${enTitle.split("(")[1]}` : `(${arTitle.split("(")[1]}`:''}
                        </Typography>
                    
                      <div style={{whiteSpace:'pre-line',marginTop:'16px'}}>
                              <Typography variant="h6" >
                                    { textHTML }
                             </Typography>

                      </div>
                           
           </div>
          )

          // contains rank and id
      function handleHighlight( startNodeId, endNodeId){
            onSelectSentence(startNodeId, endNodeId)
      }

      function handleSelected( textNodeId){
            onSelectNode(textNodeId)
      }

      
}

export default TextPane;
