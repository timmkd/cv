import React, {Component} from 'react';
import {SocialIcons} from './SocialIcons';

export class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<h1 className="title">Tim McDonald<br/><span className="weight-thin">Front End Web Developer</span></h1>
					<SocialIcons/>
					<div className="header--intro">
						<p className="h3 weight-thin">Hi, I&#39;m Tim McDonald. I am a London based contractor who specialises in <strong>Front End Web Development</strong>, with a background in <strong>design</strong>. I love taking great designs and making them into beautiful websites.</p>
						<p className="h3 weight-thin">You can see many of my recent projects below, and filter through by either using the search box or clicking on the skillsets listed underneath. I built this page with <strong>react.js</strong>. You can <strong><a href="https://github.com/timmkd/cv">view the source code on github</a></strong>.</p>
					</div>
				</div>
			</header>
		);
	}
}
