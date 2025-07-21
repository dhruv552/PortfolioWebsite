import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink, Phone, Menu, X } from "lucide-react";
import ProjectCard from "./ProjectCard";
import SkillsTimeline from "./SkillsTimeline";
import ContactForm from "./ContactForm";
import { useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "SustainAride",
      description:
        "A sustainable transportation platform connecting eco-conscious riders with green mobility solutions.",
      techStack: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "Express" }
      ],
      githubUrl: "https://github.com/dhruv552/SustainAride",
      image: "/SustainAride.png",
      date: "May 2025",
    },
    {
      title: "ShadowShield",
      description:
        "Advanced cybersecurity tool for real-time threat detection and system protection.",
      techStack: [
        { name: "Python" },
        { name: "TensorFlow" },
        { name: "Flask" },
        { name: "PostgreSQL" }
      ],
      githubUrl: "https://github.com/Ritik-Malviya/ShadowShield",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&q=80",
      date: "Feb 2025",
    },
  ];

  const achievements = [
    {
      title: "Winner",
      subtitle: "Best Civic Auth Use, JLU Bhopal Hackathon (6th Position), awarded Rs.7,000 for Operation ShadowShield",
      description: "Recognized for innovative use of civic authentication technology in cybersecurity solutions",
      date: "2025",
      link: "https://dorahacks.io/buidl/25867/milestones",
    },
    {
      title: "Finalist",
      subtitle: "SKITECH INNOTHON 2.0, Indore for building a gamified daily carbon footprint tracker",
      description: "Developed an innovative gamified solution for tracking and reducing carbon footprint",
      date: "2025",
      link: "https://github.com/dhruv552/ScriptSqud_EcoTrack._INNOTHON2.0",
    },
    {
      title: "In Progress",
      subtitle: "Developing SustainAride, a green mobility rewards platform for upcoming innovation events",
      description: "Building a comprehensive sustainable transportation rewards platform",
      date: "2025",
      link: "https://github.com/dhruv552/SustainAride",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card text-text-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-surface/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold text-text-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Dhruv Agrawal
            </motion.h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-text-light hover:text-accent-blue transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-text-light hover:text-accent-cyan transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-text-light hover:text-accent-emerald transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-text-light hover:text-accent-blue transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-text-light hover:text-accent-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-4 space-y-2"
            >
              <a
                href="#about"
                className="block py-2 text-text-light hover:text-accent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="block py-2 text-text-light hover:text-accent-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block py-2 text-text-light hover:text-accent-emerald transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block py-2 text-text-light hover:text-accent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-6">
                Web Developer
                <span className="text-accent-cyan"> Driving Impact Through Code</span>
              </h2>
              <p className="text-lg sm:text-xl text-text-muted mb-8 leading-relaxed">
                Blending clean code with clean energy ideals. I build responsive, modern, and mission-driven web platforms that make a difference both for users and the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent-blue hover:bg-accent-blue/90 text-white"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg"
                  onClick={() => window.open('https://drive.google.com/file/d/1sLN8OqXc3MSPbohS8IUN0kD0lcXNa7nf/view?usp=drive_link', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <img
                  src="/profile-photo.jpg"
                  alt="Dhruv Agrawal - Frontend Developer"
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl shadow-black/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-accent-blue/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-surface"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
              Featured Projects
            </h3>
            <p className="text-lg sm:text-xl text-text-muted">
              Innovative solutions for a sustainable future
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
              Skills & Experience
            </h3>
            <p className="text-lg sm:text-xl text-text-muted">
              My technical expertise and professional journey
            </p>
          </motion.div>
          <SkillsTimeline />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
              Achievements
            </h3>
            <p className="text-lg sm:text-xl text-text-muted">
              Recognition for innovation and impact
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-dark-card border-gray-700 hover:shadow-xl hover:shadow-accent-blue/20 transition-all duration-300 hover:border-accent-blue/50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-accent-cyan text-left leading-relaxed">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="outline">{achievement.date}</Badge>
                    </div>
                    <CardDescription className="text-left">
                      {achievement.subtitle}
                    </CardDescription>
                    <CardDescription className="text-left">
                      {achievement.description}
                    </CardDescription>
                    {achievement.link && (
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
                          onClick={() => window.open(achievement.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    )}
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
              Get In Touch
            </h3>
            <p className="text-lg sm:text-xl text-text-muted">
              Let's collaborate on sustainable technology solutions
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-text-light mb-4">
                  Connect With Me
                </h4>
                <div className="space-y-4">
                  <a
                    href="https://github.com/dhruv552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-muted hover:text-accent-blue transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dhruvagrawal013/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-muted hover:text-accent-cyan transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linktr.ee/Dhruvagrawal013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-muted hover:text-accent-emerald transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h4.15c.525.007.973-.373 1.052-.89 0-.162 0-.323-.08-.486L12.395 11.5a.78.78 0 0 0-.395-.486.781.781 0 0 0-.79 0 .78.78 0 0 0-.395.486l-1.652 3.566Zm-4.907-7.813a.78.78 0 0 0-.395.486L.958 11.175c-.08.162-.08.323-.08.486.08.517.528.897 1.052.89h4.15c.525.007.973-.373 1.052-.89 0-.163 0-.324-.08-.486L5.4 7.739a.78.78 0 0 0-.395-.486.781.781 0 0 0-.79 0 .78.78 0 0 0-.169 0Zm11.852 0a.78.78 0 0 0-.395.486l-1.693 3.436c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h4.15c.525.007.973-.373 1.052-.89 0-.162 0-.323-.08-.486l-1.693-3.436a.78.78 0 0 0-.395-.486.781.781 0 0 0-.79 0 .78.78 0 0 0-.118 0Z" />
                    </svg>
                    <span>LinkTree</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:dhruvagrawal552@gmail.com"
                    className="flex items-center space-x-3 text-text-muted hover:text-accent-blue transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>dhruvagrawal552@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919752476691"
                    className="flex items-center space-x-3 text-text-muted hover:text-accent-emerald transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 9752476691</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-muted">
            © 2025 Dhruv Agrawal. Built with React, TypeScript, and sustainable
            practices in mind.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
