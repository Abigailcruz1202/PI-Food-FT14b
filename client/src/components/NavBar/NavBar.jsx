import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

export default function NavBar(){
    return(
        <header className="headernav">
            <div>
                <NavLink to='/'>
                    <img src='https://3.bp.blogspot.com/-nUAclrMGYgA/WDFs8bs3RxI/AAAAAAAAA7s/rDuNYtP1XJcNScR-ojcO5_W0VZXxztuwQCLcB/w1200-h630-p-k-no-nu/139.-Wavy-Letter-F-Gaming-Concept-Logo.png' width="50" height="50"  alt="logo F" />
                </NavLink>
            </div>
            <nav>
                <ul className='list'>
                    <li className='list-item'>
                        <NavLink to="/home" >Home</NavLink>
                        <NavLink to="/filter-a-z" >A-Z</NavLink>
                        <NavLink to="/filter-z-a" >Z-A</NavLink>
                        <NavLink to="/typesdiets" >TypesDiets</NavLink>
                        <NavLink to='/createrecipe' >Create Recipe</NavLink>
            <SearchBar />
                    </li>
                </ul>
            </nav>
        </header>
    )
}