import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthPro/AuthPro';
import './NavBar.css';
import { Image } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from 'react';

const NavBar = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const { user, usersLogin, photoURL } = useContext(AuthContext);
    return (
        <div>
            <div className='navb d-flex justify-content-between align-items-center p-2'>
                <div className='container d-flex justify-content-between'>
                    <div className=' d-flex  align-items-center'>
                        <Link to='/' classname="navbar-brand" href="#">
                            <img src="logo.png" alt="Logo" width="70" height="64" classname="logo"></img>

                        </Link>
                        <h4 className='options'>Pro-Academy</h4>
                        <Link className='options p-2 ps-5' to='/SignIn'><h6> Sign In</h6></Link>
                    </div>
                    <div className='d-flex align-items-center' >
                        <Link className='options p-2' to='/Home'><h6>Home</h6></Link>
                        <Link className='options p-2' to='/Courses'><h6>Courses</h6></Link>
                        <Link className='options p-2' to='/FAQ'><h6>FAQ</h6></Link>
                        <Link className='options p-2' to='/Blog'><h6>Blog</h6></Link>
                        <Link className='options p-2'><h6>{user?.displayName}</h6></Link>
                        {
                            user.photoURL ?
                                <Image onMouseOver={user.displayName} style={{ height: "35px" }} roundedCircle src={user.photoURL}></Image>
                                : <BsFillPersonFill></BsFillPersonFill>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;