import React, {Component} from "react";

import Button from 'react-md/lib/Buttons/Button.js';

import API from "../../../utils/API";

// very basic component to get started
class Input extends Component {
	constructor() {
		super();
		this.state = {
			quote: ""
		}
	}

	handleSubmit(event){
		console.log("handleSubmit");
		event.preventDefault();
		API.saveQuote(this.state.quote).then(function(){
			console.log("saved quote", this.state.quote);
			this.setState({
				quote:""
			});
			API.getQuotes().then(function(allQuotes){
				console.log("allQuote:", allQuotes);
				this.props.handleSubmit(allQuotes);
			}.bind(this));
		}.bind(this));
		// this.props.handleSubmit();
	}

	handleInput(event) {
		console.log("this.state:", this.state);
		console.log("INPUT", (event.target.value));
		var thisQuote = event.target.value;
		this.setState({
			quote: thisQuote
		});
	}

	render(){
		return(
			<div className="panel panel-default">
				<div className="panel-header">
					<h2 className="text-center">Input Quote</h2>
				</div>
				<div className="panel-body">
					<form action="" className="">
						<input className="quote-input form-control" name="quoteInput" onInput={this.handleInput.bind(this)} type="text" value={this.state.quote} />
						<Button className="text-center" iconClassName="fa fa-plus" onClick={this.handleSubmit.bind(this)} />
					</form>
				</div>
			</div>
		)
	}
}

export default Input;