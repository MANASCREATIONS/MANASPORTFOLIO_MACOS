import { Dock, Welcome } from "#components"
import Navbar from "#components/Navbar"

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App