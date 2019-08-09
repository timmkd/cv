import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Box} from './Box';

export class Boxes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icons: {},
			iconKeys: []
		};
		this.getIcons = this.getIcons.bind(this);
	}

	componentWillReceiveProps(props) {
		const icons = this.getIcons(props.jobs);
		if (icons) {
			this.setState({icons});
		}
	}

	getIcons(jobs) {
		let icons = {};
		jobs.map(job => {
			if (job.name in icons) {
				icons[job.name].jobs.push(job);
			} else {
				icons[job.name] = {
					jobs: [job],
					img: job.logo
				};
			}
			return true;
		});
		return icons;
	}

	showOverlay(jobs) {
		this.props.onClickBox(jobs);
	}

	render() {
		let rows = [];
		// let displayClass = 'jobs jobs--display-' + this.state.display;
		Object.keys(this.state.icons).map(key => {
			const icon = this.state.icons[key];
			rows.push(
				<Box
					key={key}
					icon={icon}
					onClick={() => {
						this.showOverlay(icon.jobs);
					}}
					/>
			);
			return true;
		});

		return (
			<div id="job-format-icons" className="boxes">
				{rows}
			</div>
		);
	}
}

Boxes.propTypes = {
	jobs: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired,
	onClickBox: PropTypes.func.isRequired
};
