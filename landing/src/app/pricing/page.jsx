import React from "react";
import Footer from "@/components/footer/footer";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Free for everyone",
      features: [
        "Unlimited members",
        "2 teams",
        "250 issues",
        "Slack and GitHub",
        "AI agents"
      ],
      buttonText: "Get started",
      buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white"
    },
    {
      name: "Basic",
      price: "$10",
      period: "per user/month",
      description: "Billed yearly",
      features: [
        "All Free features +",
        "5 teams",
        "Unlimited issues",
        "Unlimited file uploads",
        "Admin roles"
      ],
      buttonText: "Get started",
      buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white"
    },
    {
      name: "Business",
      price: "$16",
      period: "per user/month",
      description: "Billed yearly",
      features: [
        "All Basic features +",
        "Unlimited teams",
        "Private teams and guests",
        "Triage Intelligence",
        "Linear Insights",
        "Linear Asks",
        "Issue SLAs",
        "Zendesk and Intercom integrations"
      ],
      buttonText: "Get started",
      buttonStyle: "bg-white hover:bg-gray-100 text-black",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact us",
      period: "",
      description: "Annual billing only",
      features: [
        "All Business features +",
        "Sub-initiatives",
        "Advanced Linear Asks",
        "Dashboards",
        "SAML and SCIM",
        "Advanced security",
        "Migration and onboarding support"
      ],
      buttonText: "Request trial",
      buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white"
    }
  ];

  return (
    <main className="min-h-screen bg-[#000212] text-[#f7f8f8] pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Pricing</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Use Exonium for free with your whole team. Upgrade to enable
            unlimited issues, enhanced security controls, and additional features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 border ${
                plan.popular
                  ? "border-white/20 bg-gray-800/50"
                  : "border-gray-800 bg-gray-900/50"
              } relative transition-all duration-300 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>

              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-8">
            Powering the world's best product teams
          </p>
          <div className="overflow-hidden w-full">
            <div className="flex items-center space-x-16 opacity-50 animate-scroll-logos">
              <div className="text-gray-500 font-semibold whitespace-nowrap">vercel</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">CURSOR</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">BOOM</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">ramp</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">OpenAI</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">Shopify</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">Linear</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">Figma</div>
              {/* Duplicate for seamless loop */}
              <div className="text-gray-500 font-semibold whitespace-nowrap">vercel</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">CURSOR</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">BOOM</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">ramp</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">OpenAI</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">Shopify</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">Linear</div>
              <div className="text-gray-500 font-semibold whitespace-nowrap">Figma</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
