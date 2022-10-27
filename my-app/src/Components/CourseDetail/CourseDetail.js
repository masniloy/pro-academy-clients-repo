import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const singleData = useLoaderData();
    console.log(singleData);
    return (
        <div>
            <h1>ki jani</h1>
        </div>
    );
};

export default CourseDetail;