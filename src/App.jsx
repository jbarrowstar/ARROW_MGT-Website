import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

// Main pages
import Home from './pages/Home';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

// Legal pages
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Project pages
import SemiconductorPage from './pages/projects/SemiconductorPage';
import DataCenterPage from './pages/projects/DataCenterPage';
import PharmaceuticalPage from './pages/projects/PharmaceuticalPage';
import ConstructionPage from './pages/projects/ConstructionPage';

// Service pages (one file per service under src/pages/services/)
import CantileverScaffolding from './pages/services/CantileverScaffolding';
import AccessTowerScaffolding from './pages/services/AccessTowerScaffolding';
import HangingScaffolding from './pages/services/HangingScaffolding';
import MobileScaffolding from './pages/services/MobileScaffolding';
import IndependentTowerScaffold from './pages/services/IndependentTowerScaffold';
import ExternalPerimeterScaffolding from './pages/services/ExternalPerimeterScaffolding';
import MechanicalEngineering from './pages/services/MechanicalEngineering';

// ✅ ScrollToTop component
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ensures scroll resets on route change */}

      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Main pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />

          {/* Legal pages */}
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />

          {/* Service pages — canonical slugs */}
          <Route path="services/hanging-scaffolding" element={<HangingScaffolding />} />
          <Route path="services/access-tower-scaffolding" element={<AccessTowerScaffolding />} />
          <Route path="services/mobile-scaffolding" element={<MobileScaffolding />} />
          <Route path="services/cantilever-scaffolding" element={<CantileverScaffolding />} />
          <Route path="services/independent-tower-scaffolding" element={<IndependentTowerScaffold />} />
          <Route path="services/external-perimeter-scaffolding" element={<ExternalPerimeterScaffolding />} />
          <Route path="services/mechanical-engineering" element={<MechanicalEngineering />} />

          {/* Project pages */}
          <Route path="projects/semiconductor" element={<SemiconductorPage />} />
          <Route path="projects/data-center" element={<DataCenterPage />} />
          <Route path="projects/pharmaceutical" element={<PharmaceuticalPage />} />
          <Route path="projects/construction" element={<ConstructionPage />} />

        </Route>
      </Routes>
    </Router>
  );
}
