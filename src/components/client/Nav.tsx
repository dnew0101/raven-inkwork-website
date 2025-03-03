"use client";
import NavButton from './NavButton';
import NavLinks from './NavLinks';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <nav className='w-2/5 xl:w-1/3 flex justify-end mr-4'>
                <ul className='nav-links w-full hidden lg:flex justify-between mr-2'>
                    <NavLinks />
                </ul>
                <div className='lg:hidden'>
                    <NavButton getClicked={isOpen}
                    setClicked={toggleNav} />
                </div>
            </nav>
            {isOpen && (
                <ul className={`flex h-[50vh] basis-full flex-col items-center justify-evenly`}>
                    <NavLinks />
                </ul>
            )}
        </>
    );
}

export default Nav;
