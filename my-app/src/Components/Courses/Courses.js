import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <Container>
            <Row className=''>

                <Col lg='9'>
                    <h2>All Courses</h2>
                    <Row xs={1} md={3}>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                        }
                    </Row>


                </Col>

                <Col lg='3'>
                    <h2>second one</h2>
                </Col>
            </Row>
        </Container >
    );
};

export default Courses;