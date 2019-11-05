import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLead } from '../../redux/actions/leads';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lead: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange({ target: { name, value } }) {
    const { lead } = this.state;
    lead[name] = value;
    this.setState({ lead });
  }


  onSubmit(e) {
    e.preventDefault();
    const { addLead } = this.props;
    const { lead } = this.state;
    addLead(lead);
  }

  render() {
    const { lead } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={lead.name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={lead.email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={lead.message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
