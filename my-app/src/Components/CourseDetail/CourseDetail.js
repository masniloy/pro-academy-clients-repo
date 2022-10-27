import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const singleData = useLoaderData();
    const { id, } = singleData;
    return (
        <div>
            <h1>ki jani {id}</h1>
        </div>
    );
};

export default CourseDetail;