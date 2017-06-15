import React, { Component } from "react";

import Button from 'react-md/lib/Buttons';

import API from "../../../utils/API";

// very basic component to get started
class Saved extends Component {
	constructor(props) {
		super(props);
		this.state = {
			savedQuotes: []
		};

		// this.handleDelete = this.handleDelete.bind(this);
		// this.handleFavorite = this.handleFavorite.bind(this);
		// this.renderQuotes = this.renderQuotes.bind(this);
	}

	componentDidMount(){
		API.getQuotes().then(function (allQuotes) {
			console.log("all saved quotes:", allQuotes.data);
			if (allQuotes.data !== this.state.savedQuotes) {
				this.setState({
					savedQuotes: allQuotes.data
				});
			}
		}.bind(this));
	}

	componentWillReceiveProps(nextProps) {
		console.log("nextProps:", nextProps.savedQuotes.data);
		this.setState({
			savedQuotes: nextProps.savedQuotes.data
		});
	}
	

	handleFavorite(quoteObj){
		console.log("handleFavorite:", quoteObj);
		API.favoriteQuote(quoteObj).then(function(){
			console.log("favorited", quoteObj);
		});
	}

	handleDelete(quoteObj){
		console.log("handleDelete:", quoteObj);
		API.deleteQuote(quoteObj._id).then(function(){
			console.log("deleted", quoteObj);
			API.getQuotes().then(function(allQuotes){
				console.log("handleDelete quotes:", allQuotes.data);
				if (allQuotes.data !== []){
					this.setState({
						savedQuotes: allQuotes.data
					});
				}
				console.log('handleDelete state:', this.state.savedQuotes);
			}.bind(this));
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
		if (this.state.savedQuotes !== []) {
			var thisSavedQuotes = this.state.savedQuotes;
			return thisSavedQuotes.map(function(quoteObj, index){
				return (
					<div key={index}>
						<p>{quoteObj.text}</p>
						<Button icon primary iconClassName="fa fa-star-o" onClick={this.handleFavorite.bind(this, quoteObj)}/> 
						<Button icon primary iconClassName="fa fa-trash-o" onClick={this.handleDelete.bind(this, quoteObj)}/>
					</div>
				)
			}.bind(this));
		}
	}

	renderSaved(){
		if (this.state.savedQuotes !== []){
			return (
				<div className="container">
					{this.renderQuotes()}
				</div>
			)
		}
	}

	render(){
		if (this.state.savedQuotes === []){
			return this.renderEmpty();
		} else {
			return this.renderSaved();
		}
		
	}
}

export default Saved;
