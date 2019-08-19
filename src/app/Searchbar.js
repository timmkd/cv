import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleChange() {
		this.props.onUserInput(this.textInput.value);
	}

	handleClear() {
		this.props.onUserInput('');
	}

	render() {
		return (
			<div className="searchbar__wrapper">
				<input
					placeholder="Filter jobs by keyword..."
					value={this.props.filterText}
					onChange={this.handleChange}
					ref={input => {
						this.textInput = input;
					}}
					className="searchbar"
				/>
				{this.props.filterText.length > 0 && <div className="searchbar__clear" onClick={this.handleClear}><svg className="searchbar__svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg></div>}
			</div>
		);
	}
}

SearchBar.propTypes = {
	onUserInput: PropTypes.func.isRequired,
	filterText: PropTypes.string.isRequired
};
