import React, { Component } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import Moment from 'react-moment';

class ListAppointment extends Component {
render() {
  const listItems = this.props.appointment.map(item => (
    <div>{item.petName}</div>
    ));

	return (
		<div className="appointment-list item-list mb-3">
		  {this.props.appointment.map(item => (
			<div className="pet-item col media py-3" key={item.aptId}>
          	  <div className="mr-3">
              	<button className="pet-delete btn btn-sm btn-danger"
                onClick={()=> this.props.deleteAppointment(item)}>
                <IoIosCloseCircle />
                </button>
          	</div>



          	<div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">{item.petName}</span>
                <span className="apt-date ml-auto">
                  <Moment
                    date={item.aptDate}
                    parse="YYYY-MM-dd hh:mm"
                    format="MMM-D- h-mma"
                  />
                </span>

            </div>

            <div className="owner-name">
              <span className="owner-name">{item.ownerName}</span>
            </div>
          	<div className="apt-notes">{item.aptNotes}</div>
          </div>
        </div>
			))}
      </div>
	);
  }
}

export default ListAppointment;