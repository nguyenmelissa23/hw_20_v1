import React, {Component} from "react";
import {Link} from "react-router";

class Navigation extends Component{
	render(){
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-collapse">
						<ul className="nav navbar-nav navLeft">
							<li><Link to="/">Quote</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/add">Create Quote</Link></li>
							<li><Link to="/favorite">Favorite</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;