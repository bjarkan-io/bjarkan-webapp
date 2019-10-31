import React from "react"

const MenuIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke={props.color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-align-right'
		>
			<line x1='21' y1='10' x2='7' y2='10' />
			<line x1='21' y1='6' x2='3' y2='6' />
			<line x1='21' y1='14' x2='3' y2='14' />
			<line x1='21' y1='18' x2='7' y2='18' />
		</svg>
	)
}

export default MenuIcon
