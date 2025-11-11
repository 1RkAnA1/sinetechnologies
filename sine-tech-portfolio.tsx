import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Network, Brain, Database } from "lucide-react";
import { useState, useEffect } from "react";

export default function PortfolioSite() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="service-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Laptop className="w-10 h-10 text-blue-600" />,
      title: "IT Strategy & Consulting",
      desc: "Helping organizations align technology initiatives with business goals through strategic planning and digital transformation roadmaps.",
    },
    {
      icon: <Network className="w-10 h-10 text-green-600" />,
      title: "Infrastructure & Cloud Solutions",
      desc: "Designing and deploying secure, scalable infrastructure across on-premises, hybrid, and multi-cloud environments.",
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-600" />,
      title: "Data & Analytics",
      desc: "Building data-driven capabilities using analytics, AI, and business intelligence to drive smarter decision-making.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-600" />,
      title: "Systems Integration",
      desc: "Integrating legacy and modern systems to streamline workflows, reduce redundancy, and enhance operational efficiency.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-blue-700">SINE Technologies</h1>
          <nav className="space-x-6">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in">
          Empowering Digital Transformation
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          SINE Technologies partners with businesses to modernize infrastructure, harness data, and innovate through technology.
        </p>
        <Button size="lg" variant="secondary">Get in Touch</Button>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              id={`service-${i}`}
              className={`transition-all duration-700 ${
                isVisible[`service-${i}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Card className="shadow-md hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{s.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">About SINE Technologies</h3>
            <p className="text-gray-700 mb-6">
              Founded by Robert Kanarski, SINE Technologies provides IT consulting services focused on optimizing enterprise systems and driving innovation. With a background spanning data architecture, regulatory reporting, and agile product management, SINE delivers practical, high-impact solutions.
            </p>
            <Button>Learn More</Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=60"
            alt="Team collaborating"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
        <p className="text-gray-700 mb-10">
          Interested in partnering with SINE Technologies? Reach out to discuss your next project.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} SINE Technologies. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}