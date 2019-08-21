import React, {Component} from 'react';

export class SocialIcons extends Component {
	render() {
		return (
			<ul className="social-icons">
				<li><a className="social-icons--icon icon-git" href="http://www.github.com/timmkd" target="_blank"><span>Git</span></a></li>
				<li><a className="social-icons--icon icon-twitter" href="http://www.twitter.com/timmkd" target="_blank"><span>Twitter</span></a></li>
				<li><a className="social-icons--icon icon-linkedin" href="https://uk.linkedin.com/in/tim-mcdonald-2232a531" target="_blank"><span>Linkedin</span></a></li>
				<li><a className="social-icons--icon icon-mail" href="mailto:tim.mkdonald@gmail.com" target="_blank"><span>Email</span></a></li>
				<li><span className="social-icons--icon icon-mobile"><span>Phone</span></span> 0450 124 714</li>
			</ul>
		);
	}
}
