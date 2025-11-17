import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import ContentViewer from './pages/ContentViewer';

function App() {
  return (
    <Router basename="/cours/arabe/lettres/4">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
