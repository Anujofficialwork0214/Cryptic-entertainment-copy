import React from 'react'
import AboutHome from '../components/Home/About'
import Hero from '../components/Home/Hero'
import LeadForm from '../components/Home/LeadForm'
import PastWork from '../components/Home/PastWork'
import Services from '../components/Home/Services'
import Web3Partner from '../components/Home/Web3Partner'

const Home = () => {
    return (
        <div>
            <Hero />
            <Web3Partner />
            <AboutHome />
            <Services />
            <PastWork />
            <LeadForm />
        </div>
    )
}

export default Home