import React from 'react'
import '../css/formac.css'




function Formac(){
    return(
        <div className='mutify_main_div'>
           <div className='mutify_sub_div'>
               <h1 className='mutify_heading'>Mutify for Mac</h1>
               <p className='text_one'>Use a shortcut or the touch bar on any Mac device </p>
               <p className='text_two'>to quickly mute your microphone</p>
           </div>
           <div className='btn_div'>
               <button className='download2_btn'>Download</button>
               <button className='buy_btn'>Buy: $4.99</button>
           </div>
        </div>
    )
}

export default Formac