import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Briefcase, Users, BatteryCharging, Trophy, BarChart, Smartphone } from 'lucide-react';

export const CorporateWellness: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-light py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-gray mb-4 block">Corporate Partnerships</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-primary">Corporate Wellness That Actually Works</h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
             A scalable fitness solution for companies with 100-150 employees. Reduce healthcare costs, improve productivity, and show your team you care.
          </p>
          <div className="mt-8">
            <Link to="/contact" state={{ fromCorporate: true }}>
               <Button>Book Discovery Call</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold mb-8 text-brand-primary text-center">Why Your Current Wellness Program Isn't Working</h2>
           <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">Gym Subsidies Fail</h3>
                <p className="text-brand-gray text-sm">"Only 15-20% of employees actually use the gym subsidy." Most people don't go to gyms. Subsidizing memberships they won't use wastes money.</p>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">No Data</h3>
                <p className="text-brand-gray text-sm">"We have no way to measure if it's working." You're spending money, but have no data on participation, engagement, or health outcomes.</p>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">Inconsistent Turnout</h3>
                <p className="text-brand-gray text-sm">Scheduling group sessions that fit everyone's schedule is impossible. People drop off after week 2.</p>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">High Admin Burden</h3>
                <p className="text-brand-gray text-sm">Processing reimbursements and managing vendors becomes a time sink for HR.</p>
             </div>
           </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6 bg-brand-primary text-white rounded-[3rem] mx-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A Better Approach</h2>
            <p className="text-gray-300">Digital-First. Scalable. Measurable. Minimal HR Admin.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
             <div className="space-y-4">
               <div className="bg-brand-lime w-12 h-12 flex items-center justify-center rounded-lg">
                 <Smartphone size={24} className="text-brand-primary" />
               </div>
               <h3 className="text-xl font-bold">Digital Platform</h3>
               <p className="text-gray-300 text-sm leading-relaxed">
                 No need for on-site gym space. Employees access workouts, nutrition guidance, and challenges from anywhere via our app.
               </p>
             </div>
             <div className="space-y-4">
               <div className="bg-brand-lime w-12 h-12 flex items-center justify-center rounded-lg">
                 <Trophy size={24} className="text-brand-primary" />
               </div>
               <h3 className="text-xl font-bold">Group Challenges</h3>
               <p className="text-gray-300 text-sm leading-relaxed">
                 Quarterly challenges (e.g., "10,000 steps for 30 days") build camaraderie and friendly competition. Employees actually participate because it's social.
               </p>
             </div>
             <div className="space-y-4">
               <div className="bg-brand-lime w-12 h-12 flex items-center justify-center rounded-lg">
                 <BarChart size={24} className="text-brand-primary" />
               </div>
               <h3 className="text-xl font-bold">Measurable Results</h3>
               <p className="text-gray-300 text-sm leading-relaxed">
                 You get quarterly reports: participation rates, engagement metrics, and aggregate health improvements. You'll know exactly what you're getting.
               </p>
             </div>
          </div>

          <div className="text-center bg-white/10 p-8 rounded-2xl">
             <h3 className="text-xl font-bold mb-4">Cost-Effective & Scalable</h3>
             <p className="text-gray-300 max-w-2xl mx-auto mb-8">
               One flat annual fee. No per-employee pricing complications. Works for companies with 100-150 employees. Significantly cheaper than gym subsidies with 20% uptake.
             </p>
             <Link to="/contact" state={{ fromCorporate: true }}>
               <Button variant="primary" className="bg-white text-brand-primary hover:bg-brand-lime hover:text-brand-primary">Get a Demo</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};