import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthPro/AuthPro';
import './NavBar.css';
import { Button, Image } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GoogleAuthProvider } from 'firebase/auth';

const NavBar = () => {
    const { user, usersLogin, logOut } = useContext(AuthContext);
    const hlogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const googleProvider = new GoogleAuthProvider();
    const forGoogle = () => {
        usersLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
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

                        {/* {
                            user?.photoURL ?
                                <Image onMouseOver={user?.displayName} style={{ height: "35px" }} roundedCircle src={user.photoURL}>

                                </Image>
                                : <BsFillPersonFill></BsFillPersonFill>
                        } */}

                        <NavDropdown className='ps-2' title={
                            user?.photoURL ?
                                <Image onMouseOver={user?.displayName} style={{ height: "35px" }} roundedCircle src={user.photoURL}>

                                </Image>
                                : <BsFillPersonFill style={{ height: "35px" }}></BsFillPersonFill>
                        } id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1"><Link className='options p-2'>

                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span><br />
                                            <Link className='options p-2' onClick={hlogOut}>Log out</Link>
                                        </>
                                        : <>
                                            <Link className='options ' variant="primary" to='/SignIn'><h6> Sign In</h6></Link>
                                            <Link className='options ' variant="primary" to='/SignUp'><h6> Sign Up</h6></Link>
                                        </>
                                }
                            </Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2"></NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3"><Button onClick={forGoogle} variant="primary" type="button">
                                Sign In With GitHub
                            </Button></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4"><Button onClick={forGoogle} variant="primary" type="button">
                                Sign In With Google
                            </Button></NavDropdown.Item>

                        </NavDropdown>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavBar;