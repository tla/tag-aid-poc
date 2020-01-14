import React, { useEffect, useRef} from 'react'
import SVG from 'react-inlinesvg'
//import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {selectedNodes, sectionId, onSelectNode, onDeselectNode}=props;
      const svgRef = useRef(null);
    
      useEffect( ()=>{
            if ( props.selectedNodes ){
                  highlightNodes();
                  centerOnSelected();
            }
      })

  


      return (
            <div style={{position:'relative', padding:'16px'}}>
                  <div   
                        className='graphWindow'
                        ref={svgRef}>
                              <SVG 
                                    src= {`data/${sectionId}/graph.svg`}
                                    onClick={handleClick}
                                    onLoad = { defaultStart }
                              />
                  </div>
            </div>
            )

      function handleClick(ev){
            const nodeGroup = ev.target; 
            if (nodeGroup != null) {
                  const id = nodeGroup.parentNode.id;
                  let trimmedId = id.replace('n','')
                  let index = selectedNodes.indexOf(trimmedId);
                  if (index === -1)
                        onSelectNode(trimmedId);
                  else
                        onDeselectNode(trimmedId)
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

      function centerOnSelected(){
            if(selectedNodes.length ===0)
                  return;
            let lastIndex=selectedNodes.length-1;
            let nodeId = selectedNodes[lastIndex]
            let domNode = getGraphDOMNode(nodeId);
            if(domNode)
                  domNode.scrollIntoView({behavior:'smooth', inline:'center',block:'center'});
            else
                 console.log('node not found')
          
      }
      
      function getGraphDOMNode(nodeId){
            const graphRef = svgRef.current;
            let selector = `g#n${nodeId}`;
            let found =  graphRef.querySelector(selector);
            return found;
      }

      function defaultStart(src, cache){
            let startNode = getStartNode();
            if ( startNode){
                  startNode.setAttribute("class", "node highlight start");
                  startNode.scrollIntoView({behavior:'smooth', inline:'center',block:'center'});
            }
            else
                 console.log("cant find start")
      }

      function getStartNode(){
            let startId ="__START__"
            const graphRef = svgRef.current;
            let selector = `g#__START__`;
            let found =  graphRef.querySelector(selector);
            return found;
      }


 


}
export default SvgGraph