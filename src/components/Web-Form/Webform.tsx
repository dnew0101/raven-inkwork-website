"use client";
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Webform = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();

    const serviceId = process.env.SERVICE_ID || '';
    const templateId = process.env.TEMPLATE_ID || '';
    const publicKey = process.env.PUBLIC_KEY || '';

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='Webform-Container flex flex-col justify-center items-center border-2 border-white rounded px-4 pb-4 gap- w-[80%]'>
            <Image
                src={'/Home-Page-Assets/Raven-Question.png'}
                width={300}
                height={400}
                alt='Picture of Raven being curious.'
            />
            
            <form 
            action="" 
            name='Client Inquiry Form' 
            onSubmit={sendEmail}
            className='flex flex-col w-full gap-6 items-center'
            >
                <div className='flex flex-col w-full'>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="email" 
                        name='sender_name' 
                        id='name' 
                        className='bg-white text-black px-2'
                        required>
                    </input>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="emailFrom">Email:</label>
                    <input 
                        type="email" 
                        name='email_from' 
                        id='emailFrom' 
                        className='bg-white text-black px-2'
                        required>
                    </input>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        name="inquiry_message" 
                        id="message" 
                        rows={5}
                        cols={30}
                        className='bg-white text-black px-2'
                        required>    
                    </textarea>
                </div>
                    <button 
                        type='submit' 
                        className='bg-black border-2 border-white w-full sm:w-fit py-2 px-[15%] cursor-pointer
                        active:w-[0%] active:opacity-0 transition-all duration-500 ease-in-out'>
                            Submit
                    </button>
            </form>
        </div>
    )
}

export default Webform;