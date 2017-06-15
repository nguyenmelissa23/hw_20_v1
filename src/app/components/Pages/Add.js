import React, {Component} from "react";

import Input from "./children/Input";
import Saved from "./children/Saved";

import API from "../../utils/API";

// very basic component to get started
class Add extends Component {
	constructor(){
		super();
		this.state = {
			savedQuotes: []
		}
	}

	componentDidMount(){
		API.getQuotes().then(function(allQuotes){
			console.log("all saved quotes:", allQuotes.data);
			if (allQuotes !== this.state.savedQuotes){
				this.setState({
					savedQuotes: allQuotes.data
				});
			}
		}.bind(this));
	}


	handleSubmit(allQuotes){
		if (allQuotes !== this.state.savedQuotes){
			this.setState({
				savedQuotes: allQuotes
			});
		}
	}

	render(){
		return (
			<div className="container">

				<div className="panel panel-default">
					<Input handleSubmit={this.handleSubmit.bind(this)} />
				</div>
				
				<div className="panel panel-default">
					<Saved savedQuotes={this.state.savedQuotes}/>
				</div>
			</div>
		)
	}
}

export default Add;
