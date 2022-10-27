import React from 'react';
import { Button } from 'react-bootstrap';
import './Coursel.css';

const Coursel = ({ course }) => {
    const { name } = course;
    return (
        <div>
            <Button className='namebt m-2' variant="outline-danger">{name}</Button>{' '}
        </div>
    );
};

export default Coursel;