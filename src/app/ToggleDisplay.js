import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ToggleDisplay extends Component {

	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
		this.getToggles = this.getToggles.bind(this);

		this.state = {
			displays: [
				{
					name: 'list',
					icon: 'list',
					text: 'List'
				},
				{
					name: 'icons',
					icon: 'th',
					text: 'Icons'
				}
			]
		};
	}

	handleToggle(display) {
		this.props.onToggle(display);
	}

	getToggles() {
		let rows = [];
		this.state.displays.map(display => {
			const activeClass = this.props.activeDisplay === display.name ? ' active' : '';
			const className = 'toggle-display--' + display.name + ' icon-' + display.icon + activeClass;
			rows.push(
				<li key={display.name}>
					<button className={className} onClick={() => this.handleToggle(display.name)}>
						<span className="toggle-display--text">{display.text}</span>
					</button>
				</li>
			);
			return true;
		}
		);
		return rows;
	}

	render() {
		return (
			<ul className="toggle-display">
				{this.getToggles()}
			</ul>
		);
	}
}

ToggleDisplay.propTypes = {
	onToggle: PropTypes.func.isRequired,
	activeDisplay: PropTypes.string.isRequired
};
