import React from "react"
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	MenuIcon,
	Button
} from "@material-ui/core"

const HomeView = () => (
	<div>
		<AppBar position='static'>
			<Toolbar>
				<IconButton edge='start' color='inherit' aria-label='menu'>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' className={classes.title}>
					News
				</Typography>
			</Toolbar>
		</AppBar>
	</div>
)

export default HomeView
