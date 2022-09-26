import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import PostPage from './components/PostPage';
import Skills from './components/Skills';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<PostPage />} />
        <Route path="skills" element={<Skills />} />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Route>
    </Routes>
    </>
  )
}

export default App
