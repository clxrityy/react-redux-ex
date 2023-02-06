import React from 'react';
import './css/Color.css';
import { useSelector, useDispatch } from 'react-redux';
import { colorRed, colorOrange, colorYellow, colorGreen, colorBlue, colorPurple } from '../actions';

const Color = () => {

    const color = useSelector(state => state.color);

    const dispatch = useDispatch();

    const current = () => {
        if (color === 'RED') {
            return {
                color: 'red'
            }
        }
        else if (color === 'ORANGE') {
            return {
                color: 'orange'
            }
        }
        else if (color === 'YELLOW') {
            return {
                color: 'yellow'
            }
        }
        else if (color === 'GREEN') {
            return {
                color: 'green'
            }
        }
        else if (color === 'BLUE') {
            return {
                color: 'blue'
            }
        }
        else if (color === 'PURPLE') {
            return {
                color: 'purple'
            }
        }
    }

    return (
        <div className='Color'>

            <div className='color-head'>
                <h1
                    style={current()}
                >
                    Pick a color!
                </h1>
            </div>
            <div className='color-options'>

                <button className='red'
                    onClick={() => dispatch(colorRed())}
                >

                </button>
                <button className='orange'
                    onClick={() => dispatch(colorOrange())}
                >

                </button>
                <button className='yellow'
                    onClick={() => dispatch(colorYellow())}
                >

                </button>
                <button className='green'
                    onClick={() => dispatch(colorGreen())}
                >

                </button>
                <button className='blue'
                    onClick={() => dispatch(colorBlue())}
                >

                </button>
                <button className='purple'
                    onClick={() => dispatch(colorPurple())}
                >

                </button>

            </div>
        </div>
    );
};

export default Color;