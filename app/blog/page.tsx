'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

type BlogPost = {
  title: string;
  image: string;
  description: string;
};

const staticPosts: BlogPost[] = [
  {
    title: "Empowering Ability with an Electric Wheelchair",
    image: "blog/wheelchair.jpg",
    description: "We donated an electric wheelchair to a specially-abled individual, enhancing their independence and mobility in daily life.",
  },
    {
    title: "Helping Homeless",
    image: "blog/homeless.jpg",
    description: "Celebrated NEW YEAR 2023 by donating bedSheets for roadside living people!!.",
  },
  {
    title: "Green Drive: 250+ Trees Planted in Thiruvanmayur",
    image: "blog/tree-plantation.jpeg",
    description: "Our volunteers planted 250+ saplings, contributing to a greener and healthier Thiruvanmayur community.",
  },
  {
    title: "Supporting the Visually Impaired with Essentials",
    image: "blog/blindpeople.jpg",
    description: "We provided food, groceries, dresses,and hygiene products to bfor Blind charitable trust to support their everyday needs.",
  },
  {
    title: "Helping Chennai Corporation Workers",
    image: "blog/corporation-help.jpg",
    description: "Assisted corporation workers by distributing food packets and other basic necessities for their families.",
  },
  {
    title: "Upgrading a Government School",
    image: "blog/school-support.jpg",
    description: "Donated a water purifier and school accessories to improve student well-being and educational facilities.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impacts That We Created</h1>
          <p className="text-xl opacity-90">Our routine activities making a difference</p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {staticPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
