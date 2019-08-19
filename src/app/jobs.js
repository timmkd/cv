import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Job from './Job';

class Jobs extends Component {
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
		const rows = this.props.jobs.map(job => <Job key={job.key} job={job}/>);
		return (
			<div id="job-format-list" className="jobs">
				<div>
					{rows}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		search: state.keywords,
	}
);

export default connect(mapStateToProps)(Jobs);

Jobs.propTypes = {
	jobs: PropTypes.array,
	search: PropTypes.string
};
