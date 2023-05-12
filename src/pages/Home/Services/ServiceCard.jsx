import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id,title, img, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className='text-lg text-orange-500'>Price : $ {price}</h2>
                <div className="card-actions justify-end">
                   <Link to={`/checkout/${_id}`}> <button className="btn btn-warning">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;