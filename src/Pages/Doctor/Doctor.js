import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, img, expertize } = doctor;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <h5 className="text-danger">{expertize}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Doctor;