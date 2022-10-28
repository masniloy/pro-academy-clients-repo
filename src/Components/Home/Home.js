import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://downloader.la/temp/[Downloader.la]-6359564376363.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='home'>Learn without limits</h3>
                        <p className='home'>Programming languages, are defined through the use of syntactic and semantic rules, to determine structure and meaning.</p>
                        <Link className='button mt-5' to='/Courses'> Start Learning</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://downloader.la/temp/[Downloader.la]-6359571b4c42e.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='home'>Learn what you want.</h3>
                        <p className='home'>A programming language is an artificial language that can be used to control the behaviour of a machine.</p>
                        <Link className='button mt-5' to='/Courses'> Start Learning</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://downloader.la/temp/[Downloader.la]-63595afca98cf.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='home'>Best way to learn</h3>
                        <p className='home'>
                            Programming are used to facilitate about the task of organizing & manipulating information.
                        </p>
                        <Link className='button mt-5' to='/Courses'> Start Learning</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;