import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ToggleDisplay} from './ToggleDisplay';

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			activeDisplay: 'list',
			iconsHeight: 0,
			listHeight: 0,
			animating: false,
			pristine: true
		};
		this.heights = {
			icons: 0,
			list: 0
		};
		this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
		this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
		this.updateSlideHeights = this.updateSlideHeights.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.keywords !== this.props.keywords) {
			this.setState({ animating: true, pristine: false });
			this.updateSlideHeights();
		}
	}

	handleToggleDisplay(display) {
		this.setState({activeDisplay: display, animating: true, pristine: false});
	}

	handleTransitionEnd() {
		this.setState({ animating: false });
	}

	getSlidesPosition() {
		if (this.state.activeDisplay === 'icons') {
			return {transform: 'translateX(-50%)'};
		}	
		return {transform: 'translateX(0)'};
	}

	updateSlideHeights() {
		const listHeight = this.domList.clientHeight;
		const iconsHeight = this.domIcons.clientHeight;
		if (listHeight) {
			this.heights.list = listHeight;
		}
		if (iconsHeight) {
			this.heights.icons = iconsHeight;
		}
	}

	getHeight() {
		if (!this.state.pristine && !this.state.animating && this.domList && this.domIcons) {
			switch (this.state.activeDisplay) {
				case 'list':
					return { height: this.domList.clientHeight ? this.domList.clientHeight : 'auto'};
				case 'icons':
					return { height: this.domIcons.clientHeight ? this.domIcons.clientHeight : 'auto'};
				default:
					return {height:'auto'};
			}
		}
		return { height: 'auto' };
	}

	render() {
		return (
			<div className="slider" style={this.getHeight()} ref={el => this.el}>
				<ToggleDisplay onToggle={this.handleToggleDisplay} activeDisplay={this.state.activeDisplay} onTransitionEnd={this.handleTransitionEnd}/>
				<div className="slider--slides-wrapper" data-active={this.state.activeDisplay}>
					<div className="slider--slides" style={this.getSlidesPosition()} onTransitionEnd={this.handleTransitionEnd}>
						<div
							className="slider--slide"
							ref={
								element => {
									this.domList = element;
								}}
							>
							{this.props.jobs.filter(job => job.hide === 'show').length === 0 ? (<p>There are no jobs matching that keyword. Please try clearing the search bar or selecting a skillset above.</p>)
							: this.props.list}
						</div>
						<div
							className="slider--slide"
							ref={
								element => {
									this.domIcons = element;
								}}
							>
							{this.props.icons}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		keywords: state.keywords,
		jobs: state.jobs
	}
);

export default connect(mapStateToProps, null)(Slider);

Slider.propTypes = {
	icons: PropTypes.object,
	list: PropTypes.object
};
