import React, { Component } from "react";

import Button from 'react-md/lib/Buttons/Button';

import API from "../../utils/API";

// very basic component to get started
class Favorite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favoriteQuote: []
		};
	}

	handleUnFavorite(quoteObj) {
		console.log("handleFavorite:", quoteObj);
		API.favoriteQuote(quoteObj).then(function () {
			console.log("favorited", quoteObj);
			API.getQuotes().then(function (allQuotes) {
				console.log("all saved quotes:", allQuotes.data);
				var favoriteArr = [];
				if (allQuotes.data !== this.state.favoriteQuote) {
					var quoteArr = allQuotes.data;
					for (var i = 0; i < quoteArr.length; i++) {
						if (quoteArr[i].favorited === true) {
							favoriteArr.push(quoteArr[i]);
						}
					}
				}
				if (favoriteArr !== this.state.favoriteQuote) {
					this.setState({
						favoriteQuote: favoriteArr
					});
				}
				console.log("favorite page state:", this.state.favoriteQuote);
			}.bind(this));
		}.bind(this));
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
					<div className="" key={index}>
						<h4>{quoteObj.text}</h4>
						<Button icon primary iconClassName="fa fa-star" onClick={this.handleUnFavorite.bind(this, quoteObj)} />
					</div>
				)
			}.bind(this));
		}
	}

	renderSaved() {
		if (this.state.favoriteQuote !== []) {
			return (
				<div className="container panel panel-default">
					<div className="panel-header">
						<h2 className="text-center">Favorite</h2>
					</div>
					<div className="panel-body">
						{this.renderQuotes()}
					</div>
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
