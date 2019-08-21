import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Box extends Component {
	render() {
		return (
			<div
				className="box"
				ref={ref => {
					this.boxDOM = ref;
				}}
				onClick={this.props.onClick}
				>
				<img src={this.props.icon.img}/>
			</div>
		);
	}
}

Box.propTypes = {
	icon: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};
