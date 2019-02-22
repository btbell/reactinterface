import React, { Component } from 'react';
import '../css/App.css';

import AddAppointment from './AddAppointment';
import SearchAppointment from './SearchAppointment';
import ListAppointment from './ListAppointment';

class App extends Component {

  constructor() {
  super();
  this.state = {
    myName: 'Brian'
  }
}

  render() {
    return (
       <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                { this.state.myName }
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
