import React from "react"

// Components
import ImageCard from "../components/Card/ImageCard"

const AboutView = () => {
	return (
		<React.Fragment>
            <ImageCard header='Investment that matters' info="Bjarkans vision is about creating value. Money only gets you a push, however we want to make sure that the push lasts." image='../assets/team-meeting.jpg' />
		</React.Fragment>
	)
}

export default AboutView
