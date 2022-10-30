import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import PdfDownload from '../PdfDownload/PdfDownload';

const CourseDetail = () => {
    const singleData = useLoaderData();
    const { id, image, name, description, price, tclass } = singleData;
    return (
        <div className='container mb-5' id="downloadpage">
            <h1 className='d-flex justify-content-start'>{name}</h1>
            <PdfDownload courseid="downloadpage" filename={"courseDetail"}></PdfDownload>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>

                <h4 className="d-flex justify-content-start ps-4"><b>Price: {price}</b></h4>
                <h6 className="d-flex justify-content-start ps-4 text-muted">Total Class: {tclass}</h6>
                <Link className='buttons mt-5' to={'/Premium'}><b> Get Premium $</b></Link>
            </Card>

        </div>
    );
};

export default CourseDetail;