
import contact from './contact.css';

const Contact = () => {
  return (
    <>
       <div id='contact'>
            <div className='flex1'>
                 <h1>Contact Us</h1>
            </div>
            <div className='flex2'>
                <h2>Where are we?</h2>
                <img id='ecsimg' src='/Cloudecs-logo-whitebg-removebg-preview.png' alt=''/>
                <p>766,Sakthi Tower,
                        <br/>Tower-2,6th floor,
                        <br/>Anna salai,Chennai-600002.</p>
            </div>
            <div className='flex3'>
                <h2>Mobile</h2>
                <p>+91 9361365818, </p>
                <p>+91 8148965818.</p>
                <p>E-mail</p>
                <p>raaj@ecscloudinfotech.com</p>
            </div>
        </div>

    </>
  )
}

export default Contact