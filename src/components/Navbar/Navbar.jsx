import React from "react"
import "./navbar.scss"
import logo from "../../assets/images/logo-gradient.png"

import { Link } from "react-router-dom"
import MenuIcon from "../Icons/MenuIcon"

class NavBar extends React.Component {
	state = {
		clicked: true
	}

	handleClick() {
		const open = document.getElementById("navbar__hidden")
		this.setState((currentState) => ({
			clicked: !currentState.clicked
		}))
		if (this.state.clicked) {
			open.style.display = "block"
		}
		if (!this.state.clicked) {
			open.style.display = "none"
		}
	}

	render() {
		return (
			<div className='navbar'>
				<div className='navbar__brand'>
					<Link to='/'>
						<img src={logo} alt='bjarkan logo' />
					</Link>
				</div>
				<div className='navbar__link' onClick={() => this.handleClick()}>
					<MenuIcon color='#623f99' />
				</div>
				<div id='navbar__hidden' className='navbar__hidden'>
					<ul>
						<li>
							<Link to='/projects'>projects</Link>
						</li>
						<li>
							<Link to='/github'>github</Link>
						</li>
						<li>
							<Link to='/about'>about</Link>
						</li>
						<li>
							<Link to='/contact'>contact</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default NavBar
