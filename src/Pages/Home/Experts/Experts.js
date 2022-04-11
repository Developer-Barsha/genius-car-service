import React from 'react';
import './Experts.css';

import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Jackson Michel', img: expert1 },
        { id: 2, name: 'John Smith', img: expert2 },
        { id: 3, name: 'Gary Liyon', img: expert3 },
        { id: 4, name: 'Chris Rock', img: expert4 },
        { id: 5, name: 'David Hodson', img: expert5 },
        { id: 6, name: 'Kim Jisoo', img: expert6 },
    ];
    return (
        <div>
            <h2>Our Experts</h2>
            <div className="experts-container">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;