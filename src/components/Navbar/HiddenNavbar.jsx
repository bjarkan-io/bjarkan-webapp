import React from "react"
import "./hidden-navbar.scss"
import { Link } from "react-router-dom"

const HiddenNavbar = () => {
	return (
		<div id='navbar__hidden' className='navbar__hidden'>
			<ul>
				<li>
					<Link to='/projects'>projects</Link>
				</li>
				<li>
					<a
						href='https://github.com/bjarkan-io'
						target='_blank'
						rel='noopener noreferrer'
					>
						github
					</a>
				</li>
				<li>
					<Link to='/about'>about</Link>
				</li>
				<li>
					<Link to='/contact'>contact</Link>
				</li>
			</ul>
		</div>
	)
}

export default HiddenNavbar
