import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

export default function Landing() {
    return (
        <div className='imagen'>
            <div className='titulo'>
                <h1>Foods Recipes</h1>
            </div>
            <div>
            <h2 className='h2Intro'>Here you will find a wide variety of recipes</h2>
                {/* Aquí encontraras una gran variedad de recetas */}
            </div>
            <div className='div-boton'>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}