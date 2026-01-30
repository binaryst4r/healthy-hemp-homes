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
              Bringing proven hempcrete construction to Colorado — building homes
              that perform better and last longer.
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
                Healthy Hemp Homes exists because hempcrete construction is too
                good to remain a European secret. The 2018 Farm Bill made hemp
                cultivation legal in the US, and we saw a chance to bring
                decades-proven building science to Colorado homeowners.
              </p>
              <p>
                Hempcrete homes have stood in Europe for over a century. They
                outperform conventional construction on comfort, durability, and
                environmental impact — and now they are possible here.
              </p>
              <p>
                Our current project in the Littleton mountains is in the early
                construction phase. Site prep is complete, and we are building a
                custom home that will demonstrate hempcrete's performance in
                Colorado's climate.
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
                Hemp hurd — the woody core left after fiber extraction — mixed
                with a lime-based binder creates a bio-composite that replaces
                four conventional materials: drywall, insulation, sheathing, and
                siding.
              </p>
              <p>
                We frame traditionally with wood, then pack hempcrete into forms
                around the structure. Once cured, the walls deliver a monolithic,
                stucco-like finish inside and out.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Hemp
                </h3>
                <p className="text-gray-600">
                  Hemp hurd is the woody core left after fiber extraction — an
                  agricultural byproduct transformed into high-performance
                  building material. Hemp grows fast, sequesters carbon, and
                  requires minimal inputs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Lime
                </h3>
                <p className="text-gray-600">
                  Natural hydraulic lime binds the hemp, mineralizing around
                  each fiber. Over decades, the lime carbonates — absorbing CO2
                  and gradually returning to limestone. The walls get stronger
                  with age.
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
                Thermal Performance
              </h3>
              <p className="text-gray-600">
                Insulation plus thermal mass means stable temperatures. Walls
                absorb heat during the day and release it at night — reducing
                HVAC load year-round.
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
                Century-Plus Lifespan
              </h3>
              <p className="text-gray-600">
                Hempcrete structures in Europe have lasted over 100 years.
                Lime continues curing for decades, so walls grow stronger —
                not weaker — over time.
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
                The mineral content of lime makes hempcrete inherently
                fire-resistant — a meaningful advantage in Colorado's
                wildfire-prone areas.
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
                Pest and Mold Resistant
              </h3>
              <p className="text-gray-600">
                Lime creates an alkaline environment inhospitable to pests,
                mold, and mildew. No chemical treatments needed.
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
                Hemp sequesters carbon during growth. Lime absorbs CO2 as it
                cures. The math works out: hempcrete walls remove more carbon
                than they emit.
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
                Lifetime Value
              </h3>
              <p className="text-gray-600">
                Lower energy bills. Minimal maintenance. A lifespan measured in
                centuries. The upfront investment pays dividends for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Hempcrete?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you are ready to build or just curious, we are happy to
            answer questions and walk you through the possibilities.
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
