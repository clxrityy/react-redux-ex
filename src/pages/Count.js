import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';
import FourTwenty from '../components/FourTwenty';
import './css/Count.css';

const Count = () => {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    return (
        <div className='Count'>
            <div className='count-left'>
                <div className='current'>
                    <h1>
                        Current Count: <span>
                            {counter}
                        </span>
                    </h1>
                </div>
                <div className='add-sub'>
                    <div className='add'>
                        <button
                            onClick={() => dispatch(increment())}
                            className='add-btn'
                        >
                            + 1
                        </button>
                        <button
                            onClick={() => dispatch(increment(5))}
                            className='add-btn'
                        >
                            + 5
                        </button>
                    </div>
                    <div className='subtract'>
                        <button
                            onClick={() => dispatch(decrement())}
                            className='sub-btn'
                        >
                            - 1
                        </button>
                        <button
                            onClick={() => dispatch(decrement(5))}
                            className='sub-btn'
                        >
                            - 5
                        </button>
                    </div>
                </div>
            </div>

            <div className='count-right'>
                <FourTwenty />
            </div>
        </div>
    );
};

export default Count;