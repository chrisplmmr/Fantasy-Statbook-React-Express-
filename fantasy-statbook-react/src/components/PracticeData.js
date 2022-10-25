import React from 'react';

class PracticeData extends React.Component{

    // Constructor
    constructor(props){
        super(props);
    }

    // State Obj
    state = {
        name: null,
        car: null
    };
    

    componentDidMount(){
        this.callBackendAPI()
        .then(res => this.setState({name: res.name, car: res.car}))
        .catch(err => console.log(err));
    }

    callBackendAPI = async() => {
        const response = await fetch('/express_backend');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message) 
        }
        console.log(body);
        return body;
    }

    render(){
        return(
            <div>
                <p className="App-intro">{this.state.name}</p>
                <p className="App-intro">{this.state.car}</p>
            </div>
        );
    }
}

export default PracticeData;