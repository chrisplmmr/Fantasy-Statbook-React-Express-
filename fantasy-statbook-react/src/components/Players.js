import React from 'react';
import About from './About';
import Footer from './Footer';

function Players(){
    return(
        <div>
            <header className="bg-primary-nfl bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">Seasonal Player Graphs</h1>
                    <p className="lead">Visually compare position group performances.</p>
                </div>
            </header>

            <About />
            {/* TableuaGraphs */}
            <Footer />
        </div>
    );
}

export default Players;