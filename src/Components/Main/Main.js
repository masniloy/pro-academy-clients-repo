import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Main = () => {
    return (
        <div>

            <NavBar></NavBar>
            <Outlet></Outlet><br />
        </div>
    );
};

export default Main;