import React, {useRef} from 'react';
import About from './About';
import Footer from './Footer';

const { tableau } = window;

function AllTime(){

    const ref = useRef(null)

    function initViz(){
        new tableau.Viz(ref.current, 'https://public.tableau.com/static/images/To/Top50NFLFantasyPlayers/Dashboard1/1.png')
    }

    return(
        <div>
            <header className="bg-primary-nfl bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">All Time Fantasy Greats</h1>
                    <p className="lead">How do all time NFL legends stand up in terms of Fantasy Football performance?</p>
                </div>
            </header>

            <section>
                <div ref={ref}>

                </div>
            </section>

            <About />
            <Footer />
        </div>
    );
}

export default AllTime;