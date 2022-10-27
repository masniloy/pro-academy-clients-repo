import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Course.css';
const Course = ({ course }) => {
    const { id, name, image, price, tclass } = course;
    console.log(id);
    return (
        <div>
            <Row className="g-4 mt-1 mb-3">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <small className=""><b>{price}</b></small>
                                    <small className="text-muted">Total Class: {tclass}</small>
                                </div><br />
                                <Link className='buttons mt-5' to={`${id}`}> More Details</Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Course;