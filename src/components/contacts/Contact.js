import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {

	state = {
		showContactInfo: false
	};

	onDeleteClick = async (id,dispatch) => {
		try{
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
			dispatch({type: 'DELETE_CONTACT', payload: id});
		} catch(e) {
			dispatch({type: 'DELETE_CONTACT', payload: id})
		}
	}

	render() {
		const { name, email, phone, id } = this.props.contact;
		const { showContactInfo } = this.state;
	
		return (

			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
						<h4>{name}
						<i 
							className="fa fa-sort-down"
							style={{cursor: 'pointer'}}
							onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
						/>
						<i
							className="fa fa-times"
							style={{cursor: 'pointer', float: 'right', color: 'red'}}
							onClick={this.onDeleteClick.bind(this,id,dispatch)}
						/>
						<Link to={`contact/edit/${id}`}>
							<i 
								className="fa fa-pencil"
								style={{
									cursor: 'pointer',
									float: 'right',
									color: 'black',
									marginRight: '1rem',
									fontSize: '22px',
								}}
							></i>
						</Link>
						</h4>
						{showContactInfo ? 
						<ul className="list-group">
							<li className="list-group-item">{email}</li>
							<li className="list-group-item">{phone}</li>			
						</ul>
						:null}
						
					</div>
					)
				}}
			</Consumer>
		)
	}

}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
}

export default Contact;
