import React from "react";
import Footer from "@/components/footer/footer";

export default function FeaturesPage() {
  const features = [
    {
      icon: "📋",
      title: "Task Management",
      description: "Create, organize, and track tasks with ease. Set priorities, deadlines, and collaborate seamlessly."
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Work together in real-time. Share updates, files, and feedback instantly across your team."
    },
    {
      icon: "📊",
      title: "Project Analytics",
      description: "Gain insights into your project progress with detailed reports and performance metrics."
    },
    {
      icon: "🔄",
      title: "Workflow Automation",
      description: "Streamline repetitive tasks with smart automation. Focus on what matters most."
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Access your projects anywhere, anytime. Full mobile support for on-the-go productivity."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with encryption, SSO, and compliance standards you can trust."
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-[#000212] text-[#f7f8f8] pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Powerful Features</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to manage projects, collaborate with your team, and deliver results faster.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="rounded-lg p-8 border border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-12 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Exonium to streamline their workflows and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
