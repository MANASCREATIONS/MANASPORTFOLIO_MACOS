import { Draggable } from "gsap/Draggable"
import gsap from "gsap";

import { Dock, Welcome, Navbar, Home } from "#components"
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      
    </main>
  )
}

export default App