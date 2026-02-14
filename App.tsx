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
import { ContentProvider } from './context/ContentContext';

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
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Routes */}
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/online-coaching" element={<OnlineCoaching />} />
            <Route path="/corporate-wellness" element={<CorporateWellness />} />
            <Route path="/42-day-reset" element={<Challenge42 />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Tools Route */}
            <Route path="/tools" element={<Tools />} />
            
            {/* Admin Route */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </ContentProvider>
  );
};

export default App;