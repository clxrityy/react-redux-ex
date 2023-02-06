import React from 'react';
import { useSelector } from 'react-redux';
import { weed } from '../assets';

const FourTwenty = () => {

    const counter = useSelector(state => state.counter);

    if (counter === 420) {
        return (
            <div className='secret-div'>
                <img src={weed} alt='weed' className='weed' />
            </div>
        );
    }
    else {
        return (
            <div>

            </div>
        );
    };
};

export default FourTwenty;