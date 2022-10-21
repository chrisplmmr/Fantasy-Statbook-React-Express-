import React from 'react';
import About from './About';
import Footer from './Footer';

function Adp(){
    return(
        <div>
            <header className="bg-primary-nfl bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">ADP</h1>
                    <p className="lead">Visualization of Fantasy Football Stats</p>
                </div>
            </header>

            <About />
            <Footer />
        </div>
    );
}

export default Adp;