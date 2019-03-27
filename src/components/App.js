import React, { Component } from 'react';
import '../css/App.css';

import AddAppointment from './AddAppointment';
import SearchAppointment from './SearchAppointment';
import ListAppointment from './ListAppointment';

import {without} from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myAppointment: [],
      formDisplay: false,
      lastIndex: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
        formDisplay: !this.state.formDisplay
    });
  }

  deleteAppointment(apt) {
    let tempApt = this.state.myAppointment;
    tempApt = without(tempApt, apt);

    this.setState({
        myAppointment: tempApt
    })
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
                <AddAppointment
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                />
                <SearchAppointment />
                <ListAppointment appointment={this.state.myAppointment}
                deleteAppointment={this.deleteAppointment}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
