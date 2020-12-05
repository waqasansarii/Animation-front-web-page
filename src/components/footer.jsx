import React from 'react'
import FotBar from './fotbar'
import '../css/footer.css'




function Footer(){
    return(
        <div className='main_footer_div'>
            <div className='sub_footer_div'>
                <FotBar />
            </div>
            <div className='copy'>
                <p>Made by Pixel Point – Web, Mobile, AI, Blockchain development company. © 2019 Mutify. All right reserved</p>
            </div>

        </div>
    )
}

export default Footer