import { connect } from 'react-redux';
import React, { Component } from 'react';
import {Header} from './Header';
import Jobs from './Jobs';
import {Skills} from './Skills';
import {SearchBar} from './Searchbar';
import {Boxes} from './Boxes';
import {Footer} from './Footer';
import {Overlay} from './Overlay';
import Slider from './Slider';
import { setKeywords } from './actions';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			activeDisplay: 'list',
			filteredJobs: [],
			filter: '',
			skills: [],
			overlay: false,
			overlayJobs: []
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.getSkills = this.getSkills.bind(this);
		this.jobMatch = this.jobMatch.bind(this);
		this.updateFilteredJobs = this.updateFilteredJobs.bind(this);
		this.handleClickSkill = this.handleClickSkill.bind(this);
		this.handleClickBox = this.handleClickBox.bind(this);
		this.showOverlay = this.showOverlay.bind(this);
		this.closeOverlay = this.closeOverlay.bind(this);
		this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
	}

	componentDidMount() {
		// axios
		// 	.get('app/jobs.json')
		// 	.then(response => {
		// 		this.setState({jobs: response.data});
				this.getSkills(this.props.jobs);
				this.updateFilteredJobs();
		// 	});
	}

	jobMatch(job, filter) {
		for (let skill of job.skills) {
			if (skill.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
				return true;
			}
		}

		if (job.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
			return true;
		}

		return false;
	}

	updateFilteredJobs(filter) {
		let rows = [];
		this.props.jobs.map(job => {
			job.hide = 'show';
			if (filter && !this.jobMatch(job, filter)) {
				job.hide = 'hide';
			}
			rows.push(job);
			return true;
		});
		this.setState({filteredJobs: rows});
	}

	getSkills(jobs) {
		let skills = [];
		jobs.map(job => {
			job.skills.map(skill => {
				if (skills.indexOf(skill.toLowerCase()) === -1) {
					skills.push(skill.toLowerCase());
				}
				return true;
			});
			return true;
		});
		this.setState({skills});
	}

	handleSearch(filter) {
		this.setState({ filter });
		this.updateFilteredJobs(filter);
		this.props.setKeywords(filter);
	}

	handleToggleDisplay(activeDisplay) {
		this.setState({activeDisplay});
	}

	handleClickSkill(filter) {
		this.handleSearch(filter);
	}

	handleClickBox(jobs) {
		console.log('handleClickBox', jobs);
		this.showOverlay(jobs);
	}

	showOverlay(jobs) {
		this.setState({
			overlay: true,
			overlayJobs: jobs
		});
		document.body.classList.add('overlay--show');
	}

	closeOverlay() {
		this.setState({overlay: false});
		document.body.classList.remove('overlay--show');
	}
	render() {
		let overlayOutsideClass = 'overlay--outside';
		let activeDisplayClass = 'active-display--' + this.state.activeDisplay;

		const icons = (<Boxes jobs={this.state.filteredJobs} filter={this.state.filter} search={this.state.filter} onClickBox={this.handleClickBox}/>);
		const list = (<Jobs jobs={this.state.filteredJobs} filter={this.state.filter} search={this.state.filter}/>);

		if (this.state.overlay) {
			overlayOutsideClass += ' active';
		}
		return (
			<div className={activeDisplayClass}>
				<div className={overlayOutsideClass}>
					<Header/>
					<div className="filters">
						<div className="container">
							<SearchBar onUserInput={this.handleSearch} filterText={this.state.filter} search={this.state.filter}/>
							<Skills skills={this.state.skills} onClickSkill={this.handleClickSkill} search={this.state.filter}/>
						</div>
					</div>
					<main>
						<div className="container">
							<h2>Recent Jobs</h2>
							<Slider icons={icons} list={list}/>
						</div>
					</main>
					<Footer/>
				</div>
				<Overlay isActive={this.state.overlay} closeOverlay={this.closeOverlay} jobs={this.state.overlayJobs}/>
			</div>
		);
	}
}

const mapDispatchToProps = {
  setKeywords,
};

const mapStateToProps = state => (
	{
		jobs: state.jobs,
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);