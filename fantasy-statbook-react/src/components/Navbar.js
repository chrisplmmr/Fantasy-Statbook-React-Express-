import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="">Fantasy Statbook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/players">Players</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/matchup">Matchup</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/adp">ADP Value</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/alltime">All Time</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;