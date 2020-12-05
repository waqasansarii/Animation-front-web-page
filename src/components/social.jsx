import React from 'react'
import useWebAnimations, {  shakeY } from "@wellyshen/use-web-animations";
import Slack from '../images/slack.png'
import Msg from '../images/msg.png'
import zoom from '../images/zoom.png'
import skype from '../images/skype.png'
import viber from '../images/viber.png'
import hangout from '../images/hangout.png'
import webex from '../images/webex.webp'
import telegram from '../images/telegram.png'
import gotomeet from '../images/gotomet.png'
import callend from '../images/call-end.jpg'
import '../css/social.css'



function Social() {

    const { keyframes, timing } = shakeY
    const slack = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            iterations: Infinity,
            duration: 30000,
            direction:"alternate"
            // easing: "ease-in-out"
        }
    })
    
    

    return (
        <div className='social_main_div'>
            <div className='social_sub_div'>
                <div className='social_icons_div' ref={slack.ref} >
                    <div className='slack_div' >
                        <img className='slack'  src={Slack} alt="" />
                        <p>slack</p>
                    </div>
                    <div className='msg_div' >
                        <img className='msg'  src={Msg} alt="" />
                        <p>fb messenger</p>
                    </div>
                    <div className='zoom_div' >
                        <img src={zoom}  className='zoom' alt="" />
                        <p>zoom</p>
                    </div >
                    <div className='skype_div'>
                        <img src={skype} className='skype' alt="" />
                        <p>skype</p>
                    </div>
                    <div className='viber_div'>
                        <img src={viber} className='viber' alt="" />
                        <p>viber</p>
                    </div>
                    <div className='hangout_div'>
                        <img src={hangout} className='hangout' alt="" />
                        <p>hangouts</p>
                    </div>
                    <div className='webex_div'>
                        <img src={webex} className='webex' alt="" />
                        <p>webex</p>
                    </div>
                    <div className='telegram_div'>
                        <img src={telegram} className='telegram' alt="" />
                        <p>telegram</p>
                    </div>
                    <div className='gotomeet_div'>
                        <img src={gotomeet} className='gotomeet' alt="" />
                        <p>goto meeting</p>
                    </div>
                </div>
            <div className='main_head_div'>


                <div className='head_div'>
                    <h1 className='head_one'>Control your microphon anywhere</h1>
                </div>
                <div className='para_div'>
                    <p className='para'>Even during calls</p>
                </div>
                <div className='call_end_div'>
                    <img className='call_end' src={callend} alt="" />
                </div>
            </div>

            </div>
        </div>
    )
}

export default Social
