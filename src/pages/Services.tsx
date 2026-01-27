import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Custom hempcrete home construction for the Colorado Front Range.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Home Building
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Our primary service is building custom homes using hempcrete
                  construction. We work with you from concept to completion,
                  creating a home that's uniquely yours while being sustainable
                  and high-performing.
                </p>
                <p>
                  The construction process starts with traditional framing —
                  your home is built with a standard wood frame structure. Then,
                  instead of conventional drywall, insulation, and siding, we
                  pack hempcrete into forms around the frame. The result is a
                  monolithic wall system that provides:
                </p>
                <ul className="space-y-2">
                  <li>Thermal insulation</li>
                  <li>Structural sheathing</li>
                  <li>Interior and exterior finish</li>
                  <li>Moisture regulation</li>
                </ul>
                <p>
                  The finished walls have a beautiful, natural texture similar
                  to stucco or adobe, and can be left natural or finished with
                  lime wash in any color you choose.
                </p>
              </div>
            </div>
            <div className="bg-accent rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What's Included
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Full design consultation and planning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Site preparation and foundation work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Traditional wood framing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Hempcrete wall installation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Roofing, plumbing, and electrical
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Interior finishing and trim
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Hempcrete vs. Traditional Construction
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold rounded-tl-xl">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Hempcrete
                  </th>
                  <th className="px-6 py-4 text-left font-semibold rounded-tr-xl">
                    Traditional
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Insulation
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Excellent thermal mass + insulation
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Depends on insulation type
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Fire Resistance
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Naturally fire-resistant
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Requires fire-rated materials
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Moisture
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Breathable, regulates humidity
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Requires vapor barriers
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Pest/Mold
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Naturally resistant
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Susceptible without treatment
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Environmental Impact
                  </td>
                  <td className="px-6 py-4 text-gray-600">Carbon negative</td>
                  <td className="px-6 py-4 text-gray-600">Carbon intensive</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Longevity
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Centuries (gets stronger over time)
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    50-100 years typical
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 rounded-bl-xl">
                    Energy Costs
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Significantly lower
                  </td>
                  <td className="px-6 py-4 text-gray-600 rounded-br-xl">
                    Standard
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-600">
                We discuss your vision, requirements, and budget to understand
                your dream home.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Design
              </h3>
              <p className="text-gray-600">
                We create detailed plans optimized for hempcrete construction
                and your site.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Construction
              </h3>
              <p className="text-gray-600">
                Foundation, framing, and hempcrete installation bring your home
                to life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Completion
              </h3>
              <p className="text-gray-600">
                Final finishes, inspection, and handover of your sustainable
                dream home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how hempcrete can make your dream home a reality.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
