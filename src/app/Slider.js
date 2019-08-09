import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ToggleDisplay} from './ToggleDisplay';

export class Slider extends Component {
	constructor() {
		super();
		this.state = {
			activeDisplay: 'list',
			iconsHeight: 0,
			listHeight: 0
		};
		this.heights = {
			icons: 0,
			list: 0
		};
		this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
		this.updateSlideHeights = this.updateSlideHeights.bind(this);
	}

	handleToggleDisplay(display) {
		this.setState({activeDisplay: display});
	}

	getSlidesPosition() {
		let slidesPos;
		switch (this.state.activeDisplay) {
			case 'list':
				slidesPos = {transform: 'translateX(0)'};
				break;
			case 'icons':
				slidesPos = {transform: 'translateX(-50%)'};
				break;
			default:
				break;
		}
		return slidesPos;
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
		let height;
		if (this.domList && this.domIcons) {
			switch (this.state.activeDisplay) {
				case 'list':
					height = this.domList.clientHeight ? this.domList.clientHeight : 'auto';
					break;
				case 'icons':
					height = this.domIcons.clientHeight ? this.domIcons.clientHeight : 'auto';
					break;
				default:
					height = 'auto';
					break;
			}
		}
		return {height};
	}

	render() {
		return (
			<div className="slider" style={this.getHeight()}>
				<ToggleDisplay onToggle={this.handleToggleDisplay} activeDisplay={this.state.activeDisplay}/>
				<div className="slider--slides-wrapper" data-active={this.state.activeDisplay}>
					<div className="slider--slides" style={this.getSlidesPosition()}>
						<div
							className="slider--slide"
							ref={
								element => {
									this.domList = element;
								}}
							>
							{this.props.list}
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

Slider.propTypes = {
	icons: PropTypes.object,
	list: PropTypes.object
};
