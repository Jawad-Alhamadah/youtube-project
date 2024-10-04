import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
function SearchResult() {
    let [videos,setVideos] = React.useState([])
 let {word} =useParams()

  useEffect(()=>{
    

    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${word}&type=video&key=`+"AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU")
    .then(res=>{
     // console.log(res)
      const maps = res.data.items.map((item, index) => {
        //fetch by ID . in this case, it should return one item 
       
        return axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU`)
            .then(res => res.data)

    })

    Promise.all(maps)
        .then(res => setVideos([ ...res]))

} 
    
    )
   


  })
  return (
    <div>
       
    <div >
  
     {/* <input className='text-black' onChange={handleSearchChange} type="text" />
     <button onClick={handleSearch}>Search</button> */}
     <Navbar  />
    </div>
     {
         
      videos && videos.map((video,index)=>{
         console.log(video)
             return <div key={index} className='flex flex-col border-[2px] border-black w-[20em] flex-wrap'>
                 
                 {/* <a href={"https://www.youtube.com/watch?v="+video.id}> */}
                 <Link to={`/video/${video.items[0].id}`}  className='object-contain w-[400px] h-[300px]' >
                 <img className='w-[100%] h-[100%]' src={video.items[0].snippet.thumbnails.high.url} 
                     > </img> 
                     {/* width={video.items[0].snippet.thumbnails.high.width} */}
                     {/* height={video.items[0].snippet.thumbnails.high.height} */}

                  </Link>
                   
                 {/* </a> */}

                 <h1>views : {video.items[0].statistics.viewCount}</h1>
                 <h1>likes : {video.items[0].statistics.likeCount}</h1>
                 <h1>comments : {video.items[0].statistics.commentCount}</h1>
                 <h1>Title: {video.items[0].snippet.title}</h1>
                 <h1>Desc: {video.items[0].snippet.description}</h1>
                 <h1>Channel: {video.items[0].snippet.channelTitle}</h1>
               
             </div>
            
           
         })
     }
 </div>
  )
}

export default SearchResult
