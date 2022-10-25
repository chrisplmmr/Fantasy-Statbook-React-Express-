import React from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import PracticeData from './PracticeData';

function Home(){
    return(
        <div>
            <Header />
            <About />
            <Footer />
            <PracticeData />
        </div>
    );
}

export default Home;