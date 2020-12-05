import React from 'react'
import Logo from '../images/logo.png'
import '../css/header.css'


function FotBar() {



    return (
        <div className='main_div'>
            <div className='sub_div'>

                <div className='header_div'>
                    <img className='logo' src={Logo} alt="" />
                    <h3 className='heading'>MUTIFY</h3>

                </div>
                <div className='navbar_div'>
                    <ul className='navbar_ul'>
                        <li>Works With</li>
                        <li>Noise Level</li>
                        <li>Switch Device</li>
                        <li>feedback</li>
                    </ul>
                </div>
                <div>
                    <button className='download_btn'>Download</button>

                </div>
               

            </div>
        </div>

    )
}

export default FotBar