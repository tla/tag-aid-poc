import React from 'react'
import SVG from 'react-inlinesvg'
//import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {src, onSelectNode}=props;
return (
            <SVG 
                  src={src}
                  onClick={handleClick}
            />

)

function handleClick(ev){
      if(ev)
      console.log('received event on map', ev.target)
      const nodeGroup = ev.target; //(closest(ev.target, "g.node"));

      if (nodeGroup != null) {
            // The reading ID to report is the content of the group's <title> element
            const id = nodeGroup.parentNode.id;
            console.log( 'node is is ', id)
           // const rid = nodeGroup.getElementsByTagName('title')[0].innerHTML;
           let trimmedId = id.replace('n','')
          props.onSelectNode(trimmedId);
      }
}


}
export default SvgGraph