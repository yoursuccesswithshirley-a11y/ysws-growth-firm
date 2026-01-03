"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, X, ChevronDown, Clock, Users, DollarSign, Target, TrendingUp, Award, Mail, Phone, Linkedin, Twitter } from "lucide-react";

export default function YSWSGrowthFirm() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Fixed Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-800 shadow-lg' : 'bg-slate-800/95'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              YSWS<span className="text-teal-400"> Growth Firm</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('problem')} className="text-white hover:text-teal-400 transition-colors duration-300 relative group">
                Problem
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('methodology')} className="text-white hover:text-teal-400 transition-colors duration-300 relative group">
                Methodology
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-teal-400 transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-teal-400 transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection('problem')} className="block w-full text-left text-white hover:text-teal-400 transition-colors duration-300">
                Problem
              </button>
              <button onClick={() => scrollToSection('methodology')} className="block w-full text-left text-white hover:text-teal-400 transition-colors duration-300">
                Methodology
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-teal-400 transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-teal-400 transition-colors duration-300">
                Contact
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6" style={{
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)'
      }}>
        <div className="container mx-auto max-w-5xl text-center space-y-8 py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight animate-fade-in">
            Stop Losing 20-30% of Your Capacity to Hidden Leaks
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transform your success trap into sustainable growth with institutional-grade systems designed for high-capacity women founders and nonprofit leaders
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Your Diagnostic
          </Button>
          <div className="pt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 text-teal-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 px-6" style={{
        background: 'linear-gradient(to bottom, rgba(20, 184, 166, 0.08) 0%, rgba(255, 255, 255, 1) 100%)'
      }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                The Success Trap: You're Winning, But Losing Ground
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                High-performing organizations face a hidden crisis: 20-30% of their operational capacity disappears into structural inefficiencies, unclear processes, and reactive decision-making.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                You're not failing. You're succeeding without the infrastructure to sustain it. The result? Exhausted teams, missed opportunities, and growth that feels increasingly fragile.
              </p>
              <div className="pt-4 space-y-4">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Time Hemorrhage</h3>
                    <p className="text-slate-600">Critical hours lost to unclear processes and reactive firefighting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <DollarSign className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Revenue Leakage</h3>
                    <p className="text-slate-600">Opportunities missed due to capacity constraints and system gaps</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Talent Drain</h3>
                    <p className="text-slate-600">High performers burning out from unsustainable operational demands</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-teal-500">20-30%</div>
                  <p className="text-slate-600 mt-2">of operational capacity lost to structural inefficiencies</p>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-slate-700 font-medium text-center">
                    What could you achieve with that capacity back?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology Section */}
      <section id="methodology" className="py-24 px-6 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Engine: A Three-Phase Methodology
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Institutional-grade systems thinking applied to your unique organizational context
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <CardTitle className="text-2xl text-slate-800 flex items-center space-x-2">
                  <Target className="h-6 w-6 text-teal-500" />
                  <span>Diagnostic</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Deep-dive analysis to identify your specific capacity leaks and structural inefficiencies
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Operational flow mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Decision-making pattern analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Resource allocation assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Team capacity evaluation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <CardTitle className="text-2xl text-slate-800 flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-teal-500" />
                  <span>Design</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Custom system architecture tailored to your organization's unique needs and growth trajectory
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Process optimization frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Decision authority matrices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Communication protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Scalability mechanisms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <CardTitle className="text-2xl text-slate-800 flex items-center space-x-2">
                  <Award className="h-6 w-6 text-teal-500" />
                  <span>Implementation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Guided deployment with ongoing support to ensure sustainable adoption and measurable results
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Phased rollout strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Team training and enablement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Performance tracking systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Continuous optimization support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-4 text-teal-400">
              <div className="w-8 h-0.5 bg-teal-400"></div>
              <span className="text-sm font-medium">Seamless Flow</span>
              <div className="w-8 h-0.5 bg-teal-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Deliverable Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="border-4 border-amber-500 rounded-lg p-12 bg-gradient-to-br from-amber-50 to-white shadow-2xl">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                The Owner's Manual<sup className="text-2xl">™</sup>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Your organization's comprehensive operating system blueprint
              </p>
              <div className="border-t-2 border-amber-500 w-24 mx-auto my-8"></div>
              <div className="text-left space-y-4 max-w-2xl mx-auto">
                <p className="text-lg text-slate-700">
                  More than documentation—this is your organization's institutional knowledge, decision frameworks, and operational playbook distilled into a living system.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-slate-800">What's Included:</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Process documentation and workflows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Decision authority frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Communication protocols</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-slate-800">The Impact:</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Onboard new team members in days, not months</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Scale without losing operational integrity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Reduce decision fatigue by 40%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Get Your Owner's Manual
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Shirley Section */}
      <section id="about" className="py-24 px-6" style={{
        background: 'linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 0%, rgba(20, 184, 166, 0.08) 100%)'
      }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Meet Shirley Brooks
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                For 23 years, Shirley architected operational excellence at CEVA Logistics, one of the world's leading supply chain companies managing $56 billion in annual logistics operations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                She didn't just manage systems—she built them from the ground up, transforming complex global operations into streamlined, scalable engines of growth.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-6">
                <p className="text-lg text-slate-700 italic">
                  "I've seen what happens when brilliant leaders outgrow their infrastructure. The solution isn't working harder—it's building smarter systems that work for you."
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">23</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Years of Corporate Excellence</h3>
                    <p className="text-slate-600">Building institutional-grade systems at global scale</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">$56B</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Operational Context</h3>
                    <p className="text-slate-600">Managing complexity at the highest levels of business</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg p-1 shadow-2xl">
                <div className="bg-slate-100 rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-600 font-medium">Professional Headshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Evolution Statement */}
      <section className="py-16 px-6 bg-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            <span className="text-teal-400 font-semibold">Your Success with Shirley</span> has evolved into{" "}
            <span className="text-amber-500 font-semibold">YSWS Growth Firm</span>—bringing institutional-grade systems thinking to high-capacity leaders ready to scale with confidence.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Ready to Reclaim Your Lost Capacity?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Schedule a complimentary diagnostic to identify your specific capacity leaks and explore how The Owner's Manual can transform your operations.
          </p>
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Your Diagnostic
          </Button>
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal-500" />
                <span>shirley@ysws.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal-500" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                YSWS<span className="text-teal-400"> Growth Firm</span>
              </h3>
              <p className="text-slate-400">
                Institutional-grade systems for high-capacity leaders
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('problem')} className="block text-slate-400 hover:text-teal-400 transition-colors">
                  The Problem
                </button>
                <button onClick={() => scrollToSection('methodology')} className="block text-slate-400 hover:text-teal-400 transition-colors">
                  Methodology
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-slate-400 hover:text-teal-400 transition-colors">
                  About Shirley
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p className="mb-2">© 2024 YSWS Growth Firm. All rights reserved.</p>
            <p className="text-sm">
              Formerly <span className="text-teal-400">Your Success with Shirley</span> — Now serving leaders at institutional scale
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
