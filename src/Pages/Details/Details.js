import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();
    return (
          <div className="App container my-5">
               <h2>{serviceId}</h2>
          </div>
    );
};

export default Details;