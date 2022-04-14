import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div style={{height:'400px'}} className='d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant='info' size="sm" />
            <Spinner animation="grow" variant='primary' />
        </div>
    );
};

export default Loading;