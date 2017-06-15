import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Add from "../components/Pages/Add";
import Favorite from "../components/Pages/Favorite";


// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
		<Route path="add" component={Add}></Route>
		<Route path="favorite" component={Favorite}></Route>
		{/*<Route path="saved" component={Saved}></Route>*/}
		<IndexRoute component={Add}></IndexRoute>
	</Route>
  </Router>
);

export default routes;
