import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import ContentViewer from './pages/ContentViewer';
import TimetablePage from './pages/TimetablePage';

function App() {
  // Use Vite's BASE_URL which automatically adjusts for dev vs production
  const basename = import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash

  return (
    <Router basename={basename}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offre-4-matieres" element={<TimetablePage />} />
            <Route path="/:moduleId" element={<ModulePage />} />
            <Route path="/:moduleId/content/:contentId" element={<ContentViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
