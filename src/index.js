// Importing ReactDOM and our routes
import ReactDOM from "react-dom";
import routes from "./app/config/routes";

import './app.css'; 

// Rendering our router to the "app" div in index.html
ReactDOM.render(routes, document.getElementById("app"));
