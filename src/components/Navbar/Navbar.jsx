import React from "react"
import "./navbar.scss"

import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<div className='navbar'>
			<ul>
				<li>
					<Link to='/'>bjarkan</Link>
				</li>
				<li>
					<Link to='/about'>Hamburger Menu</Link>
				</li>
			</ul>
		</div>
	)
}

export default NavBar
