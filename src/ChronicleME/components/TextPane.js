import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Parser from 'html-react-parser';
import * as DataApi from './../api'
// import domToReact from 'html-react-parser/lib/dom-to-react';

const TextPane =(props) => {

      const [lemmaText, setLemmaText] = useState();
      const [translation, setTranslation] = useState();
      const [readings,setReadings]=useState();
      const {sectionId} = props;

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
                { lemmaText ? Parser(lemmaText,htmlToReactParserOptions) : null }
              </div>
              <div className="translation">
                { translation ? Parser(translation,htmlToReactParserOptions): null}
              </div>
            </div>
          )

	function htmlToReactParserOptions () {
		var parserOptions =  {
			 replace: function(domNode) {
       
				 switch (domNode.name) {
        
          // TODO make text interactive w/viz
          // <span
        //   className={cx({
        //     active: this.props.activeNode === rdg.id,
        //     visible: this.props.highlightedNodes.find(
				// 			(n) => n.id === rdg.id) != null
        //   })}
          // onClick={() => this.props.onSetActiveNode(rdg.id) }>

						default:
							/* Otherwise, Just pass through */
							return domNode;
				 }
			 }
		 };
		 return parserOptions;
	}

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
