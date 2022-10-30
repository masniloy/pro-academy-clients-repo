import React from 'react';

const PreName = ({ course }) => {
    const { name, } = course;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default PreName;