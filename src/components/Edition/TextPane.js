import React, {useState, useEffect} from "react";
import Parser , {domToReact} from 'html-react-parser';
import * as DataApi from '../../utils/Api';
import Typography from '@material-ui/core/Typography'


const TextPane =(props) => {

      const {sectionId, reading, onSelectNode, onSelectLocation, selectedSentence, onSelectSentence,
      persons, places, dates, graphVisible} = props;
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
                                                return <span style={{backgroundColor:'#F2F19C'}} onClick={()=>{ handleHighlight(attribs.id, attribs.key)}} >
                                                      {domToReact(children,parserOptions)}</span>
                                    } else {
                                                return <span onClick={()=>{ handleHighlight(attribs.id, attribs.key)}}>
                                                      {domToReact(children,parserOptions)}</span>
                                    }
                              } else {
                                    let atRank = props.selectedRank? props.selectedRank === rank : false;
                                    let selected= props.selectedNode ? props.selectedNode.nodeId === nodeId : false;
                                    let person = persons? persons.find( p=>{return p.begin.toString() === nodeId.toString()}): null;
                                    let place = places? places.find( p=>{ return p.begin.toString() === nodeId.toString()}) : null ;
                                    let date = dates ? dates.find( d=> { return d.begin.toString() === nodeId.toString()}) : null;
                                    let inSelectedSentence = props.selectedSentence? (rank >= selectedSentence.startRank && rank <= selectedSentence.endRank ) : false;
                                    let textStyle={
                                          color: 'black',
                                          backgroundColor: selected?'#D4FCA4':person ? '#D1F3FA' : place ? '#F3E3FB' : date ? '#FAD3C3' :inSelectedSentence ? '#F2F19C':atRank?'#00a600':'transparent'
                                    }
                                          return <span style={textStyle} onClick={()=>{handleSelected({nodeId:nodeId, rank:rank, place: place})}} >
                                                {domToReact(children,parserOptions)}</span>

                              }

                  }
            }
      }

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

      return (
           <div style={{marginRight:'12px'}}>
                        <Typography variant="body1" style={{textAlign:'center'}}>
                              {reading}
                        </Typography>
                        <Typography variant="h5" style={{textAlign:'center', marginBottom:'6px'}}>
                              { enTitle? reading === "Translation" ? enTitle.split("(")[0]?enTitle.split("(")[0]: enTitle :arTitle.split("(")[0] ? arTitle.split("(")[0] : arTitle : ''}
                        </Typography>
                        <Typography variant="body2" style={{textAlign:'center'}}>
                              {enTitle? reading ==="Translation" ? enTitle.split("(")[1] ? enTitle.split("(")[1].replace(")","") : enTitle : arTitle.split("(")[1] ? arTitle.split("(")[1].replace(")","") :arTitle:''}
                        </Typography>
                    
                      <div style={{whiteSpace:'pre-line',marginTop:'16px', marginLeft:'32px', }}>
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

      function handleSelected( node){
            if(node.place)
                  onSelectLocation(node);
            else {
                  if(graphVisible)
                        onSelectNode(node);
            }
                  
      }

      
}

export default TextPane;
