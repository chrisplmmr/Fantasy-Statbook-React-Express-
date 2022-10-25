import React from 'react';
import About from './About';
import Footer from './Footer';
import $ from 'jquery';
import anychart from 'anychart';

class Matchup extends React.Component {

    static xmap          = [1,4,5,6,7,14,10,13,16,17,18,19,20,21,22,23,24,25,26,27];
    static leftFileData  = [];
    static rightFileData = [];
    static xlabels = ['Player',
                        'Age', 
                        'Games', 
                        'Games Started', 
                        'Completions', 
                        'Receptions', 
                        'Interceptions',
                        'Targets', 
                        'Y/R', 
                        'Fumbles', 
                        'Fumbles Lost', 
                        'Pass. Yds', 
                        'Pass. TDs', 
                        'Pass. Att.',
                        'Rush. Yds.', 
                        'Rush. TDs', 
                        'Rush. Att.', 
                        'Rec. Yds.', 
                        'Rec. TDs', 
                        'Fantasy Points'
                    ];

    constructor(props){
        super(props);

        // State
        this.state = {
            switchVals: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            test: true
        };

        //Refs
        this.yearListOne = React.createRef();

        //Binds
        this.setSwitchVals = this.setSwitchVals.bind(this);
        this.matchupPlayers = this.matchupPlayers.bind(this);
        this.checkDropDownYear = this.checkDropDownYear.bind(this);
        this.isPlayersSelected = this.isPlayersSelected.bind(this);
        this.buildBarArray = this.buildBarArray(this);
        this.makeChart = this.makeChart.bind(this);
    }

    // When the SUBMIT button is pressed
    // Get all the values of the switches
    setSwitchVals(){
        var arr = [$("#ageCheck").is(":checked"),
                    $("#gCheck").is(":checked"),
                    $("#gsCheck").is(":checked")]
            // this.setState.switchVals[0] = $("#ageCheck").is(":checked");
            // this.switchVals[1] = $("#gCheck").is(":checked");
            // this.switchVals[2] = $("#gsCheck").is(":checked");
            // this.switchVals[3] = $("#cmpCheck").is(":checked");
            // this.switchVals[4] = $("#recCheck").is(":checked");
            // this.switchVals[5] = $("#intCheck").is(":checked");
            // this.switchVals[6] = $("#tgtCheck").is(":checked");
            // this.switchVals[7] = $("#ydrecCheck").is(":checked");
            // this.switchVals[8] = $("#fumCheck").is(":checked");
            // this.switchVals[9] = $("#fumlsCheck").is(":checked");
            // this.switchVals[10] = $("#pydsCheck").is(":checked");
            // this.switchVals[11] = $("#ptdsCheck").is(":checked");
            // this.switchVals[12] = $("#pattCheck").is(":checked");
            // this.switchVals[13] = $("#rydsCheck").is(":checked");
            // this.switchVals[14] = $("#rtdsCheck").is(":checked");
            // this.switchVals[15] = $("#rattCheck").is(":checked");
            // this.switchVals[16] = $("#recydsCheck").is(":checked");
            // this.switchVals[17] = $("#rectdsCheck").is(":checked");
            // this.switchVals[18] = $("#fpCheck").is(":checked");
    }

    // When the SUBMIT button is pressed
    matchupPlayers(){
        if(!this.isPlayersSelected()){
            alert("ERROR: Need two players selected to compare.");
        } else {
            // Create the chart!
            // Use the stored file data for the selected year, get the player selected, and return the info
            document.getElementById("chartContainer").style.width  = "800px";
            document.getElementById("chartContainer").style.height = "400px";

            // this.setSwitchVals();
            var arr = 
            [
                $("#ageCheck").is(":checked"),
                $("#gCheck").is(":checked"),
                $("#gsCheck").is(":checked"),
                $("#cmpCheck").is(":checked"),
                $("#recCheck").is(":checked"),
                $("#intCheck").is(":checked"),
                $("#tgtCheck").is(":checked"),
                $("#ydrecCheck").is(":checked"),
                $("#fumCheck").is(":checked"),
                $("#fumlsCheck").is(":checked"),
                $("#pydsCheck").is(":checked"),
                $("#ptdsCheck").is(":checked"),
                $("#pattCheck").is(":checked"),
                $("#rydsCheck").is(":checked"),
                $("#rtdsCheck").is(":checked"),
                $("#rattCheck").is(":checked"),
                $("#recydsCheck").is(":checked"),
                $("#rectdsCheck").is(":checked"),
                $("#fpCheck").is(":checked")
            ]

            this.setState({
                switchVals: arr
            }, () => {
                var playerOne = document.getElementById("playerListOne").value;
                var playerTwo = document.getElementById("playerListTwo").value;
                var playerOneIdx;
                var playerTwoIdx;

                for(let i=0; i<this.leftFileData.length; i++){
                    if(this.leftFileData[i][1] === playerOne){
                        playerOneIdx = i;
                        break;
                    }
                }

                for(let i=0; i<this.rightFileData.length; i++){
                    if(this.rightFileData[i][1] === playerTwo){
                        playerTwoIdx = i;
                        break;
                    }
                }
                
                // Make sure players are correctly recieved
                console.log(this.leftFileData[playerOneIdx]);
                console.log(this.rightFileData[playerTwoIdx]);
                document.getElementById("chartContainer").innerHTML = "";
                // this.makeChart(this.leftFileData[playerOneIdx], this.rightFileData[playerTwoIdx]);
            });
        }
    }

    // Check if both player lists have a player selected
    isPlayersSelected(){
        var listOne = document.getElementById("playerListOne");
        var listTwo = document.getElementById("playerListTwo");
        if(listOne.value==="NONE" || listOne.value===null || listTwo.value==="NONE" || listTwo.value===null){
            return false;
        }
        return true;
    }

    // Populate player dropdown list upon selection of year
    async checkDropDownYear(event){
        if(event.target.value === "NONE"){
            alert("ERROR: Need to select valid year.");
            return;
        }

        var fname = event.target.value;
        const ftext = await fetch(fname);
        const ptext = await ftext.text();
        const table = ptext.split('\n').slice(1);
        
        var playerListID;
        if(event.target.name === "yearsListOne"){
            playerListID = "playerListOne";
            this.leftFileData = [];
        } else {
            playerListID = "playerListTwo";
            this.rightFileData = [];
        }
        
        var playerList = document.getElementById(playerListID);
        playerList.options.length = 0;

        table.forEach(row => {
            const cols = row.split(',');
            const player = cols[1];
            var opt = document.createElement('option');
            opt.value = player;
            opt.innerHTML = player;
            playerList.appendChild(opt);

            // Push player rows to javascript array (cleared for every year change)
            if(event.target.name === "yearsListOne"){
                this.leftFileData.push(cols);
            } else {
                this.rightFileData.push(cols);
            }
        });
    }

    buildBarArray(player1, player2){
        // X Labels starts at a +1 offset because 'Player' isnt a category
        var cats = [];

        for(let i=0; i<this.state.switchVals.length; i++){
            if(this.state.switchVals[i] == true){
                //xlabels[1] has the value at xmapping[1];
                cats.push([this.xlabels[i+1], parseInt(player1[this.xmap[i+1]]), parseInt(player2[this.xmap[i+1]])]);
                console.log([this.xlabels[i+1], parseInt(player1[this.xmap[i+1]]), parseInt(player2[this.xmap[i+1]])]);
            }
        }

        return cats;
    }

    makeChart(player1, player2){
        // 1,4,5,7,10,13,14,17,18
        // Set the chart data
        var categories = this.buildBarArray(player1, player2);
        var data = anychart.data.set(categories);

        // map the data
        var playerData1 = data.mapAs({x: 0, value: 1, fill: 3, stroke: 5, label: 6});
        var playerData2 = data.mapAs({x: 0, value: 2, fill: 4, stroke: 5, label: 6});

        // create a chart
        var chart = anychart.column();

        // enable title
        var title = chart.title();
        title.enabled(true);
        title.text("Player Comparison");

        // enable legend
        var legend = chart.legend();
        legend.enabled(true);

        // create series and set the data
        var series1 = chart.column(playerData1);
        var series2 = chart.column(playerData2);

        chart.barGroupsPadding(1);

        // Set width bound
        chart.width('100%');

        // Rename the series to player names
        chart.getSeriesAt(0).name(player1[1]);
        chart.getSeriesAt(1).name(player2[1]);

        // colors
        series1.normal().fill("#fc4c02", 0.5);
        series1.hovered().fill("#fc4c02", 0.1);
        series1.selected().fill("#fc4c02", 0.5);

        // Add labels to bars
        chart.getSeriesAt(0).labels(true);
        chart.getSeriesAt(1).labels(true);

        chart.tooltip().format("{%seriesName}: {%value}")

        // set the container id
        chart.container("chartContainer");

        // initiate drawing the chart
        chart.draw();
    }

    render(){
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
                                    <select id="yearsListOne" name="yearsListOne" defaultValue={'NONE'} onChange={this.checkDropDownYear}>
                                        <option value="NONE">Select Year</option>
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
                                    <select id="playerListOne" name="playerListOne" defaultValue={'NONE'} onChange={this.checkDropDownYear}>
                                        <option value="NONE">Select Player</option>
                                    </select> 
                                </div>
                            </div>
                            <div className="col px-md-5">
                                <div className="row">
                                    <label for="years">Choose Year: </label>
                                    <select id="yearsListTwo" name="yearsListTwo" defaultValue={'NONE'} onChange={this.checkDropDownYear}>
                                        <option value="NONE">Select Year</option>
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
                                    <select id="playerListTwo" name="playerListTwo" defaultValue={'NONE'} onChange={this.checkDropDownYear}>
                                        <option value="NONE">Select Player</option>
                                    </select> 
                                </div>
                            </div>
                            <div className="col px-md-5">
                                <div className="row">
                                    <button className="btn btn-primary mt-3" id="submitBtn" type="button" onClick={this.matchupPlayers}>Submit</button>
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
}

export default Matchup;