import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="card col-sm-12 col-md-6 col-lg-4 m-2 my-3 p-2 mx-auto" style={{width: '18rem'}}>
            <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Contact</a>
                </div>
        </div>
    );
};

export default Expert;