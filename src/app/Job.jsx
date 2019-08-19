import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Skills} from './Skills';
import {Searchable} from './Searchable';

class Job extends Component {
	render() {
		const className = 'job ' + this.props.job.hide;
		return (
			<div className={className}>
				<img src={`${process.env.PUBLIC_URL}/${this.props.job.logo}`} alt={this.props.job.title} />
				<div className="job--text">
					<h3 className="job--title">
						{this.props.job.title}
					</h3>
					<p className="job--date">{this.props.job.dates}</p>
					<div className="job--descrip"><Searchable text={this.props.job.text} search={this.props.search}/></div>
					<Skills skills={this.props.job.skills} search={this.props.search}/>
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

export default connect(mapStateToProps)(Job);

Job.propTypes = {
	job: PropTypes.object.isRequired,
	search: PropTypes.string
};
