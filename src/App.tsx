import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Hero from './components/Hero';

const ProjectsPage = lazy(() => import('./pages/Projects'));

export const preloadProjectsPage = () => {
  import('./pages/Projects');
};

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

