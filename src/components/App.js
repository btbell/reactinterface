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
      myAppointments: []
    };
  }

  componentDidMount() {
    fetch('./data.json') 
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        })
        this.setState({
          myAppointments: apts
        });
      });
     
  }

  render() {

    const listItems = this.state.myAppointments.map(item => (
      <div>{item.petName}</div>
      ));

    return (
       <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                { this.state.myName }
                {listItems}
                <AddAppointment />
                <SearchAppointment />
                <ListAppointment />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
