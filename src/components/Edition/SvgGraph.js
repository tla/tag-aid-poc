import React, { useEffect, useRef} from 'react'
import SVG from 'react-inlinesvg'
//import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {highlightedNode, selectedSentence, sectionId, onSelectNode, }=props;
      const svgRef = useRef(null);
    
      useEffect( ()=>{
            if ( !props.highlightedNode )
                  return 
                  highlightNode();
                  centerOnSelected();
           
      }, [props.highlightedNode])

      useEffect( ()=>{
            if  (! props.selectedSentence)
            return
                  highlightSentence();
           
      }, [props.selectedSentence, props.highlightedNode])

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
                  onSelectNode(trimmedId);
            }
      }

      function highlightNode() {

            let highlightedAndSelected = svgRef.current.querySelectorAll("g.node.highlight.active");
            highlightedAndSelected.forEach( n =>{
                  if( n.id.replace('n','') === highlightedNode)
                        n.setAttribute("class", "node highlight active");
                  else
                        n.setAttribute("class", "node highlight");
            })

            // let nodeEls = svgRef.current.querySelectorAll("g.node.active");
		// nodeEls.forEach(n => {
		// 	n.setAttribute("class", "node");
            // });
 
            let node = getGraphDOMNode(highlightedNode);
            if(node){
                  node.setAttribute("class", "node active");
            }
          
      }

      function highlightSentence() {
            let previousHighlight = svgRef.current.querySelectorAll("g.node.highlight");
            previousHighlight.forEach(n => {
                  if (n.id === "__START__" || n.id === "__END__" ) 
                  return;
			      n.setAttribute("class", "node");
            });


            let nodeEls = svgRef.current.querySelectorAll("g.node");
            let nodesInSentence = []; // will use this to approximate the middle perhaps - going to start for now
		nodeEls.forEach(n => {
                  if (n.id === "__START__" || n.id === "__END__" ) 
                  return;
                  let inSentence = (parseInt(n.id.replace('n','')) >= parseInt(selectedSentence.start) && parseInt(n.id.replace('n','')) <= parseInt(selectedSentence.end) ) ;
                  if( inSentence){
                        if( n.id.replace('n','') === highlightedNode)
                              n.setAttribute("class", "node highlight active");
                        else 
                              n.setAttribute("class", "node highlight");
                        nodesInSentence.push(n)
                  } else 
			      n.setAttribute("class", "node");
            });

            if( nodesInSentence.length > 0 ){
                  let sentenceStartId = nodesInSentence[0].id;
                  let trimmed = sentenceStartId.replace('n','')
                  let domNode = getGraphDOMNode(trimmed);
                  if(domNode)
                        domNode.scrollIntoView({behavior:'smooth', inline:'center',block:'center'});
            }
          
       
      }

      function centerOnSelected(){
            if( ! highlightedNode)
                  return;
         
            let domNode = getGraphDOMNode(highlightedNode);
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