import Canvas from "./canvas"
import Home from "./pages/Home"
import Customizer from "./pages/customizer"

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <customizer />
    </main>
  )
}

export default App
