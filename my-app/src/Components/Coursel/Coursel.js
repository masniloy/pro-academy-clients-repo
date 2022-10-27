import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Coursel.css';
const Coursel = ({ course }) => {
    const { name, id } = course;
    return (
        <div>
            <Button to={`${id}`} className='namebt m-2' variant="outline-danger"><Link className='nu mt-5' to={`${id}`}> {name}</Link></Button>{' '}
        </div>
    );
};

export default Coursel;