// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer  from './components/Footer';
import WorkPage from './components/WorkPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeroBanner />
        <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<AboutMe/>} />
          <Route path="/work" element={<WorkPage/>} />
          <Route path="/contact" element={<ContactMe/>} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
