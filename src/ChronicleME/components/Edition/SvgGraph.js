import React, { useEffect, useRef} from 'react'
import ReactDOM from 'react-dom';
import SVG from 'react-inlinesvg'
//import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {nodeId, sectionId, onSelectNode}=props;

      const svgRef = useRef(null)

    

      return (
               <div   ref={svgRef}>
                  <SVG 
                      
                        src= {`data/${sectionId}/graph.svg`}
                        onClick={handleClick}
                        onLoad={highlightNodes}
                  />
                  </div>
            )

      function handleClick(ev){
            const nodeGroup = ev.target; 
            if (nodeGroup != null) {
                  const id = nodeGroup.parentNode.id;
                  let trimmedId = id.replace('n','')
                  props.onSelectNode(trimmedId);
            }
      }

      function highlightNodes(src, hasCache) {
            console.log('in highlight nodes')
            let test = svgRef.current;
            let bunnies = test.querySelectorAll("g.node");
            console.log('in highlight nodes')
		// let nodeEls = svgRef.current.querySelectorAll("g.node");
		// nodeEls.forEach( n=> {
		// 	n.setAttribute("class", "node highlight active");
		// });

	}


 


}
export default SvgGraph