
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Philosophy } from './pages/Philosophy';
import { Assessment } from './pages/Assessment';
import { Results } from './pages/Results';
import { Contact } from './pages/Contact';
import { PersonalTraining } from './pages/PersonalTraining';
import { OnlineCoaching } from './pages/OnlineCoaching';
import { CorporateWellness } from './pages/CorporateWellness';
import { Challenge42 } from './pages/Challenge42';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Admin } from './pages/Admin';
import { Tools } from './pages/Tools';
import { CalorieCalculatorPage } from './pages/CalorieCalculatorPage';
import { OneRepMaxEstimatorPage } from './pages/OneRepMaxEstimatorPage';
import { Services } from './pages/Services';
import { ContentProvider } from './context/ContentContext';
import { ThemeProvider } from './context/ThemeContext';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ContentProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personal-training-christchurch-philosophy" element={<Philosophy />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/results" element={<Results />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Service Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/personal-trainer-christchurch" element={<PersonalTraining />} />
              <Route path="/online-personal-training-nz" element={<OnlineCoaching />} />
              <Route path="/workplace-wellness-program-nz" element={<CorporateWellness />} />
              <Route path="/fitness-challenge-nz" element={<Challenge42 />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Tools Routes */}
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/calorie-calculator" element={<CalorieCalculatorPage />} />
              <Route path="/tools/1rm-estimator" element={<OneRepMaxEstimatorPage />} />
              
              {/* Admin Route */}
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout>
        </Router>
      </ContentProvider>
    </ThemeProvider>
  );
};

export default App;
