import React from 'react'
import { Link } from 'react-router-dom'

const SectionList = ( props ) =>{

      const {list, onSelect } = props

      return (
            
            <div className='section-list'>
			<h2>Index</h2>
			<ul>
                        {
                              list.map( s => {
                                    return(
                                    <li key={s.id} value={s.id} 
                                         onClick={()=>{onSelect(s) }} >
                                         {`Section Id:${s.id}`}
                                         <br/>
                                         <div style={{paddingLeft:'16px'}}><h4> {s.displayName.substring(0,13)}</h4></div>
                                    </li>
                                    )
                              })
                        }
			</ul>
		</div>
            
      )
}
export default SectionList