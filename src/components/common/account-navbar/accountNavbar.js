import React from "react";
import './accountNavbar.css';
import { Button } from "../Button";
import { Link } from "react-router-dom";


function aNavigationB () {
  return (
    <header className="header">
        <Link to='/home'><a href='/home' className="logo">T Bank Inc.</a></Link>
        <nav className="navbar">
            <a href="/home">Home</a>
            <a href="/">About</a>
            <a href="/">Documentation</a>
            <a href="/">Contact</a>
            

        </nav>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Sign out 
          </Button>
    </header>
  );
}

export default aNavigationB;
