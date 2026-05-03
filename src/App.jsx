import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext.jsx';
import About from './pages/About.jsx';
import Database from './pages/Database.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import NotFound from './pages/NotFound.jsx';
import Privacy from './pages/Privacy.jsx';
import Report from './pages/Report.jsx';
import Research from './pages/Research.jsx';
import Sources from './pages/Sources.jsx';
import Terms from './pages/Terms.jsx';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Database />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/report" element={<Report />} />
          <Route path="/research" element={<Research />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
