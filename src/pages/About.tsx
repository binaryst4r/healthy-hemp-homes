import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Healthy Hemp Homes
            </h1>
            <p className="text-xl text-gray-600">
              Pioneering sustainable home construction in Colorado with
              hempcrete technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Healthy Hemp Homes LLC was founded with a simple mission: to
                bring sustainable, high-performance hempcrete construction to
                Colorado homeowners. As partners with a shared passion for
                sustainable building, we saw an opportunity when hemp became
                legal in the United States.
              </p>
              <p>
                For years, hempcrete has been used in Europe to build homes that
                are more comfortable, more durable, and better for the
                environment than conventional construction. With the legalization
                of hemp in America, we can finally bring this technology to
                Colorado.
              </p>
              <p>
                We're currently working on our first project in the mountains of
                Littleton — a custom home that will showcase the beauty and
                performance of hempcrete construction. While we're still in the
                early stages with site preparation underway, we're excited to
                demonstrate what's possible with this remarkable material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Hempcrete */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Hempcrete?
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Hempcrete is a bio-composite building material made from the
                woody inner core of the hemp plant (called "hurds" or "shiv")
                mixed with a lime-based binder. When packed into forms around a
                traditional wood frame, it creates walls that replace drywall,
                insulation, sheathing, and siding all in one.
              </p>
              <p>
                The construction process is similar to conventional building —
                we start with a standard frame, then pack hempcrete into forms
                around it. Once cured, the hempcrete walls have a beautiful,
                natural texture similar to stucco or adobe.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Hemp
                </h3>
                <p className="text-gray-600">
                  We use hemp hurds — the woody core left over after hemp fiber
                  is extracted. This byproduct of the CBD and textile industries
                  is transformed into a valuable building material.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Lime
                </h3>
                <p className="text-gray-600">
                  Natural hydraulic lime acts as the binder, mineralizing around
                  the hemp fibers. Over time, the lime actually absorbs CO2 from
                  the air, turning back into limestone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Hempcrete
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Superior Insulation
              </h3>
              <p className="text-gray-600">
                Hempcrete provides excellent thermal mass and insulation,
                keeping your home comfortable year-round with lower energy
                costs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Long-Lasting
              </h3>
              <p className="text-gray-600">
                Hempcrete structures in Europe have stood for centuries. The
                material actually gets stronger over time as the lime continues
                to cure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fire Resistant
              </h3>
              <p className="text-gray-600">
                Hempcrete is naturally fire-resistant due to its mineral
                content, providing an extra layer of safety for your family.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
                Pest & Mold Resistant
              </h3>
              <p className="text-gray-600">
                The lime in hempcrete creates an alkaline environment that
                naturally resists pests, mold, and mildew.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
                Hemp absorbs CO2 as it grows, and the lime continues to absorb
                carbon as it cures. Your home actually helps the environment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cost Effective
              </h3>
              <p className="text-gray-600">
                While material costs are competitive, the real savings come from
                reduced energy bills and minimal maintenance over the life of
                your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Learning More?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We'd love to tell you more about hempcrete and how it could work for
            your dream home.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
