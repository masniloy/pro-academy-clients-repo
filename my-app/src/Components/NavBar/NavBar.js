import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
            <div className='navb d-flex justify-content-between align-items-center p-2'>
                <div className='container d-flex justify-content-between'>
                    <div className=' d-flex  align-items-center'>
                        <Link to='/' classname="navbar-brand" href="#">
                            <img src="logo.png" alt="Logo" width="70" height="64" classname="logo"></img>

                        </Link>
                        <h4 className='options'>Pro-Academy</h4>
                    </div>
                    <div className='d-flex align-items-center' >
                        <Link className='options p-2' to='/Home'><h6>Home</h6></Link>
                        <Link className='options p-2' to='/Courses'><h6>Courses</h6></Link>
                        <Link className='options p-2' to='/FAQ'><h6>FAQ</h6></Link>
                        <Link className='options p-2' to='/Blog'><h6>Blog</h6></Link>
                        {/* <Link className='options p-2' to='/'><h6>FAQ</h6></Link>
                    <Link className='options p-2' to='/'><h6>FAQ</h6></Link> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;