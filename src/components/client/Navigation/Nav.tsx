"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Dynamic imports from heavier modules
 */
const AnimatePresence = dynamic(() => import('framer-motion').then(mod => mod.AnimatePresence));
const NavButton = dynamic(() => import('./NavButton'));
const NavLinks = dynamic(() => import('./NavLinks'));

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!isOpen);
    };

    /**
     * Framer motion constraints; initial, animate, and exit states (returns to initial value).
     */
    const menuVariants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.5,
            },
        }
    };

    return (
        <>
            <nav className='w-1/2 lg:w-1/3 flex justify-end mr-4'>
                <div className='z-20'>
                    <NavButton getClicked={isOpen}
                    setClicked={toggleNav} />
                </div>
            </nav>

            {/*
            * This is the mobile menu container. When the button is clicked, the menu will appear.
            * It uses framer motion for some of the intuitive animations.
            */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                    className='fixed left-0 top-0 w-full h-screen origin-top bg-black bg-opacity-90'
                    variants={menuVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'>
                        <NavLinks
                        getClicked={isOpen}
                        setClicked={toggleNav}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Nav;
