import { ThemeProvider } from "./contexts/theme-context"
import Navbar from "./components/navbar/navbar"
import Hero from "./pages/hero"
import About from "./pages/about"
import Experience from "./pages/experience"
import Projects from "./pages/projects"
import Footer from "./components/footer"
import ThemeToggle from "./components/theme-toggle"

const App = () => {
  return(
    <ThemeProvider>
      <section className="w-full max-w-4xl my-0 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </section>
      <ThemeToggle />
    </ThemeProvider>
  )
}

export default App