import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Parser , {domToReact} from 'html-react-parser';
import * as DataApi from './../api'


const TextPane =(props) => {

      const [lemmaText, setLemmaText] = useState();
      const [translation, setTranslation] = useState();
      const [readings,setReadings]=useState('');

      const {sectionId, nodeId} = props;

      const lemmaParserOptions =  {
            replace: function({attribs,children}) {

                  if( attribs && attribs.id  ){
                       if(attribs.id === `text-${nodeId}`)
                       return <span style={{backgroundColor:'yellow'}}>{domToReact(children,lemmaParserOptions)}</span>
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
                { lemmaText ? Parser(lemmaText,lemmaParserOptions)  : null }
              </div>
              <div className="translation">
                { translation ? Parser(translation): null}
              </div>
            </div>
          )




	

  // renderWitnessList() {

  //   let witness = this.props.activeWitness ? this.props.activeWitness.sigil : '';
	// 	let witnessList = this.props.text.witnesses.slice();
	// 	if (witnessList.length) {
	// 		witnessList.unshift('Lemma text');
	// 	}

  //   return (
  //     <ul>
  //         {witnessList.map((w) => (
  //           <li className={w === witness ? "selected" : ""}
  //             key={w}
  //             onClick={() => this.props.onSetActiveWitness(w)}>
  //             {w}
  //           </li>
  //         ))}
  //     </ul>
  //   );
  // }

 

}

TextPane.propTypes = {
	text: PropTypes.object,
  activeNode: PropTypes.string,
  activeWitness: PropTypes.object,
  onSetActiveNode: PropTypes.func,
	onSetActiveWitness: PropTypes.func,
	highlightedNodes: PropTypes.array
};

export default TextPane;
