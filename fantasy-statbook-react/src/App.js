import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Players from './components/Players'
import Matchup from './components/Matchup'
import Adp from './components/Adp'
import AllTime from './components/AllTime'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
    state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <Router>
          {/* <Navbar /> */}
          {/* <div className="App">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/players">Players</Link></li>
              <li><Link to="/matchup">Matchup</Link></li>
            </ul>
            <p className="App-intro">{this.state.data}</p>
          </div> */}
          <Navbar/>
          <Routes>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/players' element={<Players />}></Route>
            <Route exact path='/matchup' element={<Matchup />}></Route>
            <Route exact path='/adp' element={<Adp />}></Route>
            <Route exact path='/alltime' element={<AllTime />}></Route>
          </Routes>
        </Router>
      );
    }
  }

export default App;
