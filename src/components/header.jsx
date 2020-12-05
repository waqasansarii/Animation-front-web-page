import React,{useState} from 'react'
import Logo from '../images/logo.png'
import TocIcon from '@material-ui/icons/Toc';
import CloseIcon from '@material-ui/icons/Close';
import '../css/header.css'


function Header() {

    const [openNav , setOpenNav] = useState(false)

    const open_nav = ()=>{
        // console.log('run')
        setOpenNav(true)
     
    }
    const close_btn =()=>{
        setOpenNav(false)
    }

    return (
        <div className='main_div'>
            <div className='sub_div'>

                <div className='header_div'>
                    <img className='logo' src={Logo} alt="" />
                    <h3 className='heading'>MUTIFY</h3>

                </div>
                <div className={openNav?'navbar2_div':'navbar_div'}>
                    <ul className={openNav? 'navbar2_ul':'navbar_ul'}>
                        <li>Works With</li>
                        <li>Noise Level</li>
                        <li>Switch Device</li>
                        <li>feedback</li>
                    </ul>
                </div>
                <div>
                    <button className='download_btn'>Download</button>

                </div>
                {openNav? null

                :
                    <div className='nav_btn_div'>
                    <TocIcon onClick={open_nav} className='nav_btn' />

                </div>
                }
                <div className={openNav?'nav_close2_div' :'nav_close_div'}>
                    <CloseIcon onClick={close_btn} className='nav_close_btn' />

                </div>


            </div>
        </div>

    )
}

export default Header