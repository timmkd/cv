import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Job} from './Job';

export class Jobs extends Component {
	constructor() {
		super();
		this.state = {
			display: 'list'
		};
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(display) {
		this.setState({display});
	}

	render() {
		let rows = [];
		this.props.jobs.map(job => {
			rows.push(<Job key={job.key} job={job} search={this.props.search}/>);
			return true;
		});
		return (
			<div id="job-format-list" className="jobs">
				<div>
					{rows}
				</div>
			</div>
		);
	}
}

Jobs.propTypes = {
	jobs: PropTypes.array,
	search: PropTypes.string
};
