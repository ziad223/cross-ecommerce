import React from 'react'
import Counter from '../components/counter/Counter'
import Team from '../components/team/Team'
import Testimonails from '../components/testimonails/Testimonails'

const About = () => {
  return (
    <div className='about container'>
      <h1 className='title'>About Us</h1>
      <Counter/>
      <Team/>
      <Testimonails/>
    </div>
  )
}

export default About
