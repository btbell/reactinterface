import React, { Component } from 'react';
import '../css/App.css';

import AddAppointment from './AddAppointment';
import SearchAppointment from './SearchAppointment';
import ListAppointment from './ListAppointment';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myName: 'Brian',
      myAppointment: [],
      lastIndex: 0
    };
  }

  componentDidMount() {
    fetch('./data.json') 
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex +1});
          return item;
        })
        this.setState({
          myAppointment: apts
        });
      });  
  }

  render() {
    return (
       <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment />
                <SearchAppointment />
                <ListAppointment appointment={this.state.myAppointment} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
