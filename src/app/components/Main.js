import React, {Component} from "react";
// import {Link} from "react-router";
// very basic component to get started

import '../../app.css'

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Main extends Component{

	render(){
		return (
			<div className="App">
				<Navigation/>
				<Header/>
				<div className="container">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Main;
