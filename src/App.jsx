import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import PathPage from './pages/PathPage';
import AthletePage from './pages/AthletePage';
import ResultsPage from './pages/ResultsPage';
import ImpulsePage from './pages/ImpulsePage';
import SponsorPage from './pages/SponsorPage';
import UpdatesPage from './pages/UpdatesPage';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="proyecto" element={<ProjectPage />} />
        <Route path="camino" element={<PathPage />} />
        <Route path="atleta" element={<AthletePage />} />
        <Route path="resultados" element={<ResultsPage />} />
        <Route path="impulsar" element={<ImpulsePage />} />
        <Route path="patrocinar" element={<SponsorPage />} />
        <Route path="updates" element={<UpdatesPage />} />
        <Route path="gracias" element={<ThankYou />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
