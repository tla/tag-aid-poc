import React from 'react'
import SVG from 'react-inlinesvg'
import {ReactComponent as Sample} from './sample-graph.svg'// also works

const SvgGraph =(props)=>{

      const {src}=props;
return (
      <SVG 
            src={src}

            />

)


}
export default SvgGraph