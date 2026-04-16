import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import AOS from 'aos'
import Navigation from './components/Navigation'
import SocialSidebar from './components/SocialSidebar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Achievements from './pages/Achievements'
import Excellence from './pages/Excellence'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <Router basename="/Nura" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="flex bg-primary min-h-screen font-body text-textMain selection:bg-accent selection:text-black">
        <SocialSidebar />
        <div className="flex-1 w-full flex flex-col md:ml-16 overflow-hidden relative">
          <Navigation />
          <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/excellence" element={<Excellence />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
