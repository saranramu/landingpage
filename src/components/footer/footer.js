import { IconName } from "react-icons/fa";
import { FaFacebookF, FaBloggerB, FaGoogle} from 'react-icons/fa'

import footer from './footer.css';

const Footer = () => {
  return (
    <>
        <div className='copy'>
         Copyright 2023,All rights reserved by CloudECS Infotech Pvt Ltd.
         <img id='blackimg' src='./image -2-.png' alt=''/>
        </div>
        <div className='icon'>
        <FaFacebookF />
        <FaBloggerB />
        <FaGoogle />
        <br/>
        </div>
    </>
  )
}

export default Footer