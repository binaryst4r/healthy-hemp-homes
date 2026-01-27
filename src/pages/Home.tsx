import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building the Future with{' '}
              <span className="text-primary">Hempcrete</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 italic">
              "Home is where the hemp is"
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Custom homes built with sustainable hempcrete — better insulated,
              more durable, and environmentally responsible.
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
              Hempcrete is a revolutionary building material made from hemp
              hurds (the woody core of the hemp plant) mixed with lime. It
              replaces traditional drywall, insulation, sheathing, and siding in
              one sustainable package.
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
                Sustainable
              </h3>
              <p className="text-gray-600">
                Made from rapidly renewable hemp and natural lime, hempcrete
                actually sequesters carbon as it cures, making it carbon
                negative.
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
                Durable
              </h3>
              <p className="text-gray-600">
                Hempcrete walls are fire-resistant, pest-resistant, and mold
                resistant. They're built to last for generations.
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
                Energy Efficient
              </h3>
              <p className="text-gray-600">
                Superior thermal mass and insulation properties mean lower
                energy bills and consistent indoor temperatures year-round.
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
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in custom home construction using hempcrete,
              bringing sustainable building to the Colorado Front Range.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Custom Home Building
              </h3>
              <p className="text-gray-600 mb-4">
                From design to completion, we build custom homes using hempcrete
                construction. Your home is framed traditionally, then we replace
                conventional materials with hempcrete for superior performance.
              </p>
              <Link
                to="/services"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Consultation & Education
              </h3>
              <p className="text-gray-600 mb-4">
                Interested in hempcrete but not sure where to start? We offer
                consultations to help you understand if hempcrete is right for
                your project.
              </p>
              <Link
                to="/contact"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Sustainably?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your dream home and how hempcrete can make it a
            reality.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
