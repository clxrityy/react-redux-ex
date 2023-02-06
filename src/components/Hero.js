import React from 'react';
import './css/Hero.css';
import { AiFillGithub } from 'react-icons/ai';

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='code-snippet'>
                <pre>
                    <code>
                        <span>
                            npm install {''}
                        </span>
                        react-redux
                    </code>
                </pre>
            </div>
            <div className='reference'>
                <a href='https://github.com/zalmoxisus/redux-devtools-extension' target='_blank' rel='noreferrer'>
                    <AiFillGithub
                        style={{ width: '15px', height: '15px', color: '#165288' }}
                    />
                    {' '}
                    zalmoxisus/redux-devtools-extension
                </a>
            </div>
        </div>
    );
};

export default Hero;