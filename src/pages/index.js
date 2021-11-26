import React from 'react'
import Seo from '../components/Seo'
import Home from '../components/sections/Home'
import Why from '../components/sections/Why'
import Projects from '../components/sections/Projects'
import GetConnected from '../components/sections/GetConnected'
import Onboarding from '../components/sections/Onboarding'
import Tokens from '../components/sections/Tokens'
import Newsletter from '../components/sections/Newsletter'
import Footer from '../components/sections/Footer'

const IndexPage = () => (
  <>
    <Seo title="xDai" />
    <Home />
    <Why />
    <Projects />
    <GetConnected />
    <Onboarding />   
    <Tokens />
    <Newsletter />
    <Footer />
  </>
)

export default IndexPage