import React, { useEffect } from 'react'
import axios from 'axios'
function Home() {
    useEffect(()=>{
        let key = "AIzaSyBGl1c4tHsf-DrPoINTbdVEfeoK5yXTkP4"
        let word ="Sea"

        axios.get("/HistSearch.json")
        .then(res=>console.log(res))
        


        //Videos By Most Viewd // video ID is string

        // axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+"AIzaSyBGl1c4tHsf-DrPoINTbdVEfeoK5yXTkP4")
        // .then(data=>{
        //    let info = data.data.items[0].snippet
        //    console.log(data.data.items[0])
        //    console.log("title : " + info.title)
        //    console.log("description : " + info.description)
        //    console.log("channelTitle : " + info.channelTitle)
        //    console.log("thumbnails: ",info.thumbnails)

        // })

        // Videos by ID
        // axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=gw_ItuAtmFQ&key=`+"AIzaSyBGl1c4tHsf-DrPoINTbdVEfeoK5yXTkP4")
        // .then(data=>{
        //     let info = data.data.items[0].snippet
        //         console.log(data.data.items[0])
        //         console.log("title : " + info.title)
        //         console.log("description : " + info.description)
        //         console.log("channelTitle : " + info.channelTitle)
        //         console.log("thumbnails: ",info.thumbnails)

        // })



        //Videos Search and location
        // axios.get( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&q=${word}&maxResults=25&type=video&key=${key}`)
        // .then(data=>{
        //    let info = data.data.items[0].snippet
        //    console.log(data)

        // })


        // by location  -    Riyadh // video ID is Oject
        // axios.get( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=24.713552%2C46.675297&locationRadius=5km&q=${word}&maxResults=25&type=video&key=${key}`)
        // .then(data=>{
        //    let info = data.data.items[0].snippet
        //    console.log(data)

        // })
       
    },[])
  return (
    <div>
      home
    </div>
  )
}

export default Home
