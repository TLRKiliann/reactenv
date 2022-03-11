import React from 'react'


export default class Fifthcomp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: []
		};
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange() {
		this.setState()
	}
	render() {
		const { val } = this.state;
		return (
			<React.Fragment>
				<h2>Fifth component !</h2>
				<h3>{val}</h3>
			</React.Fragment>
		);
	}
}
