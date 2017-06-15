import React, { Component } from "react";

import API from "../../utils/API";

// very basic component to get started
class Favorite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favoriteQuote: []
		};
	}

	componentDidMount() {
		API.getQuotes().then(function (allQuotes) {
			console.log("all saved quotes:", allQuotes.data);
			var favoriteArr = [];
			if (allQuotes.data !== this.state.favoriteQuote) {
				var quoteArr = allQuotes.data;
				for (var i = 0; i < quoteArr.length; i++){
					if (quoteArr[i].favorited === true){
						favoriteArr.push(quoteArr[i]);
					}
				}
			}
			if (favoriteArr !== this.state.favoriteQuote){
				this.setState({
					favoriteQuote: favoriteArr
				});
			}
			console.log("favorite page state:", this.state.favoriteQuote);
		}.bind(this));
	}


	renderEmpty() {
		return (
			<div className="container">
				<p>There is no saved quote.</p>
			</div>
		);
	}

	renderQuotes() {
		if (this.state.favoriteQuote !== []) {
			var thisFavQuotes = this.state.favoriteQuote;
			return thisFavQuotes.map(function (quoteObj, index) {
				return (
					<div key={index}>
						<h4>{quoteObj.text}</h4>
						{/*<button onClick={this.handleUnstar.bind(this, quoteObj)}>Un-star</button>
						<button onClick={this.handleDelete.bind(this, quoteObj)}>Delete</button>*/}
					</div>
				)
			}.bind(this));
		}
	}

	renderSaved() {
		if (this.state.favoriteQuote !== []) {
			return (
				<div className="container">
					{this.renderQuotes()}
				</div>
			)
		}
	}

	render() {
		if (this.state.favoriteQuote === []) {
			return this.renderEmpty();
		} else {
			return this.renderSaved();
		}

	}
}

export default Favorite;
