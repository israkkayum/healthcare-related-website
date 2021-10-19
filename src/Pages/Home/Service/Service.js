import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, title, img, detail } = service;
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {detail}
          </Card.Text>
          <Link to={`/details/${title}`}>
                <button className="btn btn-warning">Read More</button>
            </Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;