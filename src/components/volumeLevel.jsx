import React from 'react'
import waves from '../images/wave.png'
import useWebAnimations, { flash } from "@wellyshen/use-web-animations";

import '../css/volumeLevel.css'


function VolumeLevel() {


    const { keyframes, timing } = flash

    const circleOne = useWebAnimations({
        keyframes: {
            ...keyframes,
            backgroundColor: ['rgb(71, 70, 70)', 'white']
        },
        timing: {
            ...timing,
            duration: 700,
            iterations: Infinity,


        }
    })
    const circleTwo = useWebAnimations({
        keyframes: {
            transform: ['scale(0,0,0.5)'],
            backgroundColor: ['rgb(71, 70, 70)', 'white']

        },
        timing: {
            duration: 600,
            iterations: Infinity
        }
    })
    const circleThree = useWebAnimations({
        keyframes: {
            transform: ['scale(0,0,0.5)'],
            backgroundColor: ['rgb(71, 70, 70)', 'white']

        },
        timing: {
            duration: 500,
            iterations: Infinity
        }
    })
    const circleFour = useWebAnimations({
        keyframes: {
            transform: ['scale(0,0,0.5)'],
            backgroundColor: ['rgb(71, 70, 70)', 'white']

        },
        timing: {
            duration: 400,
            iterations: Infinity
        }
    })
    const circleFive = useWebAnimations({
        keyframes: {
            transform: ['scale(0,0,0.5)'],
            backgroundColor: ['rgb(71, 70, 70)', 'white']

        },
        timing: {
            duration: 600,
            iterations: Infinity
        }
    })
    return (
        <div className='main_volume_level_div'>
            <div className='sub_volume_level_div'>
                <div className='parent_of_both_div'>

                    <div className='headings_div'>
                        <div className='head_div'>
                            <h1 className='head'>Easily control the volume level</h1>

                        </div>
                        <div className='paraDiv'>
                            <p className='para_one'>Use a shortcut to quickly access a window for your microphone volume controls</p>
                        </div>
                        <div className='butn_div'>
                            <button className='Button'>Try it Free</button>
                        </div>
                    </div>
                    <div className='wave_img_div'>
                        <img className='wave_img' src={waves} alt="" />

                    </div>

                </div>
                {/* <div> */}

                    <div className='circle_div'>
                        <p className='circle'> </p>
                        <p className='circle' ref={circleOne.ref}> </p>
                        <p className='circle' ref={circleTwo.ref}> </p>
                        <p className='circle' ref={circleThree.ref}> </p>
                        <p className='circle' ref={circleFour.ref} > </p>
                        <p className='circle' ref={circleFive.ref}> </p>
                    </div>
                {/* </div> */}
            </div>

        </div>
    )
}

export default VolumeLevel