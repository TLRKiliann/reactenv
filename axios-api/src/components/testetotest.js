import React from 'react'

export default class Classtruc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: [],
			isLoaded: false

		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange() {
		fetch('...')
			.then((res) => res.json())
			.then(object => (
		this.setState(prevent => ({
			item: object,
			isLoaded: true
		}));
		.catch((error) => console.log(error))
		))
	}
	render() {
		const {item} = this.state;
		return (
			<h3>{item?.name}</h3>
		);
	}
}