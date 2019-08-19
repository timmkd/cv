import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Jobs from './Jobs';

export class Overlay extends Component {
	constructor() {
		super();
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.closeOverlay();
	}

	render() {
		let wrapperClass = 'overlay--wrapper';
		if (this.props.isActive) {
			wrapperClass += ' active';
		}
		return (
			<div className={wrapperClass}>
				<div className="overlay--behind" onClick={this.handleClose}></div>
				<div className="overlay">
					<div className="overlay--close icon-cancel" onClick={this.handleClose}></div>
					<div className="overlay--inner">
						<Jobs jobs={this.props.jobs}/>
					</div>
				</div>
			</div>
		);
	}
}

Overlay.propTypes = {
	icon: PropTypes.object,
	isActive: PropTypes.bool.isRequired,
	closeOverlay: PropTypes.func.isRequired,
	jobs: PropTypes.array
};
