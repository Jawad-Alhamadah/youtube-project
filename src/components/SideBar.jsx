import React from 'react'

function SideBar(props) {
    
    
    return (
        <div 
        
        className={`z-[11] duration-500 space-y-6 p-5 bg-[#0f0f0f] w-[18em] fixed max-md:top-36 top-20 overflow-scroll max-h-[90vh] scroll-container  `}
        style={{left:props.hidden }}
        >
            <div className='pace-y-2 grayhover'>
                <div>Home</div>
                <div>Shorts</div>
                <div>Subscriptions</div>

            </div>
            <hr className='border-gray-800' />
            <div  className='pace-y-2 grayhover'>
                <h1 className='text-2xl font-semibold '>You</h1>
                <div>Your Channel</div>
                <div>History</div>
                <div>Playlist</div>
                <div>Your vidoes</div>
                <div>watch later</div>
                <div>Liked videos</div>

            </div>
            <hr className='border-gray-800' />
            <div  className='pace-y-2 grayhover'>
                <h1 className='text-2xl font-semibold '>Subscriptions</h1>
                <div></div>
                <div></div>

            </div>
            <hr className='border-gray-800' />
            <div  className='pace-y-2 grayhover'>
                <h1 className='text-2xl font-semibold '>Trending</h1>
                <div>Music</div>
                <div>Live</div>
                <div>Gaming</div>
                <div>Sport</div>
            </div>
            <hr className='border-gray-800' />
            <div className='pace-y-2 grayhover'>
                <div>Youtube Premium</div>
                <div>Youtube Studio</div>
                <div>Youtube Music</div>
                <div>Youtube Kids</div>
            </div>
            <div className='pace-y-2 grayhover'>
                <div>Settings</div>
                <div>Report History</div>
                <div>Help</div>
                <div>Send Feedback</div>
            </div>
            <div className='text-md text-[#515151]'>
                <div>
                    <div>
                        AboutPressCopyrightContact usCreatorAdvertiseDevelopers
                    </div>
                    <div>
                        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                    </div>
                    <div>
                        © 2024 Google LLC
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SideBar
