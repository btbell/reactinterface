import React, { Component } from 'react';
import '../css/App.css';

import AddAppointment from './AddAppointment';
import SearchAppointment from './SearchAppointment';
import ListAppointment from './ListAppointment';

import { without } from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myAppointment: [],
      formDisplay: false,
      orderBy: 'petName',
      orderDirection: 'asc',
      queryText: '',
      lastIndex: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchAppointment = this.searchAppointment.bind(this);
  }

  toggleForm() {
    this.setState({
        formDisplay: !this.state.formDisplay
    });
  }

  searchAppointment(query) {
    this.setState({queryText: query});
  }

  changeOrder(order, dir) {
    this.setState({
        orderBy: order,
        orderDirection: dir
    });
  }

  addAppointment(apt) {
    let tempApt = this.state.myAppointment;
    apt.aptId = this.state.lastIndex;
    tempApt.unshift(apt);
    this.setState({
        myAppointment: tempApt,
        lastIndex: this.state.lastIndex +1
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
        });
        this.setState({
          myAppointment: apts
        });
      });  
  }

  render() {

    let order;
    let filteredApts = this.state.myAppointment;
    if(this.state.orderDirection === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return(
          eachItem['petName']
              .toLowerCase()
              .includes(this.state.queryText.toLowerCase()) ||
          eachItem['ownerName']
              .toLowerCase()
              .includes(this.state.queryText.toLowerCase()) ||
          eachItem['aptNotes']
              .toLowerCase()
              .includes(this.state.queryText.toLowerCase())

      );
    });

    return (
       <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addAppointment={this.addAppointment}
                />
                <SearchAppointment
                  orderBy={this.state.orderBy}
                  orderDirection={this.state.orderDirection}
                  changeOrder={this.changeOrder}
                  searchAppointment={this.searchAppointment}
                />
                <ListAppointment
                  appointment={filteredApts}
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
