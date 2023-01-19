import { useState } from 'react';


import form from './form.css';


import React from 'react'

const Form = () => {
        const[companyName, setCompanyName]= useState('')
        const[companCin, setCompanyCin]= useState('')
        const[services, setServices]= useState('')
        const[fullName, setFullName]= useState('')
        const[mobileNo, setMobileNo]= useState('')
        const[email, setEmail]= useState('')
        const[error, setError]= useState(false)

        const handleSubmit=(e)=>{
            e.preventDefault(); 
            if(companyName==0||companCin==0||services==0||fullName==0||mobileNo==0||email==0){
                setError(true)
            }
            console.log("COMPANY NAME",companyName,"\nCOMPANY CIN",companCin,"\nSERVICES",services,"\nFULL NAME",fullName,"\nMOBILE NO",mobileNo,"\nEMAIL",email)
        }
  return (
    <>
    <div className='background1'>
        
            <div id='module1'>
                <img id='ecsimg' src='/Cloudecs-logo-whitebg-removebg-preview.png' alt=' '/>
                <br/>
                <button className='growbutton'>GROW TOGETHER !</button><br/>
                <p className='para'>POWERFUL,INTEGRATED ACCOUNTING,<br/>
                CRM AND HRMS SOFTWARE'S AND 
                DIGITAL MARKETING SOLUTIONS
                FOR YOUR BUSINESS GROW.</p>
                <p className='para2'>Accounting, Finance, Inventory CRM And Marketing Automation HRMS 
                    <br/>And Payroll API's , Webhooks And Customization Digital Marketing Solution</p>
                <div>
                    <img src='/Zoho_-_Authorised_-_Partner-removebg-preview -1-.png' alt=''/>
                </div>
            </div>
            <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form'>
                            <div className='field1'>
                                <label>Company Name *</label>
                                <input onChange={e=>setCompanyName(e.target.value)} type="text" name='Companyname' placeholder='Company name'/><br/><br/>
                                {error&&companyName.length<=0?
                                <p className='p1'>*Companyname can't be empty</p>:""}
                            </div>
                            
                            <div className='field2'>
                                <label>Company CIN *</label>
                                <input onChange={e=>setCompanyCin(e.target.value)} type="number" name='Companycin' placeholder='Company CIN'  /><br/><br/>
                                {error&&companCin.length<=0?
                                <p className='p2'>*Company CIN can't be empty</p>:""}
                            </div>
                            <div className='field3'>
                                <label>Tell Us More About
                                </label>
                                <input onChange={e=>setServices(e.target.value)} type="text" name='services'  placeholder='Tell Us More About Products/Services Your company Offer' />
                                {error&&services.length<=0?
                                <p className='p3'>*This field can't be empty</p>:""}
                                <br/><br/>
                            </div>
                            <div className='field4'>
                                <label>Full Name *</label>
                                <input onChange={e=>setFullName(e.target.value)} type="text" name='Fullname' placeholder='Full Name' /><br/><br/>
                                {error&&fullName.length<=0?
                                <p className='p4'>*Please enter your Full Name</p>:""}
                            </div>
                            <div className='field5'>
                                <label>Your Mobile *</label>
                                <input onChange={e=>setMobileNo(e.target.value)} type="number" name='Yourmobile' placeholder='Your Mobile'  /><br/><br/>
                                {error&&mobileNo.length<=0?
                                <p className='p5'>*Please enter your mobile number</p>:""}
                            </div>
                            <div className='field6'>
                                <label>Your Work Email</label>
                                <input onChange={e=>setEmail(e.target.value)} type="email" name='email' placeholder='Email'  /><br/><br/>
                                {error&&email.length<=0?
                                <p className='p6'>*Please Enter Your Email</p>:""}
                            </div>
                            <button className='formbutton'>Get Your Offer</button>
                        </div>
                    </form>
            </div>
    </div>
    </>
  )
  }
export default Form;


