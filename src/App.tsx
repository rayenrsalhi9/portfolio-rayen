import Navbar from "./components/navbar/navbar"
import Hero from "./pages/hero"

const App = () => {
  return(
    <section className="w-full max-w-4xl my-0 mx-auto">
      <Navbar />
      <Hero />
    </section>
  )
}

export default App