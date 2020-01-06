
import React, { useState, useEffect } from 'react';
import  * as DataApi from './../utils/Api';
import Layout from './Layout'
import { HashRouter as Router} from 'react-router-dom'



const RootContainer = ( props )=>{

      const [sectionList, setSectionList] = useState([])
   
      useEffect( ()=>{
          DataApi.getSectionList( setSectionList )
      },[])// passing empty array means this useEffect will only run on component mount

      return (
            <Router>
                 
                  <Layout 
                        sections = {sectionList}
                  />
            </Router>
      )


}
export default RootContainer;
      

 