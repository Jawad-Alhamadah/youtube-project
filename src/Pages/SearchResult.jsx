import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import SideBar from '../components/SideBar'

function SearchResult() {
    let [videos, setVideos] = React.useState([])
    let { word } = useParams()

    useEffect(() => {
        let key = "AIzaSyBH7L7l2e5OCwobgaS3hMPq-a32OxPC1YU"

        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoDuration=medium&maxResults=10&q=${word}&type=video&key=` + key)
            .then(res => {
                console.log(res)
                const maps = res.data.items.map((item, index) => {

                    return axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=` + key)
                        .then(res => res.data)

                })

                Promise.all(maps)
                    .then(res => setVideos([...res]))

            }

            )



    }, [word])
    return (
        <div className=''>
           
            <style>
                {`body{background-color: #0f0f0f ; color: #f1f1ea}`}
            </style>
            <Navbar />
            <div >

            </div >
            <div className='space-y-3 mt-10'>

                {

                    videos && videos.map((video, index) => {

                        return <div className='flex flex-col max-lg:items-center items-end'  >

                            <VideoCard index={index} video={video.items[0]} />
                        </div>

                    })
                }
            </div>

        </div>
    )
}

export default SearchResult
