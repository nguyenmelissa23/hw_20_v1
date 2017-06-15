import React, {Component} from "react";

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
			<div>
				<input name="quoteInput" onInput={this.handleInput.bind(this)} type="text" value={this.state.quote}/>
				<button type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		)
	}
}

export default Input;