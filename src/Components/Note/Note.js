import React from 'react';

const Note = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('http://localhost:5000/all-data')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                </Card.Body>
                <Card.Body>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <Card.Link href="#">Card Link</Card.Link>

                </Card.Body>
            </Card>
            {/* 
      <Outlet></Outlet>
      <h1>ki jani {data.length} </h1> */}
        </div>



    );
};

export default Note;