import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <p>Accept our terms and conditions</p>
            <p>Return to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;