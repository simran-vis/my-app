import { Heart, Shield, Truck, HeadphonesIcon, CheckCircle, Award, Users, Clock, PackageCheck, Star, TrendingUp, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section with Image */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-medium">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 50,000+ Customers
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health,
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
We deliver authentic medicines and wellness essentials—backed by trust, care, and a promise of better health for every family.              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-semibold text-lg">
                  Explore Products
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition-all font-semibold text-lg">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pharmacy"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-emerald-100">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <Award className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Authentic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-emerald-100 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-emerald-100 font-medium">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-emerald-100 font-medium">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-emerald-100 font-medium">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professionals"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Founded on Trust, Built with Care
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
Our journey began with a single vision — to make healthcare simple, genuine, and accessible for all.                </p>
                <p>
What started as a small initiative by healthcare professionals has grown into a trusted online pharmacy serving families nationwide. We witnessed the daily struggle of people searching for reliable medicines — and decided to change that.                </p>
                <p>
Today, we proudly connect you to licensed pharmacists, certified manufacturers, and a seamless digital platform built on care, trust, and transparency.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by purpose, driven by passion
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white m-1 rounded-3xl p-10 h-full">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
To make quality healthcare accessible for every home — by providing verified medicines, expert guidance, and fast, reliable delivery — all with integrity and compassion.                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white m-1 rounded-3xl p-10 h-full">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
To be India’s most trusted healthcare partner — where every product ensures safety, every delivery builds trust, and every interaction promotes well-being.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Because your health deserves more than just convenience — it deserves confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified & Authentic Medicines</h3>
              <p className="text-gray-600 leading-relaxed">
                Every medicine sourced from licensed manufacturers and verified by certified pharmacists. Zero tolerance for counterfeits.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Ordering Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert prescription review, drug interaction checks, and personalized guidance from certified professionals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Reliable Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast, secure, and discreet delivery with tamper-proof packaging. Temperature-controlled for sensitive medications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <HeadphonesIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock assistance for orders, prescriptions, and health queries. We're always here when you need us.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Ordering</h3>
              <p className="text-gray-600 leading-relaxed">
                Intuitive platform with quick prescription uploads, smart search, and one-click reordering for repeat medications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <PackageCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-grade encryption protects your financial data. Multiple payment options for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Quality Assurance
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
Ensuring Every Medicine Meets the Highest Standards of Safety and Authenticity
            </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Government-Approved Sources</h4>
                    <p className="text-gray-600">
All medicines sourced exclusively from licensed manufacturers” → “Sourced only from government-approved, certified manufacturers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Verification</h4>
                    <p className="text-gray-600">Licensed pharmacists review every prescription for accuracy and safety.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Proper Storage Protocols</h4>
                    <p className="text-gray-600">Temperature-controlled facilities ensure medication potency and effectiveness.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <PackageCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Tamper-Proof Packaging</h4>
                    <p className="text-gray-600">Secure sealing guarantees product integrity from our facility to your doorstep.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality control"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Absolutely reliable service! The medicines are always genuine, and the delivery is prompt. Their pharmacist even called to confirm my prescription details."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-500">Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Best online pharmacy I've used. The customer support is exceptional, and I love that they verify everything before shipping. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-500">Bangalore, Karnataka</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Managing my elderly parents' medications has become so much easier. The reminder system and auto-refill options are life-savers. Thank you!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Amit Patel</div>
                  <div className="text-sm text-gray-500">Delhi, NCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
Take the Next Step Toward Smarter, Safer Healthcare          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
Join thousands who trust us for authentic medicines and compassionate service — delivered with care, anytime, anywhere.          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              Start Shopping Now
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all">
              Talk to a Pharmacist
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8 text-emerald-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}