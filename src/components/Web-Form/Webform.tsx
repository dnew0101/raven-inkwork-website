"use client";
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Turnstile } from "@marsidev/react-turnstile";

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const AnimatePresence = dynamic(() => import('framer-motion').then((mod) => mod.AnimatePresence), { ssr: false });

const Webform = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [cacheKey, setCacheKey] = useState<number>(Date.now());

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    {/* 
        Reset the cache key when the component mounts to ensure a new Turnstile instance is created. 
    */}
    useEffect(() => {
        setCacheKey(Date.now());
      }, []);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!captchaToken) {
          alert('Please complete the CAPTCHA.');
          return;
        }
    
        try {
          const captchaValidationResponse = await fetch('/api/validate-turnstile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: captchaToken }),
          });
    
          const validationResult = await captchaValidationResponse.json();
    
          if (!validationResult.success) {
            alert('Failed CAPTCHA verification. Please try again.');
            return;
          }
    
          const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || '';
          const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
          const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    
          emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
            .then(() => {
              setIsModalOpen(true);
            }, (error) => {
              console.error('Error sending email:', error.text);
              alert('An error occurred while submitting the form. Please try again.');
            });
        } catch (error) {
          console.error('Error validating CAPTCHA:', error);
          alert('An error occurred while validating the CAPTCHA. Please try again.');
        }
      };

    return (
        <div className='Webform-Container flex flex-col justify-center items-center border-2 border-white rounded px-4 pb-4 w-[80%] sm:w-[60%] md:w-[55%] xl:w-[40%] mt-8'>
            <Image
                src={'/Home-Page-Assets/Raven-Question.png'}
                width={300}
                height={300}
                alt='Picture of Raven being curious.'
                priority
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
                        type="text" 
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

                <Turnstile
                    key={`turnstile-${cacheKey}`}
                    as={'div'}
                    siteKey={'0x4AAAAAABC7pwe4vx6WrlbY'}
                    onSuccess={(token) => setCaptchaToken(token)}
                    onError={() => setCaptchaToken(null)}
                    onExpire={() => setCaptchaToken(null)}
                    options={{
                        theme: 'dark',
                        size: 'normal',
                        language: 'en',
                    }}
                    scriptOptions={{
                        appendTo: 'head',
                        async: true,
                        defer: true,
                    }}
                    className="w-full h-full"
                />

                <button 
                    type='submit'
                    className= {`bg-black border-2 border-white w-[90%] sm:w-fit py-2 px-[15%] cursor-pointer
                    hover:px-[19%] hover:rounded-xl transition-all duration-300 ease-in-out`}>
                        <span 
                            className='text-neutral-100 tracking-wide font-light h-full w-full block relative'
                        >
                            Submit
                        </span>
                </button>
            </form>
            <div>

            </div>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <MotionDiv
                        className="modal fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-40"
                        onClick={handleModalClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <MotionDiv
                            className="modal-content relative h-auto w-[90%] sm:w-[50%] bg-black text-white border-2 border-white rounded-lg p-6"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            <button
                                className="absolute top-2 right-2 text-white text-2xl opacity-80
                                hover:scale-125 hover:opacity-100 transition-all duration-200 rounded-full p-2"
                                onClick={handleModalClose}
                            >
                                &times;
                            </button>
                            <h4 className="text-2xl font-bold mb-4 text-center">Thank You!</h4>
                            <div className='flex justify-center items-center bg-neutral-200 rounded-full py-4 mt-4'>
                                <Image
                                    src={'/Global-Assets/Email-Sent.png'}
                                    width={150}
                                    height={150}
                                    alt='Email sent confirmation photo.'
                                    className='rounded-full'
                                />
                            </div>
                            <p className="text-center mt-4">
                                Your message has been successfully sent! We will get back to you shortly.
                            </p>
                            <Link href="/">
                                <button
                                    className="bg-black border-2 border-white w-full py-2 mt-4 text-white hover:bg-white hover:text-black transition-all duration-300"
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                            </Link>
                        </MotionDiv>
                    </MotionDiv>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Webform;
