
import React, { useState, useEffect } from 'react';
import  * as DataApi from './../utils/Api';
import Layout from './Layout'
import { HashRouter as Router} from 'react-router-dom'



const RootContainer = ( props )=>{

      const [sectionList, setSectionList] = useState([])
      const [witnessList, setWitnessList] = useState([])
   
      useEffect( ()=>{
          DataApi.getSectionList( setSectionList )
      },[])// passing empty array means this useEffect will only run on component mount
      useEffect( ()=>{
            DataApi.getWitnessList( setWitnessList )
        },[])
      return (
            <Router>
                 
                  <Layout 
                        sections = {sectionList}
                        witnesses = {witnessList}
                  />
            </Router>
      )


}
export default RootContainer;
      

 