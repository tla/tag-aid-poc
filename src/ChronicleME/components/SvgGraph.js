import React from 'react'
import SVG from 'react-inlinesvg'
//import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {nodeId, sectionId, onSelectNode}=props;

      return (
                  <SVG 
                        src= {`data/${sectionId}/graph.svg`}
                        onClick={handleClick}
                  />
            )

      function handleClick(ev){
            const nodeGroup = ev.target; 
            if (nodeGroup != null) {
                  const id = nodeGroup.parentNode.id;
                  let trimmedId = id.replace('n','')
                  props.onSelectNode(trimmedId);
            }
      }

 


}
export default SvgGraph