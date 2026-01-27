import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/HHH-Logo.png"
                alt="Healthy Hemp Homes"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-semibold text-lg">Healthy Hemp Homes</span>
            </div>
            <p className="text-gray-400 text-sm italic mb-4">
              "Home is where the hemp is"
            </p>
            <p className="text-gray-400 text-sm">
              Building sustainable homes with hempcrete — better insulated, more
              durable, and environmentally friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Serving the Colorado Front Range</li>
              <li>Littleton, CO area</li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="text-primary-light hover:text-white transition-colors"
                >
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Healthy Hemp Homes LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
