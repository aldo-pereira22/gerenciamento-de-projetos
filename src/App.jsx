import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';

function App() {
  return (

    <Router>
      <NavBar />
      <Container customClass="minheight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newprojects" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />

        </Routes>

      </Container>
      <Footer />
    </Router>
  );
}

export default App;
