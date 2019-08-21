import React, {Component} from 'react';
import {SocialIcons} from './SocialIcons';

export class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<SocialIcons/>
				</div>
			</footer>
		);
	}
}
