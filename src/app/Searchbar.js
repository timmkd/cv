import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.props.onUserInput(this.textInput.value);
	}

	render() {
		return (
			<div>
				<input
					placeholder="Filter jobs by keyword..."
					value={this.props.filterText}
					onChange={this.handleChange}
					ref={input => {
						this.textInput = input;
					}}
					className="searchbar"
					/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onUserInput: PropTypes.func.isRequired,
	filterText: PropTypes.string.isRequired
};
