import React from 'react'
import SecondaryButton from './SecondaryButton'
import { LiaDownloadSolid } from "react-icons/lia"
import { PiShareFat } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Dots from './Dots';

import { shorten,count } from '../helperFunctions/HelperFunctions'


function ChannelBanner(props) {

    return (


        <div className='flex justify-between flex-wrap max-md:justify-center'>

            <div className='flex me-auto'>
                <div className=' flex space-x-4 mr-3 items-center self-start'>
                    <div className='flex items-center size-10 bg-yellow-600 rounded-full bg-cover overflow-hidden '
                        style={{ backgroundImage: `url('${props.channelIcon}')` }}

                    ></div>
                    <div>
                        <div>{shorten(props.channelTitle,20)}</div>
                        <div className='text-[#aaa] text-[0.75em]'>{count(props.channelSubs)} subscribers</div>
                    </div>
                </div>
                <div className='space-x-3 '>

                    <button className='bg-[#d7d7d7] text-black text-sm px-4  font-normal rounded-3xl py-2   '>Subscribe</button>
                </div>
            </div>

            <div className=' space-x-2  max-sm:w-[100%] max-sm:justify-evenly flex  flex-wrap'>
         
                <button className='bg-[#272727] py-2 px-4  rounded-3xl'> {count(props.likes)}  <BiLike  className='inline mx-2 size-5 align-top ' /> | <BiDislike className='inline mx-2 size-5 align-top ' /> </button>

                <button className='bg-[#272727] text-sm px-4  font-semibold rounded-3xl py-2  '>
                <LiaDownloadSolid className='inline mx-2 size-5 align-top ' />
                    <span className='max-sm:hidden'>Download</span>

                </button>

                <button  className='bg-[#272727] text-sm px-4  font-semibold rounded-3xl py-2 '>
                <PiShareFat className='inline mx-2 size-5 align-top ' />
                   <span className='max-sm:hidden'>Share</span>

                    </button>
                    <Dots/>
            </div>

           
        </div>
    )
}

export default ChannelBanner
