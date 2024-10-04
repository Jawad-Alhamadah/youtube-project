import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import "../Home.css"
import ChannelBanner from '../components/ChannelBanner'
import DescSection from '../components/DescSection' 

function SingleVideo() {
    const { id } = useParams()
    let [videoInfo, setVideoInfo] = React.useState("")
    let [recommended, setRecommended] = React.useState([])
    let [channelInfo, setChannelInfo] =React.useState("")

    function count(views) {

         
        if (views < 1000) return views
        if (views < 1000000) return ( Math.round(views/1000)/10)*10 + "k "

        
        if (views >= 1000000) return  (Math.round(views/1000000)/10)*10 + "m "

    }

    useEffect(() => {
        axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU`)
            
            .then(res => {
               // console.log(res)
                // let video = res.data.filter(e => { return e.items[0].id === id })[0]
                let video = res.data.items[0]
               // console.log(video)
                setVideoInfo(video)

                axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU`)
                .then(res=>{
                  // console.log(res.data.items[0])
                    setChannelInfo(res.data.items[0])
                })
               
                //Fetch recommendation based on video title
                let rand = 0
                let split_title = video.snippet.title.split(" ")
                rand = Math.floor(Math.random() * split_title.length)

                //recommended search Term
                //let search_q = split_title[rand]
                let search_q = split_title[rand]

                //
                let recomm = [""]
                axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search_q}&type=video&key=`+"AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU")
                    .then(res => {
                            console.log(res)
                             const maps = res.data.items.map((item, index) => {
                            //fetch by ID . in this case, it should return one item 

                            return axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU`)
                            .then(res => res.data)

                        })

                        Promise.all(maps)
                            .then(res => {
                                console.log(res)
                                setRecommended([ ...res])})
                        //console.log(recomm)

                    })

                    //change this to a real call later

                    //https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCl3tRSkISghtUQrGLzz-vBg&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU
                  
                   
                    // let cById_sample = {
                    //     "kind": "youtube#channelListResponse",
                    //     "etag": "w1ROygJKcj7mz1wtxBuq7v07Tvo",
                    //     "pageInfo": {
                    //       "totalResults": 1,
                    //       "resultsPerPage": 5
                    //     },
                    //     "items": [
                    //       {
                    //         "kind": "youtube#channel",
                    //         "etag": "T-IjDcjE9vsM6bB7NaGNGl4Q7Rk",
                    //         "id": "UCl3tRSkISghtUQrGLzz-vBg",
                    //         "snippet": {
                    //           "title": "Behind the Masterpiece",
                    //           "description": "Behind the Masterpiece is an effort to discuss art without intimidation, narrating captivating stories and offering insights into why certain works have endured throughout history.\n\nI am an art history enthusiast and it is my honor to offer deep dives into the world's most recognizable pieces, explaining artistic style, movements, the time period, and a little bit about the artists themselves. ",
                    //           "customUrl": "@behindthemasterpiece",
                    //           "publishedAt": "2021-07-15T16:15:10.575716Z",
                    //           "thumbnails": {
                    //             "default": {
                    //               "url": "https://yt3.ggpht.com/dBVMSGIwzmOtf0KJnhvm3KVcP3Ws3E7n2zxcLwHgIXO9LjN7uau4W6byU2ZG5bcQHbTtEyrBnQ=s88-c-k-c0x00ffffff-no-rj",
                    //               "width": 88,
                    //               "height": 88
                    //             },
                    //             "medium": {
                    //               "url": "https://yt3.ggpht.com/dBVMSGIwzmOtf0KJnhvm3KVcP3Ws3E7n2zxcLwHgIXO9LjN7uau4W6byU2ZG5bcQHbTtEyrBnQ=s240-c-k-c0x00ffffff-no-rj",
                    //               "width": 240,
                    //               "height": 240
                    //             },
                    //             "high": {
                    //               "url": "https://yt3.ggpht.com/dBVMSGIwzmOtf0KJnhvm3KVcP3Ws3E7n2zxcLwHgIXO9LjN7uau4W6byU2ZG5bcQHbTtEyrBnQ=s800-c-k-c0x00ffffff-no-rj",
                    //               "width": 800,
                    //               "height": 800
                    //             }
                    //           },
                    //           "localized": {
                    //             "title": "Behind the Masterpiece",
                    //             "description": "Behind the Masterpiece is an effort to discuss art without intimidation, narrating captivating stories and offering insights into why certain works have endured throughout history.\n\nI am an art history enthusiast and it is my honor to offer deep dives into the world's most recognizable pieces, explaining artistic style, movements, the time period, and a little bit about the artists themselves. "
                    //           },
                    //           "country": "CA"
                    //         },
                    //         "contentDetails": {
                    //           "relatedPlaylists": {
                    //             "likes": "",
                    //             "uploads": "UUl3tRSkISghtUQrGLzz-vBg"
                    //           }
                    //         },
                    //         "statistics": {
                    //           "viewCount": "2708894",
                    //           "subscriberCount": "68000",
                    //           "hiddenSubscriberCount": false,
                    //           "videoCount": "28"
                    //         }
                    //       }
                    //     ]
                    //   }

                      


            })
    }, [id])
    //Example of real youtube API 
    //https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=JWtOFF0iSbo&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU

    function showDate(video_date) {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()

        let video_time = video_date.split("-")
        let video_day = video_time[2].split("T")[0]//video_date "2024-04-18T16:00:33"
        let video_month = video_time[1]
        let video_year = video_time[0]


       // console.log(video_time)
        let new_Date = new Date(`${video_month}/${video_day}/${video_year}`)
        let new_Date2 = new Date(`${month}/${day}/${year}`)

        const diffTime = Math.abs(new_Date - new_Date2);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); //difference in days


        if (diffDays > 365) return (Math.floor(diffDays / 365) + ` Year${diffDays / 365 == 1 ? "" : "s"} ago`)
        if (diffDays > 30) return (Math.floor(diffDays / 30) + ` month${diffDays / 30 == 1 ? "" : "s"} ago`)
        if (diffDays > 1) return (Math.floor(diffDays) + ` day${diffDays == 1 ? "" : "s"} ago`)


    }

    return (
        <div className='space-x-6 max-lg:flex-col flex-row flex max-lg:p-7 p-20 justify-center'>
            <div className='max-lg:w-[100%] w-[70%] '>
                {
                   channelInfo && videoInfo && <div className='space-y-2 '>



                        {/* <img src={videoInfo.snippet.thumbnails.high.url}
                            height={videoInfo.snippet.thumbnails.high.height}
                        > </img> */}

                        <iframe className='w-[100%]   aspect-video overflow-hidden rounded-md'
                      
                            src={`https://www.youtube.com/embed/${videoInfo.id}`}>
                        </iframe>
                        {/* <div className='bg-blue-700 w-[100%]   aspect-video' ></div> */}
                      

                        <h1 className='text-[1.3em] font-bold font-[Roboto, Arial, sans-serif]'>  {videoInfo.snippet.title}</h1>
                        {/* <h1>  {videoInfo.contentDetails.duration}</h1>
                        <h1>  {videoInfo.statistics.viewCount}</h1>
                        <h1> {videoInfo.statistics.likeCount}</h1>
                        <h1> {videoInfo.statistics.commentCount}</h1>

                        <h1> {videoInfo.snippet.description}</h1>
                        <h1> {videoInfo.snippet.channelTitle}</h1>
 */}

                        <ChannelBanner 
                            channelId={videoInfo.snippet.channelId} 
                            channelTitle={videoInfo.snippet.channelTitle}
                            likes={videoInfo.statistics.likeCount} 
                            views={videoInfo.statistics.viewCount}
                            date ={showDate(videoInfo.snippet.publishedAt)}
                            channelSubs ={channelInfo.statistics.subscriberCount}
                            channelIcon={channelInfo.snippet.thumbnails.default.url}
                            
                        /> 

                        <DescSection 
                        views={ videoInfo.statistics.viewCount}
                        date ={showDate(videoInfo.snippet.publishedAt)}
                        desc = {videoInfo.snippet.description} 
                        pureDate = {videoInfo.snippet.publishedAt}
                        
                        />

                    </div>


                }

            </div>
            

            <div className='max-lg:w-[100%] w-[30em] space-y-3 mt-5'>
                {recommended.length && recommended.map((r, index) => {
                  //  console.log(r)
                    return <div key={index} className=' divide-y-2 divide-gray-500 '>
                        {/* <h1>duration : {r.contentDetails.duration}</h1> */}

                        <div className='flex space-x-2'>
                            <div className='w-[168px] h-[94px] overflow-hidden rounded-[10px] '>

                                {/* width={r.items[0].snippet.thumbnails.default.width
height={r.items[0].snippet.thumbnails.default.height */}

                                <Link to={`/video/${r.items[0].id}`}  >
                                    <img className=' object-cover w-[100%] h-[100%]' src={r.items[0].snippet.thumbnails.high.url}
                                    > </img>
                                </Link>

                            </div>


                            {/* <h1>likes : {r.items[0].statistics.likeCount}</h1> */}
                            {/* <h1>comments : {r.items[0].statistics.commentCount}</h1> */}

                            {/* <h1>dfhdf</h1> */}
                            {/* <h1>hdfh</h1> */}

                            <div className='w-[50%] text-[0.8em] font-semibold '>

                                <div className='w-[100%]'>
                                    <Link to={`/video/${r.items[0].id}`}  >
                                        {
                                            r.items[0].snippet.title.length > 50 ?
                                                r.items[0].snippet.title.slice(0, 50) + "..."
                                                :
                                                r.items[0].snippet.title

                                        }
                                    </Link>


                                    <h1 className='mt-2 text-[#aaa] text-[0.9em] font-[400]'> {r.items[0].snippet.channelTitle}</h1>
                                    <div className=' text-[#aaa] flex space-x-2 items-center'>

                                        <h1 className='text-[0.9em] font-[400]'> {count(r.items[0].statistics.viewCount)} views </h1>
                                        <div className=' content-["\A"] size-[2px] bg-[#aaa] rounded-full '></div>
                                        <span className='text-[0.9em] font-normal'>
                                            {showDate(r.items[0].snippet.publishedAt)}
                                        </span>

                                    </div>

                                </div>


                                {/* <h1 className='text-[0.9em] font-[400]'> {r.items[0].snippet.publishedAt}</h1> */}

                            </div>



                        </div>


                    </div>

                })

                }
            </div>

        </div>
    )
}

export default SingleVideo
