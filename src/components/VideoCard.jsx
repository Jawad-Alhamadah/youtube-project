import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { shorten, count, showDate } from '../helperFunctions/HelperFunctions'

function VideoCard(props) {
    let [desc, setDesc] = React.useState("")


    return (
        <div key={props.index} className='flex max-lg:w-[80%] w-[83%]  '>

            {/* <a href={"https://www.youtube.com/watch?v="+video.id}> */}
            <Link to={`/video/${props.video.id}`} className='min-w-[200px] max-lg:w-[54%] w-[39%] rounded-2xl overflow-hidden'

            >
                <img className='scale-125 w-[100%] aspect-video overflow-hidden rounded-lg' src={props.video.snippet.thumbnails.high.url}
                > </img>

            </Link>

            <div className='max-lg:w-[45%] w-[61%] max-md:p-2 p-4 space-y-2 flex flex-col flex-wrap '>

                <Link to={`/video/${props.video.id}`}  >
                    <h1 className='max-md:w-[200px]   max-md:text-[1em] text-[1.25em] ]'>{shorten(props.video.snippet.title, 50)}</h1>
                </Link>

                <div className='space-y-2 text-[#8c8c8c] text-[0.8em] w-[100%]'>

                    <h1 className='flex items-center space-x-1 '>
                        <span>{count(props.video.statistics.viewCount)}</span>
                        <span>views</span>
                        <span className=' content-["\A"] size-[2px] bg-[#aaa] rounded-full '></span>
                        <span className=''>{showDate(props.video.snippet.publishedAt)}</span>

                    </h1>
                    <h1>{shorten(props.video.snippet.channelTitle, 30)}</h1>
                    <h1 className='overflow-hidden whitespace-nowrap overflow-ellipsis w-[70%] '>{shorten(props.video.snippet.description, 130)}</h1>

                </div>

            </div>


        </div>
    )
}

export default VideoCard
