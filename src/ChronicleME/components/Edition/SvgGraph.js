import React, { useEffect, useRef} from 'react'
import ReactDOM from 'react-dom';
import SVG from 'react-inlinesvg'
//import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {selectedNodes, sectionId, onSelectNode}=props;
      const svgRef = useRef(null);

      useEffect( ()=>{
            if ( !selectedNodes )
            return;
            highlightNodes();
      },[selectedNodes])

    

      return (
               <div   ref={svgRef}>
                  <SVG 
                        src= {`data/${sectionId}/graph.svg`}
                        onClick={handleClick}
                  />
                  </div>
            )

      function handleClick(ev){
            const nodeGroup = ev.target; 
            if (nodeGroup != null) {
                  const id = nodeGroup.parentNode.id;
                  let trimmedId = id.replace('n','')
                  onSelectNode(trimmedId);
            }
      }

      function highlightNodes() {
            let nodeEls = svgRef.current.querySelectorAll("g.node.highlight");
		nodeEls.forEach.call(nodeEls, function(n) {
			n.setAttribute("class", "node");
            });
            
            if(!selectedNodes)
            return;
            selectedNodes.forEach( n=>{
                  let node = getGraphDOMNode(n);
                  if(node){
                  node.setAttribute("class", "node highlight active");
                  }
            })
       
      }
      
      function getGraphDOMNode(nodeId){
            const graphRef = svgRef.current;
            let selector = `g#n${nodeId}`;
            let found =  graphRef.querySelector(selector);
            return found;
      }


 


}
export default SvgGraph