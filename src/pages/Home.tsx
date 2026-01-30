import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Homes That Outlast{' '}
              <span className="text-primary">Generations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 italic">
              "Home is where the hemp is"
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Custom hempcrete homes for Colorado's Front Range. One material replaces
              drywall, insulation, sheathing, and siding — delivering superior comfort,
              durability, and a carbon-negative footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium text-lg"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Hempcrete Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Hempcrete?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A bio-composite of hemp hurd and lime that replaces four conventional
              materials in one. Used in Europe for decades, now available for custom
              homes in Colorado thanks to the 2018 Farm Bill.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Carbon Negative
              </h3>
              <p className="text-gray-600">
                Hemp absorbs CO2 as it grows. Lime continues absorbing carbon
                for decades as it cures. Your walls actively reduce atmospheric
                carbon.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Built to Last
              </h3>
              <p className="text-gray-600">
                Fire-resistant, pest-resistant, mold-resistant. Hempcrete
                structures in Europe have stood for centuries — and the lime
                binder strengthens over time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Year-Round Comfort
              </h3>
              <p className="text-gray-600">
                Thermal mass plus insulation creates stable indoor temperatures.
                Vapor-permeable walls regulate humidity naturally. Lower energy
                bills follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Custom hempcrete homes on Colorado's Front Range — from design through
              move-in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Custom Hempcrete Homes
              </h3>
              <p className="text-gray-600 mb-4">
                Traditional wood framing meets hempcrete wall systems. We handle
                design, permitting, construction, and finishing — you get a home
                that performs better and lasts longer.
              </p>
              <Link
                to="/services"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                See our process →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring hempcrete for your next home? We will walk you through
                the material science, construction process, and costs — no
                commitment required.
              </p>
              <Link
                to="/contact"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Schedule a call →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build a Home That Gives Back
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your custom hempcrete home sequesters carbon, slashes energy costs, and
            stands for generations. Let's make it happen.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
