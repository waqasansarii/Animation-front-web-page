import React from 'react'
import UnmutedVideo from '../images/mutify-video.jpg'
import '../css/unmuted.css'



function Unmuted() {
    return (
        <div className='unmuted_main_div'>
            <div className='unmuted_sub_div'>

                <div>
                    <img className='unmuted_img' src={UnmutedVideo} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Unmuted