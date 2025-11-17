import React from "react";
import Footer from "@/components/footer/footer";

export default function CompanyPage() {
  const values = [
    {
      icon: "⚡",
      title: "Speed & Efficiency",
      description: "We believe in building fast, reliable tools that help teams move quickly without compromising on quality."
    },
    {
      icon: "🎯",
      title: "Focus on Impact",
      description: "Every feature we build is designed to solve real problems and create meaningful value for our users."
    },
    {
      icon: "🤝",
      title: "Collaboration First",
      description: "Great products are built by great teams. We prioritize communication, transparency, and mutual support."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We're constantly pushing boundaries and exploring new ways to improve how teams work together."
    }
  ];

  const team = [
    {
      name: "Arun",
      role: "Founder & CEO",
      description: "Passionate about building tools that empower teams to do their best work.",
      avatar: "🧑‍💻"
    },
    {
      name: "Aarav",
      role: "Head of Design",
      description: "Crafting beautiful, intuitive experiences that users love.",
      avatar: "👩‍🎨"
    },
    {
      name: "Divyansh",
      role: "Lead Engineer",
      description: "Building scalable, robust infrastructure that powers millions of workflows.",
      avatar: "👨‍🔧"
    },
    {
      name: "Anant",
      role: "Product Manager",
      description: "Bridging the gap between user needs and technical possibilities.",
      avatar: "👩‍💼"
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-[#000212] text-[#f7f8f8] pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Exonium</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize how teams collaborate, plan, and build products. 
              Exonium is designed to streamline workflows and empower teams to focus on what matters most.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  To build the world's most intuitive project management platform that helps teams 
                  turn ideas into reality faster than ever before.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We believe that great software should get out of your way and let you focus on 
                  creating amazing products. That's why we've built Exonium to be simple, powerful, 
                  and delightful to use.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-gray-800">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Why We Started</h3>
                  <p className="text-gray-400">
                    After years of jumping between multiple tools and struggling with complex workflows, 
                    we decided to build the solution we wished existed - a unified platform that just works.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                These principles guide everything we do, from product decisions to how we work together.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Meet the Team</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We're a diverse group of passionate individuals united by our love for great design and engineering.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <p className="text-gray-400">Tasks Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <p className="text-gray-400">Uptime</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <p className="text-gray-400">Support</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-12 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Join Our Journey</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for building 
              exceptional products. Come help us shape the future of team collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Open Positions
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More About Our Culture
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
