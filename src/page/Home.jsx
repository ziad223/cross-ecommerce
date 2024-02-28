import React from 'react'
import Banner from '../components/banner/Banner';
import FeatureCategories from '../components/featureCategories/FeatureCategories';
import Header from '../components/header/Header';
import Team from '../components/team/Team';
const Home = () => {
  return (
    <div>
      <Header/>
      <FeatureCategories/>
      <Banner/> 
      <Team/>
    </div>
  )
}

export default Home
