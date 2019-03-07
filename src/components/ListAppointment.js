import React, { Component } from 'react';

class ListAppointment extends Component {
render() {
  const listItems = this.props.appointment.map(item => (
    <div>{item.petName}</div>
    ));

	return (
		<div className="appointment-list item-list mb-3">
		  {this.props.appointment.map(item => (
			<div className="pet-item col media py-3">
          	  <div className="mr-3">
              	<button className="pet-delete btn btn-sm btn-danger">X</button>
          	</div>

          	<div className="pet-info media-body">
            	<div className="pet-head d-flex">
              	  <span className="pet-name">{item.petName}</span>
                  <span className="apt-date ml-auto">{item.aptDate}</span>
            	</div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span>ownerName</span>
            </div>
          	<div className="apt-notes">aptNotes</div>
          </div>
        </div>
			))}
      </div>
	);
  }
}

export default ListAppointment;