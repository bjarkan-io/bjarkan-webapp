import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Navbar from "./components/Navbar/Navbar"

// Views
import HomeView from "./views/HomeView"
import AboutView from "./views/AboutView"

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomeView} />
					<Route exact path='/about' component={AboutView} />
				</Switch>
			</Router>
		</React.Fragment>
	)
}

export default App
