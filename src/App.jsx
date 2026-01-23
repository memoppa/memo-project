import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SupportPage from './pages/SupportPage';
import SponsorPage from './pages/SponsorPage';
import UpdatesPage from './pages/UpdatesPage';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="apoyar" element={<SupportPage />} />
        <Route path="patrocinar" element={<SponsorPage />} />
        <Route path="updates" element={<UpdatesPage />} />
        <Route path="gracias" element={<ThankYou />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
