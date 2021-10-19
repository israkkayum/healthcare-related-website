import React from 'react';
import { Row } from 'react-bootstrap';
import DoctorImg from '../../images/doctors/doctor1.png';
import Doctor from '../Doctor/Doctor';

const doctors = [
    {
        img: DoctorImg,
        name: 'Joshua Clark',
        expertize: 'Anesthesiologist'
    },
    {
        img: DoctorImg,
        name: 'Steven Jacob',
        expertize: 'Anesthesiologist'
    },
    {
        img: DoctorImg,
        name: 'Emma Bunton',
        expertize: 'Allergist'
    },
    {
        img: DoctorImg,
        name: 'Emily Haden',
        expertize: 'Neurosurgeon'
    },
    {
        img: DoctorImg,
        name: 'Thomas Paul',
        expertize: 'Allergist'
    },
    {
        img: DoctorImg,
        name: 'David James',
        expertize: 'Anesthesiologist'
    },
    {
        img: DoctorImg,
        name: 'Zhala Conner',
        expertize: 'Allergist'
    },
    {
        img: DoctorImg,
        name: 'Nichoals Pepe',
        expertize: 'Allergist'
    },
]

const Doctors = () => {
    return (
        <div className='container mb-5'>
        <h2 className='my-5' style={{textAlign:'center'}}>Our Doctors</h2>
      <Row xs={1} md={2} className="g-4">
      {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >
                    </Doctor>)
                }
     </Row>
    </div>
    );
};

export default Doctors;