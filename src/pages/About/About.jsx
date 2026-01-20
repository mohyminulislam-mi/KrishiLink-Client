import React, { useEffect } from "react";
import { Sprout, Users, MessageSquare, TrendingUp } from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            About <span className="text-green-600">KrishiLink</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting farmers and buyers across Bangladesh — grow, trade, and
            thrive with confidence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <img
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
              src="https://i.ibb.co.com/wHp7ZMd/farmer.jpg"
              alt="Farmer working in field"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="text-base sm:text-lg text-gray-700 space-y-6">
              <p className="leading-relaxed">
                <span className="text-green-600 font-bold text-2xl sm:text-3xl">
                  KrishiLink
                </span>{" "}
                is a modern web application that connects people in the
                agricultural sector such as farmers, traders, and consumers in
                one digital space.
              </p>

              <div>
                <p className="font-semibold text-gray-900 mb-3">
                  For now every user can:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Show interest to connect and collaborate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Post what they are growing or selling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Browse others crop's posts</span>
                  </li>
                </ul>
              </div>

              <p className="leading-relaxed">
                Instead of a traditional e-commerce or buyer-seller model, this
                platform works as a social agro network, where everyone can
                interact directly.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <FeatureCard
            icon={<Sprout className="w-8 h-8" />}
            title="Grow Together"
            description="Share your farming journey and learn from others in the community"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Connect Directly"
            description="Build relationships with farmers, traders, and consumers"
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8" />}
            title="Collaborate"
            description="Express interest and work together on agricultural opportunities"
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Thrive"
            description="Grow your agricultural business with confidence and support"
          />
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            We envision a Bangladesh where every farmer has direct access to
            markets, every buyer can source fresh produce with confidence, and
            agricultural communities thrive through digital connectivity and
            collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
