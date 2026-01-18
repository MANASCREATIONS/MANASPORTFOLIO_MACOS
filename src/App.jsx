import { Draggable } from "gsap/Draggable"
import gsap from "gsap";

import { Dock, Welcome, Navbar, Home } from "#components"
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

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
      <SpeedInsights />
      <Analytics />
    </main>
    
  )
}

export default App