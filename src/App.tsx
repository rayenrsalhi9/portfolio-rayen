import Navbar from "./components/navbar/navbar"
import Hero from "./pages/hero"
import About from "./pages/about"
import Experience from "./pages/experience"
import Projects from "./pages/projects"
import Footer from "./components/footer"

const App = () => {
  return(
    <section className="w-full max-w-4xl my-0 mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </section>
  )
}

export default App