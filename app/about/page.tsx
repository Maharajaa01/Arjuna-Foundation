'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & President",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20middle-aged%20Indian%20woman%20doctor%2C%20warm%20smile%2C%20wearing%20professional%20attire%2C%20simple%20clean%20background%2C%20leadership%20and%20compassion%20in%20expression%2C%20medical%20professional&width=300&height=400&seq=team1&orientation=portrait",
      bio: "Dr. Sharma founded Arjuna Foundation in 2015 with a vision to create sustainable change in underserved communities."
    },
    {
      name: "Michael Thompson",
      role: "Director of Operations",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20middle-aged%20man%20in%20business%20attire%2C%20friendly%20smile%2C%20simple%20clean%20background%2C%20showing%20leadership%20and%20organizational%20skills%2C%20operations%20manager&width=300&height=400&seq=team2&orientation=portrait",
      bio: "With 15 years in nonprofit management, Michael ensures our programs run efficiently and effectively."
    },
    {
      name: "Lisa Park",
      role: "Community Outreach Coordinator",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Asian%20woman%20with%20bright%20smile%2C%20wearing%20casual%20professional%20attire%2C%20simple%20clean%20background%2C%20showing%20enthusiasm%20and%20community%20spirit%2C%20outreach%20coordinator&width=300&height=400&seq=team3&orientation=portrait",
      bio: "Lisa connects with local communities to identify needs and develop targeted support programs."
    },
    {
      name: "David Rodriguez",
      role: "Education Program Manager",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Hispanic%20man%20teacher%20with%20kind%20smile%2C%20wearing%20casual%20professional%20attire%2C%20simple%20clean%20background%2C%20showing%20dedication%20to%20education%20and%20mentoring%2C%20education%20manager&width=300&height=400&seq=team4&orientation=portrait",
      bio: "David oversees our educational initiatives and scholarship programs for underprivileged students."
    },
    {
      name: "Dr. Amanda Foster",
      role: "Healthcare Initiative Lead",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20woman%20doctor%20with%20stethoscope%2C%20warm%20professional%20smile%2C%20medical%20professional%20attire%2C%20simple%20clean%20background%2C%20showing%20medical%20expertise%20and%20care&width=300&height=400&seq=team5&orientation=portrait",
      bio: "Dr. Foster leads our mobile health clinics and preventive care programs in rural areas."
    },
    {
      name: "James Wilson",
      role: "Volunteer Coordinator",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20friendly%20middle-aged%20man%20with%20welcoming%20smile%2C%20casual%20professional%20attire%2C%20simple%20clean%20background%2C%20showing%20warmth%20and%20community%20leadership%2C%20volunteer%20coordinator&width=300&height=400&seq=team6&orientation=portrait",
      bio: "James manages our volunteer programs and ensures meaningful engagement opportunities for all supporters."
    }
  ];

function TimelineZigzagItem({
  milestone,
  align
}: {
  milestone: { year: string; event: string };
  align: 'left' | 'right';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative mb-16 pl-10 md:pl-16 ${align === 'right' ? 'md:ml-auto md:pr-16' : ''} max-w-xl`}
    >
      {/* Curve Line */}
      <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-md"></div>
      <div
        className={`absolute hidden md:block top-2 h-10 w-10 border-t-2 border-blue-300 rounded-tl-full ${
          align === 'right' ? '-left-10 rotate-180' : '-left-10'
        }`}
      ></div>

      <div
        className={`bg-white rounded-lg shadow-md p-6 ${
          align === 'right' ? 'md:text-right' : ''
        }`}
      >
        <h3 className="text-blue-700 font-semibold text-lg">{milestone.year}</h3>
        <p className="text-gray-700">{milestone.event}</p>
      </div>
    </motion.div>
  );
}


  const milestones = [
    { year: "2019", event: "Foundation established with initial focus on education" },
    { year: "2020", event: "Launched healthcare outreach program" },
    { year: "2021", event: "Expanded to serve 5 communities" },
    { year: "2022", event: "Adapted services for pandemic response" },
    { year: "2023", event: "Reached 5,000 people helped milestone" },
    { year: "2025", event: "Opened permanent community center" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Arjuna Foundation</h1>
            <p className="text-xl opacity-90">
              Building stronger communities through compassion, dedication, and sustainable impact
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower underserved communities through comprehensive support programs 
                  in education, healthcare, and social services, creating lasting positive 
                  change and fostering self-sufficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <p className="text-gray-700">Provide quality education and skill development</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <p className="text-gray-700">Deliver accessible healthcare services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <p className="text-gray-700">Support community development initiatives</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6">
                  A world where every individual has equal access to opportunities for 
                  growth, health, and prosperity, regardless of their socioeconomic background.
                </p>
                <img
                  src="https://readdy.ai/api/search-image?query=Community%20gathering%20showing%20diverse%20group%20of%20people%20working%20together%2C%20volunteers%20and%20community%20members%20collaborating%2C%20bright%20hopeful%20atmosphere%2C%20simple%20clean%20background%2C%20showing%20unity%20and%20cooperation%20in%20community%20development&width=500&height=300&seq=vision&orientation=landscape"
                  alt="Our Vision"
                  className="w-full h-64 object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* History & Achievements */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
        Our Journey
      </h2>

      <div className="relative border-l-2 border-blue-200 ml-4">
        {milestones.map((milestone, index) => (
          <TimelineZigzagItem key={index} milestone={milestone} align={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working together to create meaningful change in our communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}