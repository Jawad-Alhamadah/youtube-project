import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import "../Home.css"
import ChannelBanner from '../components/ChannelBanner'
import DescSection from '../components/DescSection'
import Navbar from '../components/Navbar'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify'

import { shorten, count,showDate } from '../helperFunctions/HelperFunctions'

function SingleVideo() {
    const { id } = useParams()
    let [videoInfo, setVideoInfo] = React.useState("")
    let [recommended, setRecommended] = React.useState([])
    let [channelInfo, setChannelInfo] = React.useState("")
    let [comment, setComment] = React.useState("")
    let [commentInput, setCommentInput] = React.useState("")
    let [comments, setComments] = React.useState([])

    function submitComment() {
        console.log(localStorage.getItem("username"))
        if (localStorage.getItem("username")) {

            axios.post("https://66fd81486993693089556ab8.mockapi.io/comment", {
                comment: commentInput,
                videoId: videoInfo.id,
                username: localStorage.getItem("username")
            })
                .then(res => {
                    setComment(res.data.comment)
                    setCommentInput("")
                })
        }
        else {
            toast.warning("You need to login to comment")
        }

    }

    function handleCommentChange(event) {

        setCommentInput(event.target.value)

    }

    useEffect(() => {
        console.log("hi i changed")
        axios.get("https://66fd81486993693089556ab8.mockapi.io/comment?videoId=" + id)
            .then(res => setComments(res.data))
            .catch(err => {

                setComments([])
            })

    }, [id, comment])

    useEffect(() => {
        let key = "AIzaSyBH7L7l2e5OCwobgaS3hMPq-a32OxPC1YU"
        axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` + key)

            .then(res => {

                let video = res.data.items[0]
                setVideoInfo(video)

                axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=` + key)
                    .then(res => {
                        setChannelInfo(res.data.items[0])
                    })

                let rand = 0
                let split_title = video.snippet.title.split(" ")
                rand = Math.floor(Math.random() * split_title.length)

                let search_q = split_title[rand]

                //
                let recomm = [""]
                axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoDuration=medium&maxResults=10&q=${search_q}&type=video&key=` + key)
                    .then(res => {
                        const maps = res.data.items.map((item, index) => {
                            return axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=` + key)
                                .then(res => res.data)

                        })

                        Promise.all(maps)
                            .then(res => {
                                setRecommended([...res])
                            })

                    })





            })
    }, [id])

  

    return (
        <div>
            <ToastContainer></ToastContainer>
            <style>
                {`body{background-color: #0f0f0f ; color: #f1f1ea}`}
            </style>
            <Navbar />

            <div className='space-x-6 max-lg:flex-col flex-row flex max-lg:p-7 py-7 px-20 justify-center'>
                <div className='max-lg:w-[100%] w-[70%] '>
                    {
                        channelInfo && videoInfo && <div className='space-y-2 '>

                            <iframe className='w-[100%]   aspect-video overflow-hidden rounded-md'

                                src={`https://www.youtube.com/embed/${videoInfo.id}`}>
                            </iframe>

                            <h1 className='text-[1.3em] font-bold font-[Roboto, Arial, sans-serif]'>  {videoInfo.snippet.title}</h1>

                            <ChannelBanner
                                channelId={videoInfo.snippet.channelId}
                                channelTitle={videoInfo.snippet.channelTitle}
                                likes={videoInfo.statistics.likeCount}
                                views={videoInfo.statistics.viewCount}
                                date={showDate(videoInfo.snippet.publishedAt)}
                                channelSubs={channelInfo.statistics.subscriberCount}
                                channelIcon={channelInfo.snippet.thumbnails.default.url}


                            />

                            <DescSection
                                views={videoInfo.statistics.viewCount}
                                date={showDate(videoInfo.snippet.publishedAt)}
                                desc={videoInfo.snippet.description}
                                pureDate={videoInfo.snippet.publishedAt}

                            />


                            <div className='space-y-4 mt-2'>
                                <h1 className='text-2xl font-bold'> {count(videoInfo.statistics.commentCount)} Comments</h1>
                                <div className='flex space-x-4'>
                                    <div className='size-10 rounded-full bg-blue-600'></div>
                                    <textarea value={commentInput} onChange={handleCommentChange} placeholder='Comment...' type="text" className='h-auto resize-none focus:border-white pl-5  focus:outline-none focus:border-b-[1px] bg-transparent text-white w-[100%] border-b-[1px] border-[#606060]' />
                                </div>

                                <div className='flex justify-end space-x-2'>
                                    <button onClick={() => setCommentInput("")} className={'' + commentInput ? "" : "hidden"} >Cancel</button>
                                    <button onClick={submitComment} className={'' + commentInput ? "bg-[#3d85f1] text-black text-sm px-4  font-semibold rounded-3xl py-2" : "hidden"} >Comment</button>
                                </div>
                                <div>{comments.length > 0 ? comments.map((comm, index) => {
                                    return < div key={index}>
                                        <div className='flex space-x-4'>
                                            <div>
                                                <div className='size-10 bg-orange-700 rounded-full'></div>
                                            </div>
                                            <div>
                                                <h1>@{comm.username}</h1>
                                                <h1 className='pl-2'>{comm.comment}</h1>
                                                <div className='flex space-x-2 space-y-6 items-center'>
                                                    <BiLike className='  size-5 ' />  <BiDislike className=' size-5  ' />

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                })
                                    : ""
                                }
                                </div>
                            </div>
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

                                    <Link to={`/video/${r.items[0].id}`}  >
                                        <img className=' object-cover w-[100%] h-[100%]' src={r.items[0].snippet.thumbnails.high.url}
                                        > </img>
                                    </Link>

                                </div>

                                <div className='w-[50%] text-[0.8em] font-semibold '>

                                    <div className='w-[100%]'>
                                        <Link to={`/video/${r.items[0].id}`}  >
                                            {
                                                shorten(r.items[0].snippet.title, 50)
                                            }
                                        </Link>


                                        <h1 className='mt-2 text-[#aaa] text-[0.9em] font-[400]'>

                                            {shorten(r.items[0].snippet.channelTitle, 20)}
                                        </h1>
                                        <div className=' text-[#aaa] flex space-x-2 items-center'>

                                            <h1 className='text-[0.9em] font-[400]'> {count(r.items[0].statistics.viewCount)} views </h1>
                                            <div className=' content-["\A"] size-[2px] bg-[#aaa] rounded-full '></div>
                                            <span className='text-[0.9em] font-normal'>
                                                {showDate(r.items[0].snippet.publishedAt)}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    })

                    }
                </div>

            </div>
        </div>

    )
}

export default SingleVideo
