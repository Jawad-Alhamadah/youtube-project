import React, { useEffect } from 'react'
import axios from 'axios'

import { shorten,count } from '../helperFunctions/HelperFunctions'


function Home() {
    useEffect(()=>{
        let key = "AIzaSyBGl1c4tHsf-DrPoINTbdVEfeoK5yXTkP4"
        let word ="Sea"

        axios.get("/HistSearch.json")
        .then(res=>console.log(res))
        
    },[])
  return (
    <div>
      <style>
        {`body{background-color: #0f0f0f ; color: #f1f1ea}`}
        </style>
      home
    </div>
  )
}

export default Home
