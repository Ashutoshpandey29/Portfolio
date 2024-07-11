import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

//leading snug is to change the line height
//sm: small devices

//namste shouls change to differnt languages'


const InfoBox = ({text, link, btnText}) => (
    <div className = 'info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to = {link} className = "neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Namaste! I am <span className="font-semibold">Ashutosh</span> 👋
            <br />
            A Software Developer from India!
        </h1>
    ),
    2 : (
        <InfoBox
            text = "Worked as an Intern for Healthcare Peoject funded by SERB! and learnt many skills along the way"
            link = "/about"
            btnText = "Learn More"
        />
    ),
    3 : (
        <InfoBox
            text = "Spearheaded the development of many projects. Check out my projects to know more!"
            link = "/projects"
            btnText = "View Projects"
        />
    ),
    4 : (
        <InfoBox
            text = "Want to know more about me? Click the button below!"
            link = "/contact"
            btnText = "Let's Connect!"
        />
    ),
}//kind of array of objects

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage];
}

export default HomeInfo