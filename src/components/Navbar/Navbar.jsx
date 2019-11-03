import React from "react"
import "./navbar.scss"
import logo from "../../assets/images/logo-gradient.png"

import { Link } from "react-router-dom"

//Components
import MenuIcon from "../Icons/MenuIcon"
import CloseIcon from "../Icons/CloseIcon"
import HiddenNavbar from "./HiddenNavbar"
import Divider from "../Divider/Divider"

class NavBar extends React.Component {
	state = {
		clicked: false
	}

	handleClick() {
		this.setState((currentState) => ({
			clicked: !currentState.clicked
		}))
	}

	render() {
		const { clicked } = this.state
		return (
			<React.Fragment>
				<div className='navbar'>
					<div className='navbar__brand'>
						<Link to='/'>
							<img src={logo} alt='bjarkan logo' />
						</Link>
					</div>
					<div className='navbar__link' onClick={() => this.handleClick()}>
						{clicked ? (
							<CloseIcon color='#623f99' />
						) : (
							<MenuIcon color='#623f99' />
						)}
					</div>
				</div>
				{clicked ? (
					<React.Fragment>
						<HiddenNavbar />
						<Divider />
					</React.Fragment>
				) : (
					<Divider />
				)}
			</React.Fragment>
		)
	}
}

export default NavBar
