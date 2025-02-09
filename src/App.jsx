import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from "./components/Hero2"
import Hero3 from "./components/Hero3"
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Home from './components/Home'
import Education from './components/Education'
import Credentials from './components/Credentials'
import Endbar from './components/Endbar'
import RecentProjects from './components/RecentProjects'
import { ExpandableCardDemo } from './components/Skills'
import ProjectGallery from './components/ProjectGallery'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      </div>

      <div className="container mx-auto lg:px-8 mr-2 ml-2 lg:ml-16 lg:mr-16">
      <Navbar />
      <Home />
      <Hero2/>
      <RecentProjects />
      {/* <ProjectGallery /> */}
      <Experience />
      <Education />
      <Technologies />
      <Credentials />
      <Endbar />
      </div>
      
    </div>
  )
}

export default App