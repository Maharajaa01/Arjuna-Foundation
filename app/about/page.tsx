'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
const teamMembers = [
  {
    name: "Bhaskaran",
    role: "Founder & President",
    image: "volunters/bhasky.jpg",
    bio: "Bhaskaran founded Arjuna Foundation in 2019 with a vision to create sustainable change in underserved communities."
  },
  {
    name: "Arunachalam",
    role: "Director of Operations",
    image: "volunters/arunachalam.webp",
    bio: "With 15 years in nonprofit management, Arunachalam ensures our programs run efficiently and deliver maximum impact."
  },
  {
    name: "Gowtham",
    role: "Community Outreach Coordinator",
    image: "asset/gowtham.jpg",
    bio: "Gowtham builds strong community relationships and tailors outreach initiatives to meet evolving local needs."
  },
  {
    name: "Pandian",
    role: "Education Program Manager",
    image: "/volunters/pandian.jpeg",
    bio: "Pandian oversees our education programs, empowering students through scholarships and learning opportunities."
  },
  {
    name: "Kannan",
    role: "Healthcare Initiative Lead",
    image:"/volunters/Kannan.jpg",
    bio: "Kannan leads health outreach programs, focusing on preventive care and wellness in underserved regions."
  },
  {
    name: "Surya",
    role: "Volunteer Coordinator",
    image: "/volunters/surya.jpg",
    bio: "Surya organizes volunteer efforts, ensuring each individual finds a meaningful way to contribute to our mission."
  },
  {
    name: "Aishwarya K",
    role: "Volunteer Coordinator",
    image: "/volunters/aishwarya.jpg",
    bio: "Aishwarya focuses on volunteer training and engagement, helping build a committed and passionate support network."
  },
  {
    name: "S MARIMUTHU",
    role: "Volunteer Coordinator",
    image: "/volunters/Marimuthu.jpg",
    bio: "Marimuthu manages local volunteer logistics and helps facilitate smooth operations during community events."
  },
  {
    name: "Lokesh P",
    role: "Volunteer Coordinator",
    image: "/volunters/lokesh.jpg",
    bio: "Lokesh brings energy and dedication to mobilizing volunteers and organizing outreach initiatives on the ground."
  },
  {
    name: "Karan S",
    role: "Volunteer Coordinator",
    image: "/volunters/Karan.jpg",
    bio: "Karan supports volunteer recruitment and ensures teams are well-equipped for community service activities."
  },
  {
    name: "GNANAPRAKASAM E",
    role: "Volunteer Coordinator",
    image: "/volunters/gnanaprakasam.jpg",
    bio: "Gnanaprakasam oversees event coordination and encourages community members to get involved in our mission."
  },
  {
    name: "Arvind S",
    role: "Volunteer Coordinator",
    image: "/volunters/Arvind.jpeg",
    bio: "Arvind manages day-to-day volunteer schedules and ensures smooth execution of our local projects."
  },
  {
    name: "Udhayanidhi S",
    role: "Volunteer Coordinator",
    image: "/volunters/Udhayanidhi.jpeg",
    bio: "Udhayanidhi helps onboard new volunteers and coordinates efforts for various community initiatives."
  },
  {
    name: "Dhanabal V",
    role: "Volunteer Coordinator",
    image: "/volunters/Dhanabal.jpeg",
    bio: "Dhanabal supports backend volunteer management and assists with event planning and execution."
  },
  {
    name: "Krishaan",
    role: "Volunteer Coordinator",
    image: "/volunters/Krishaan.jpg",
    bio: "Krishaan fosters a spirit of service among youth volunteers and promotes grassroots involvement."
  },
  {
    name: "Balamurugan S",
    role: "Trustee",
    image: "/volunters/balamurugan.jpg",
    bio: "Balamurugan, a Metropolitan Transport Corporation conductor, brings dedication and community insight as a trustee."
  },
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
                  src="/asset/arjunagroup.JPG"
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
          
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
          </div> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {teamMembers.map((member, index) => (
    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
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