"use client";
import { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

const publicSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

const Webform = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
        alert('Please complete the CAPTCHA.');
        return;
    }

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
        .then((result) => {
            console.log(result.text);
            setIsModalOpen(true);
        }, (error) => {
            console.error('Error sending email:', error.text);
            alert('An error occurred while submitting the form. Please try again.');
        });
    };

    return (
        <div className='Webform-Container flex flex-col justify-center items-center border-2 border-white rounded px-4 pb-4 w-[80%] sm:w-[60%] md:w-[55%] xl:w-[40%] mt-8'>
            <Image
                src={'/assets/Home-Page-Assets/Raven-Question.png'}
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
                <ReCAPTCHA
                    sitekey={publicSiteKey || ''}
                    onChange={handleCaptchaChange}
                    theme='dark'
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
            <Modal
                open={isModalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        p: 4,
                        textAlign: 'center',
                    }}
                    className='flex flex-col justify-center items-center bg-black text-white h-auto border-2 border-white rounded-lg'
                >
                    <Typography id="modal-title" variant="h4" component="h2">
                        Thank You!
                    </Typography>
                    <div className='flex justify-center items-center bg-neutral-200 rounded-full py-4 mt-4'>
                        <Image
                            src={'/assets/Global-Assets/Email-Sent.png'}
                            width={150}
                            height={150}
                            alt='Email sent confirmation photo.'
                            className='rounded-full'
                        />
                    </div>
                    <Typography id="modal-description" sx={{ mt: 2 }} className='pt-6'>
                        Your message has been successfully sent! We will get back to you shortly.
                    </Typography>
                    <Link href="/">
                        <Button
                            variant="contained"
                            color='info'
                            onClick={handleModalClose}
                            sx={{ mt: 3 }}
                            className='bg-black border-2 border-white w-[20vw] md:w-[10vw] px-2 py-1'
                        >
                            Close
                        </Button>
                    </Link>
                </Box>
            </Modal>

        </div>
    );
};

export default Webform;