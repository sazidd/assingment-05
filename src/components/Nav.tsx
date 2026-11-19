import React from 'react';
import Logo from "../assets/logo-text.png";


const Nav = () => {
    return (
        <nav className="container mx-auto flex justify-between">
            <img src={Logo} alt="" />

            <ul className="flex gap-4 items-center">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex justify-around gap-3">
                <button className="btn btn-soft rounded-2xl">Sign In</button>
                <button className="btn btn-secondary rounded-2xl">Sign Up</button>
            </div>
            


        </nav>
    
    );
};

export default Nav;