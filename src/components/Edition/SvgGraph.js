import React, { useEffect, useRef} from 'react'
import SVG from 'react-inlinesvg';
//import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {sectionId, highlightedNode, selectedSentence, selectedRank, onSelectNode, 
            nodeHash, nodeList, persons, places, dates }=props;
    
      const svgRef = useRef(null);
    
      useEffect( ()=>{
            
            highlightAndSelect();
      },[selectedRank, selectedSentence, highlightedNode] )

      useEffect( ()=>{
            if(!props.selectedSentence)
            return;
            const zoomNode = props.selectedSentence.startId;
            zoomToNode(zoomNode)
      },[props.selectedSentence])

      useEffect( ()=>{
            if(! props.highlightedNode)
                  return;
            const zoomNode = props.highlightedNode;
            zoomToNode(zoomNode)
      },[props.highlightedNode])

      useEffect( ()=>{
            if(! props.selectedRank)
                  return;
            
            let nodesAtRank = nodeList.filter( n=> {return n.rank === selectedRank})
            nodesAtRank.forEach( n=>{
                  const zoomNode = getGraphDOMNode(n.id)
                  if(zoomNode )
                        {
                              zoomToNode(n.id);
                              return;
                        }
            })
      },[props.selectedRank])

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



      function highlightAndSelect() {
            let allGraphNodes = svgRef.current.querySelectorAll("g.node");
            allGraphNodes.forEach( n=>{
                  if (n.id === "__START__" || n.id === "__END__" ) 
                        return;
                  let nodeId = n.id.replace('n','');
                  let rank;
                  if (nodeHash[parseInt(nodeId)])
                        rank = nodeHash[nodeId].rank;
                 // else
                       // console.log( 'unable to look up rank for', nodeId )
                  // to do is look up the node's rank, we need to pass the readings in (a readings hash wouldnt be bad- or encode in the svg gen script)
                  let classNames = "node";
                  let inHighlightedSentence = false;
                  let isSelectedNode = false;
                  let isPerson = false;
                  let isPlace = false;
                  let isDate = false;
                  let isRank = false;

                  if(selectedSentence && nodeHash && rank){
console.log(` comparing rank ${rank} sentence from  ${selectedSentence.startRank} - ${selectedSentence.endRan}`)
                        inHighlightedSentence = rank.toString() >= selectedSentence.startRank.toString() && rank<= selectedSentence.endRank.toString();
                  }
                       
                  if(persons)
                        isPerson = persons.find( p =>{return p.begin.toString() === nodeId.toString()});
                  if(places)
                        isPlace = places.find(p=> { return p.begin.toString() === nodeId.toString()});
                  if( dates )
                        isDate = dates.find( d=> { return d.begin.toString() === nodeId.toString()})
                  if(highlightedNode)
                        isSelectedNode = nodeId === highlightedNode ;
                  if(selectedRank && rank )
                        isRank = rank === selectedRank


                  if( isPerson ) {
                        classNames += " person";
                  } else if ( isPlace ){
                        classNames += " place";
                  } else if ( isDate ){
                        classNames +=" date";
                  } else if( inHighlightedSentence ) {
                        classNames += " highlight";
                  } 
                  
                  if( isRank ) {
                        classNames += " disonance"
                  }
                       
                  
                  if( isSelectedNode)
                        classNames += " active";

                  n.setAttribute("class", classNames)

            })

      }

      function zoomToNode(zoomNode){
            if(zoomNode){
                  let domNode = getGraphDOMNode(zoomNode);
                  if(domNode)
                        domNode.scrollIntoView({behavior:'smooth', inline:'center',block:'center'});
            }
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
            const graphRef = svgRef.current;
            let selector = `g#__START__`;
            let found =  graphRef.querySelector(selector);
            return found;
      }


 


}
export default SvgGraph