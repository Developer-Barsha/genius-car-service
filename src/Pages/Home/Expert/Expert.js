import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div class="card col-sm-12 col-md-6 col-lg-4 m-2 my-3 p-2 mx-auto" style={{width: '18rem'}}>
            <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Contact</a>
                </div>
        </div>
    );
};

export default Expert;