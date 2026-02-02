import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGallery from './components/ProjectGallery'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Differentials from './components/Differentials'
import Audience from './components/Audience'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      <Hero />
      <ProjectGallery />
      <Problem />
      <Solution />
      <Differentials />
      <Audience />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
