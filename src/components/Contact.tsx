import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-g'>
                <h2 className='text-5xl'>Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt2'>
                    Drop me a Message and ill respond you soon
                </p>
                <div className='flex gap-3 items-center'>
                   <MdOutlineMailOutline  size={30}/> khurramghufran@gmail.com
               </div>
               <div className='flex gap-3 items-center'>
                  < FaPhoneAlt size={20}/> 0333-1268628
               </div>
                
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>

                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>
                    
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                    className='bg-transparent border border-accent'
                    id='message' rows={8}>
                    </textarea>
                </div>
                <button className='bg-emerald-500 p-2 px-6'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
