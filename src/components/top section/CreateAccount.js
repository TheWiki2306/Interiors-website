import React from 'react';
import { Link } from 'react-router-dom';
import './topSection.css';

const CreateAccount = () => {
    return (
        <div>
            <Link to="/signup">
                <h5 className='create'>Create account</h5>
            </Link>
        </div>
    )
}

export default CreateAccount;
