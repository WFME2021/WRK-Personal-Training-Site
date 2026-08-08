import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Assessment } from './pages/Assessment';
import { Programs } from './pages/Programs';
import { Resources } from './pages/Resources';
import { Results } from './pages/Results';
import { Contact } from './pages/Contact';
import { PersonalTraining } from './pages/PersonalTraining';
import { OnlineCoaching } from './pages/OnlineCoaching';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Admin } from './pages/Admin';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { HealthDisclaimer } from './pages/HealthDisclaimer';
import { Refunds } from './pages/Refunds';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { ContentProvider } from './context/ContentContext';
import { ThemeProvider } from './context/ThemeContext';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App: React.FC<{ initialData?: any }> = ({ initialData }) => {
console.log("App mounted, initialData length:", initialData?.blogs?.length);
  return (
    <ThemeProvider>
      <ContentProvider initialData={initialData}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/results" element={<Results />} />
            <Route path="/assessment/result/:token" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/online-coaching" element={<OnlineCoaching />} />
            
            <Route path="/personal-trainer-christchurch" element={<Navigate to="/personal-training" replace />} />
            <Route path="/online-personal-training-nz" element={<Navigate to="/online-coaching" replace />} />
            <Route path="/personal-training-christchurch-philosophy" element={<Navigate to="/about" replace />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
            
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/health-disclaimer" element={<HealthDisclaimer />} />
            <Route path="/refunds" element={<Refunds />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ContentProvider>
    </ThemeProvider>
  );
};
export default App;
