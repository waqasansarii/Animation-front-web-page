import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import mac2 from '../images/Mockup.png'
import wave from '../images/wave-3.svg'
import redMuted from'../images/red-muted.png'
import left from '../images/airpods-left.png'
import right from '../images/airpods-right.png'
import '../css/connectedDevice.css'





function ConnectedDevice(){


    useEffect(()=>{
        Aos.init({duration:2000})

    },[])

    return (
        <div className='main_device_div'>
            <div className='sub_device_div'>
                <div className='device_div'>
                    <div className='mac2_div'>
                        <img className='mac2_img' src={mac2} alt=""/>
                    </div>
                    <div className='wave2_div'>
                        <img className='wave2_img' src={wave} alt=""/>
                    </div>
                    <div className='left_airpod_div'>
                        <img className='left_airpod_img' data-aos='fade-up' data-aos-delay='1300' src={left} alt=""/>
                    </div>
                    <div className='right_airpod_div'>
                        <img className='right_airpod_img' data-aos='fade-up' data-aos-delay='1500' src={right} alt=""/>
                    </div>
                    <div className='red_muted_div'>
                        <img className='red_muted_img' data-aos='fade-up' data-aos-delay='1500' src={redMuted} alt=""/>
                    </div>

                </div>
                <div className='haeding_div'>
                    <div className='head2_div'>
                        <h1 className='h1'>Stay muted even on a newly connected device</h1>
                    </div>
                    <div className='text_div'>
                        <p className='p'>If you mute your mic on a call and switch to a new device, such as your AirPods,
                             the app will detect the change and mute the new device as well
                        </p>
                    </div>
                    <div className='btn-div'>
                        <button className='download2_btn'>Downlaod</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ConnectedDevice