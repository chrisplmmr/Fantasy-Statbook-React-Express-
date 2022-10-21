import React from 'react';
import About from './About';
import Footer from './Footer';

function Matchup(){
    return(
        <div>
            <header className="bg-primary-nfl bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">Player Stat Matchup</h1>
                    <p className="lead">Compare players statistics from multiple years</p>
                </div>
            </header>

            <section id="about">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2>Player Matchup</h2>
                            <p><i>Choose two players and compare their stats</i></p>
                            <div id="chartContainer"></div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row border rounded my-3 py-3">
                        <div className="col px-md-5"> 
                            <div className="row">        
                                <label for="years">Choose Year: </label>
                                <select id="yearsListOne" name="yearsListOne" onChange="checkDropDownYear(this)">
                                    <option value="NONE" selected>Select Year</option>
                                    <option value="/2019data">2019</option>
                                    <option value="/2018data">2018</option>
                                    <option value="/2017data">2017</option>
                                    <option value="/2016data">2016</option>
                                    <option value="/2015data">2015</option>
                                    <option value="/2014data">2014</option>
                                    <option value="/2013data">2013</option>
                                    <option value="/2012data">2012</option>
                                    <option value="/2011data">2011</option>
                                    <option value="/2010data">2010</option>
                                    <option value="/2009data">2009</option>
                                    <option value="/2008data">2008</option>
                                    <option value="/2007data">2007</option>
                                    <option value="/2006data">2006</option>
                                    <option value="/2005data">2005</option>
                                    <option value="/2004data">2004</option>
                                    <option value="/2003data">2003</option>
                                    <option value="/2002data">2002</option>
                                    <option value="/2001data">2001</option>
                                    <option value="/2000data">2000</option>
                                    <option value="/1999data">1999</option>
                                    <option value="/1998data">1998</option>
                                    <option value="/1997data">1997</option>
                                    <option value="/1996data">1996</option>
                                    <option value="/1995data">1995</option>
                                    <option value="/1994data">1994</option>
                                    <option value="/1993data">1993</option>
                                    <option value="/1992data">1992</option>
                                    <option value="/1991data">1991</option>
                                    <option value="/1990data">1990</option>
                                </select>
                            </div>
                            <div className="row"> 
                                <label for="years">Choose Player:</label>
                                <select id="playerListOne" name="playerListOne" onChange="">
                                    <option value="NONE" selected>Select Player</option>
                                </select> 
                            </div>
                        </div>
                        <div className="col px-md-5">
                            <div className="row">
                                <label for="years">Choose Year: </label>
                                <select id="yearsListTwo" name="yearsListTwo" onChange="checkDropDownYear(this)">
                                    <option value="NONE" selected>Select Year</option>
                                    <option value="/2019data">2019</option>
                                    <option value="/2018data">2018</option>
                                    <option value="/2017data">2017</option>
                                    <option value="/2016data">2016</option>
                                    <option value="/2015data">2015</option>
                                    <option value="/2014data">2014</option>
                                    <option value="/2013data">2013</option>
                                    <option value="/2012data">2012</option>
                                    <option value="/2011data">2011</option>
                                    <option value="/2010data">2010</option>
                                    <option value="/2009data">2009</option>
                                    <option value="/2008data">2008</option>
                                    <option value="/2007data">2007</option>
                                    <option value="/2006data">2006</option>
                                    <option value="/2005data">2005</option>
                                    <option value="/2004data">2004</option>
                                    <option value="/2003data">2003</option>
                                    <option value="/2002data">2002</option>
                                    <option value="/2001data">2001</option>
                                    <option value="/2000data">2000</option>
                                    <option value="/1999data">1999</option>
                                    <option value="/1998data">1998</option>
                                    <option value="/1997data">1997</option>
                                    <option value="/1996data">1996</option>
                                    <option value="/1995data">1995</option>
                                    <option value="/1994data">1994</option>
                                    <option value="/1993data">1993</option>
                                    <option value="/1992data">1992</option>
                                    <option value="/1991data">1991</option>
                                    <option value="/1990data">1990</option>
                                </select>
                            </div>
                            <div className="row">
                                <label for="years">Choose Player:</label>
                                <select id="playerListTwo" name="playerListTwo" onchange="">
                                    <option value="NONE" selected>Select Player</option>
                                </select> 
                            </div>
                        </div>
                        <div className="col px-md-5">
                            <div className="row">
                                <button className="btn btn-primary mt-3" id="submitBtn" type="button" onClick="matchupPlayers()">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row border rounded my-3 py-3">
                        <div className="col px-md-5">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="ageCheck" />
                                <label className="form-check-label" for="ageCheck">Age</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="gCheck" />
                                <label className="form-check-label" for="gCheck">Games</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="gsCheck" />
                                <label className="form-check-label" for="gsCheck">Games Started</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="cmpCheck" />
                                <label className="form-check-label" for="cmpCheck">Completions</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="recCheck" />
                                <label className="form-check-label" for="recCheck">Receptions</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="intCheck" />
                                <label className="form-check-label" for="intCheck">Interceptions</label>
                            </div>
                        </div>
                        <div className="col px-md-5">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="tgtCheck" />
                                <label className="form-check-label" for="tgtCheck">Targets</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="ydrecCheck" />
                                <label className="form-check-label" for="ydrecCheck">Yards/Reception</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="fumCheck" />
                                <label className="form-check-label" for="fumCheck">Fumbles</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="fumlsCheck" />
                                <label className="form-check-label" for="fumlsCheck">Fumbles Lost</label>
                            </div>
                        </div>
                        <div className="col px-md-5">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="pydsCheck" />
                                <label className="form-check-label" for="pydsCheck">Passing YDS</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="ptdsCheck" />
                                <label className="form-check-label" for="ptdsCheck">Passing TDs</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="pattCheck" />
                                <label className="form-check-label" for="pattCheck">Passing Att</label>
                            </div>
                        </div>
                        <div className="col px-md-5">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="rydsCheck" />
                                <label className="form-check-label" for="rydsCheck">Rushing YDS</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="rtdsCheck" />
                                <label className="form-check-label" for="rtdsCheck">Rushing TDs</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="rattCheck" />
                                <label className="form-check-label" for="rattCheck">Rushing Att</label>
                            </div>
                        </div>
                        <div className="col px-md-5">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="recydsCheck" />
                                <label className="form-check-label" for="recydsCheck">Receiving YDS</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="rectdsCheck" />
                                <label className="form-check-label" for="rectdsCheck">Receiving TDs</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="fpCheck" />
                                <label className="form-check-label" for="fpCheck">Fantasy Points</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About />
            {/* TableuaGraphs */}
            <Footer />
        </div>
    );
}

export default Matchup;