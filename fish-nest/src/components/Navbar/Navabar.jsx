import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navabar = () => {
    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lx:px-24 py-4 flex justify-between items-center '>
                <div className='text-lg font-bold'>
                    <Link to="/">fish-nest</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form action="">
                        <input className='w-full py-2 px-4' type='text' placeholder='search fishes'></input>
                        <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart"> <FaShoppingCart className='text-lg'></FaShoppingCart></Link>
                    <button className='hidden md:block'>Login | Register</button>
                    <button className='block md:hidden'><FaUser></FaUser></button>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-10 py-4 font-bold'>
                <NavLink className="hover:underline">Home</NavLink>
                <NavLink className="hover:underline">Shop</NavLink>
                <NavLink className="hover:underline">Contact</NavLink>
                <NavLink className="hover:underline">About</NavLink>
            </div>





        </nav>
     
    );
};

export default Navabar;