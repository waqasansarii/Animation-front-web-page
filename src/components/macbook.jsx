import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useWebAnimations, { shakeY, backInUp } from "@wellyshen/use-web-animations";
import macbookImg from '../images/macbook.png'
import kyboardVoice from '../images/kyboard -voice.png'

import '../css/macbook.css'


function Macbook() {


    useEffect(() => {
        Aos.init({ duration: 5000 })
    }, [])










    return (
        <div className='main_macbook_div'>
            <div className='sub_macbook_div'>
                <div className='macImg_div'>
                    <img className='macbook_img' src={macbookImg} alt="" />
                </div>

                <div className='voice_img_div'>
                    <img className='kyboard_voice_img'
                        // data-aos="zoom-in-up"
                        data-aos-delay="1500" src={kyboardVoice} alt="" />
                </div>

                <div className='para_div'>
                    <p className='text_one'>Use a shortcut or the touch bar on any Mac device </p>
                    <p className='text_two'>to quickly mute your microphone</p>
                </div>
                <div className='btn_div'>
                    <button className='download2_btn'>Download</button>
                    <button className='buy_btn'>Buy: $4.99</button>
                </div>

            </div>

        </div>
    )
}

export default Macbook