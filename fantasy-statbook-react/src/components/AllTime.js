import React from 'react';
import About from './About';
import Footer from './Footer';

function AllTime(){
    return(
        <div>
            <header className="bg-primary-nfl bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">All Time Fantasy Greats</h1>
                    <p className="lead">How do all time NFL legends stand up in terms of Fantasy Football performance?</p>
                </div>
            </header>
            <About />
            <Footer />
        </div>
    );
}

export default AllTime;