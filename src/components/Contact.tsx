
import React, { useState } from 'react';
import SectionTransition from './SectionTransition';
import { Check, Github, Linkedin, Mail, MessageSquare, Send, Twitter } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kritrp05@gmail.com',
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTransition>
          <span className="inline-block text-sm font-medium text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
            Get in Touch
          </span>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">
            Let's Connect and Build Something Amazing
          </h2>
        </SectionTransition>
        
        <SectionTransition delay={200}>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Open to collaboration, internships, and mentorship. Email: kritrp05@gmail.com — or use the contact form below.
          </p>
        </SectionTransition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionTransition delay={300} type="slide-right">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="I'd like to discuss a potential project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-all ${
                    formStatus === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                  {formStatus === 'submitting' && (
                    <>
                      Sending...
                      <svg className="ml-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      Message Sent <Check className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </SectionTransition>
          
          <SectionTransition delay={400} type="slide-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect with Me</h3>
              
              <div className="space-y-6">
                <div className="bg-card/80 border border-border/40 rounded-lg p-6">
                  <h4 className="flex items-center text-lg font-medium mb-4">
                    <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                    Social Profiles
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg border border-border/40 hover:bg-secondary/50 transition-colors"
                      >
                        <link.icon className="h-5 w-5 mr-3 text-primary" />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card/80 border border-border/40 rounded-lg p-6">
                  <h4 className="text-lg font-medium mb-4">Let's Collaborate</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm open to discussing potential projects, research collaborations, speaking engagements, or consulting opportunities in the AI/ML space.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you have a specific project in mind or just want to connect, I'd be happy to chat!
                  </p>
                </div>
              </div>
            </div>
          </SectionTransition>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-20 pt-10 border-t border-border/40">
        <SectionTransition>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} AI/ML Engineer Portfolio. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default Contact;
