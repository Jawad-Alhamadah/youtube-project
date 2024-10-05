import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

import { shorten,count } from '../helperFunctions/HelperFunctions'
 
function Videos() {
    let [videos,setVideos] = React.useState([])
    let [searchValue, setSearchValue] = React.useState("")

  return (
    <div>
       
       <div  className=''>
       <style>
        {`body{background-color: #0f0f0f ; color: #f1f1ea}`}
        </style>
     
        <Navbar  />
       </div>
    
      <div className='flex justify-center'>

      <div className='max-md:w-[90%] bg-[#212121] p-3 w-[50%] text-center  rounded-lg  text-2xl font-bold  border-[1px] border-[#494949] mt-6'>
        <h1>Try searching to get started</h1>
        <h3 className='text-sm text-center  mt-2 text-[#7a7a7a] '>Start watching videos to help us build a feed of videos that you'll love.</h3>
      </div>
      </div>
      
    </div>
  )
}

export default Videos
