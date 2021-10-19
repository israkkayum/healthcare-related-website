import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    console.log('clicked')

    useEffect(() =>{
        fetch('./details.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        });
}, []);

    return (
        <div className='container mb-5' id='services'>
            <h2 className='my-5' style={{textAlign:'center'}}>Our Services</h2>
          <Row xs={1} md={2} className="g-4">
            {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
            }
         </Row>
        </div>
    );
};

export default Services;