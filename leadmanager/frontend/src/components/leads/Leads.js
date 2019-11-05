import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../redux/actions/leads';

export class Leads extends Component {
  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    const { leads, deleteLead } = this.props;
    return (
      <div>
        <h1> Leads List </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              leads.map(lead => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button onClick={deleteLead.bind(this, lead.id)} type="button" className="btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  deleteLead: PropTypes.func.isRequired,
};

const MapStateToProps = state => ({
  leads: state.leads.leads,
});

export default connect(MapStateToProps, { getLeads, deleteLead })(Leads);
