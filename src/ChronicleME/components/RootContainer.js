
import React, { useState, useEffect } from 'react';
import  * as DataApi from './../api';
import Layout from './Layout'



const RootContainer = ( props )=>{

      const [sectionList, setSectionList] = useState([])
   
      useEffect( ()=>{
          DataApi.getSectionList( setSectionList )
      },[])// passing empty array means this useEffect will only run on component mount

      return (
            <Layout 
                  sections = {sectionList}

            />
      )


}
export default RootContainer;
      

 