import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

export default function Landing() {
    return (
        <div className='imagen'>
            <div className='titulo'>
                <h1>Foods Recipes</h1>
            </div>
            <div className='boton'>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}