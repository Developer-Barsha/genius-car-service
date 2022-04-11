import React,{useState, useEffect}  from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[]);
    return (
        <div>
            <h2>Srvices {services.length}</h2>
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;