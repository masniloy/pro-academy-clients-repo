import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Coursel from '../Coursel/Coursel';


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <Container>
            <Row className=''>
                <Col lg='3' className=''>
                    <h2 className='mt-2 list'>Course List</h2>
                    {
                        courses.map(course => <Coursel
                            key={course?.id}
                            course={course}
                        ></Coursel>)
                    }
                </Col>

                <Col lg='9'>
                    <Row xs={1} md={3}>
                        {
                            courses.map(course => <Course
                                key={course?.id}
                                course={course}
                            ></Course>)
                        }
                    </Row>

                </Col>


            </Row>
        </Container >
    );
};

export default Courses;