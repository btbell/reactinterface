import React, { Component } from 'react';

class ListAppointment extends Component {
render() {
  const listItems = this.props.appointment.map(item => (
    <div>{item.petName}</div>
    ));

	return <div>{listItems}</div>
  }
}

export default ListAppointment;