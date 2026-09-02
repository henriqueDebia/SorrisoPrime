import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Professionals from './components/Professionals'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Professionals />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
