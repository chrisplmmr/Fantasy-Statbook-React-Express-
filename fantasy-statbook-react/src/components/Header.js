import React from 'react';

function Header(){
    return(
        <header className="bg-primary-nfl bg-gradient text-white">
        <div className="container px-4 text-center">
            <h1 className="fw-bolder">Fantasy Statbook</h1>
            <p className="lead">Visualization of Fantasy Football Stats</p>
        </div>
        </header>
    );
}

export default Header;