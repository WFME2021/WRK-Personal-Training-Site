import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';

export const Services: React.FC = () => {
  const { pageContent } = useContent();
  const { ptImage, onlineImage, corporateImage } = pageContent.home; // Reuse existing images
  const { hero, banner, seo } = pageContent.services;

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
      />

      <div className="bg-primary min-h-screen text-text-primary transition-colors duration-300">
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
        />

        {/* Services List */}
        <section id="services-list" className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Service Card 1: 1:1 In-Person */}
              <Link to="/personal-trainer-christchurch" className="group block">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={ptImage.url} alt={ptImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">1:1 In-Person Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">Ongoing coaching at Get Me Fitter Gym—sessions, homework, and nutrition guidance.</p>
                <p className="text-sm text-text-secondary uppercase tracking-wider font-bold">Best for: accountability, injury-aware progress, fastest clarity.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Details</span>
              </Link>

              {/* Service Card 2: Online */}
              <Link to="/online-personal-training-nz" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={onlineImage.url} alt={onlineImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">12-Week Min</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Online Personal Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">App-based programming + check-ins + nutrition guidance.</p>
                <p className="text-sm text-text-secondary uppercase tracking-wider font-bold">Best for: structure, flexibility, and results without being tied to a location.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Details</span>
              </Link>

               {/* Service Card 3: Corporate */}
              <Link to="/workplace-wellness-program-nz" className="group block">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   {corporateImage.url ? (
                     <img src={corporateImage.url} alt={corporateImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full bg-secondary"></div>
                   )}
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">12 Months</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Corporate Wellness</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">A personal trainer in every employee’s pocket. App-led programs that support fitness, posture, stress, and consistency.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Details</span>
              </Link>

              {/* Service Card 4: 42 Day Reset */}
              <Link to="/fitness-challenge-nz" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative bg-secondary flex items-center justify-center border border-border">
                   <h4 className="font-display text-[12rem] font-bold text-text-primary opacity-5 leading-none">42</h4>
                   <div className="absolute top-8 right-8 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Self-Led</div>
                   <div className="absolute bottom-8 left-8 bg-primary/10 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">42-Day Reset</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">A simple, structured reset with training + protein-forward nutrition guidance + automated support in the app.</p>
                <p className="text-sm text-text-secondary uppercase tracking-wider font-bold">Best for: momentum and a clean restart without overthinking.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Details</span>
              </Link>

            </div>
          </div>
        </section>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />

        {/* Not Sure Section */}
        <section className="py-24 px-4 md:px-8 bg-secondary border-t border-border text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl uppercase font-bold text-text-primary mb-6 tracking-tighter">
              Not sure which one?
            </h2>
            <p className="text-xl text-text-secondary mb-10 leading-relaxed">
              If you're unsure which option fits your goals and lifestyle best, let's chat. We can figure out the right path together.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg" className="px-12 py-5 text-lg shadow-xl">
                Book a consult
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
