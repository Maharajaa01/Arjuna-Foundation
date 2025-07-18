
'use client';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import CounterSection from '../components/CounterSection';
import VolunteerCTA from '../components/VolunteerCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-blue-600">Arjuna Foundation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dedicated to creating positive change in our communities through compassionate service, 
              education, and sustainable development initiatives that empower lives and build hope.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
        <Link href="/donate">
                Get Involved
              </Link>
              </button>
            </div>
          </div>
{/* Static Banner Section */}
<section className="py-8 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <img
        src="asset/static-banner.jpg"
        alt="Arjuna Foundation banner"
        className="w-full h-auto object-contain sm:object-cover sm:h-[500px] md:h-[600px] lg:h-[800px]"
      />
    </div>
  </div>
</section>



    
        </div>
      </section>

      <CounterSection />
      <VolunteerCTA />
          <ImageCarousel />

{/* Testimonials Section */}
{/* Testimonials Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Stories of Impact
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Hear from those whose lives have been touched by our foundation's work
      </p>
    </div>

    {/* Horizontal Scroll with scrollbar hidden */}
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 md:gap-10 px-2 md:px-4 scroll-smooth pb-2">
        {[
     {
            name: "Gowtham",
            role: "Volunteer",
            image:
              "volunters/gowtham.jpg",
            quote:
              "Volunteering here has been the most rewarding experience. Every day I see how small acts of kindness create big changes."
          },
          {
            name: "Ramanathan",
            role: "Senior Citizen",
            image:
            
              "asset/speciallyabled.jpg",
            quote:
              "The volunteers visit me weekly and help with groceries and Gave Me Electric wheelchair. Their friendship means the world to me."
          },
      
          {
            name: "Aishwarya",
            role: "Scholarship Recipient",
            image:
              "https://readdy.ai/api/search-image?query=Portrait%20of%20young%20Indian%20girl%20student%20smiling%2C%20thankful%20expression%2C%20simple%20clean%20background%2C%20beneficiary%20testimonial%2C%20school%20uniform&width=200&height=200&seq=testimonial4&orientation=squarish",
            quote:
              "With their scholarship, I could complete high school and now study engineering. They believed in me when no one else did."
          },
          {
            name: "Nantha kumar",
            role: "Goverment School Principle",
            image:
              "https://readdy.ai/api/search-image?query=Portrait%20of%20young%20Indian%20man%20with%20bright%20smile%2C%20professional%20headshot%2C%20clean%20background%2C%20community%20leader%20and%20change%20maker&width=200&height=200&seq=testimonial5&orientation=squarish",
            quote:
              "Arjuna Foundation helped transform our entire School with clean water, and health awareness."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="min-w-[360px] max-w-[360px] bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md"
              />
              <h4 className="text-xl font-semibold text-blue-900">{item.name}</h4>
              <p className="text-sm text-blue-600">{item.role}</p>
            </div>
            <p className="text-gray-700 italic text-base leading-relaxed">
              "{item.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
}
