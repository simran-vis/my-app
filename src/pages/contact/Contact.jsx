import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
     
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-white to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-[#1193d4] text-white px-4 py-2 rounded-full mb-6 font-medium">
            <MessageSquare className="w-4 h-4 mr-2" />
            We're Here to Help
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our medicines or services? Our dedicated team is available 24/7 to assist you with all your healthcare needs.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Available 24/7</p>
              <a href="tel:1800-XXX-XXXX" 
              className="text-[#1193d4] font-semibold hover:text-[#0e80b3] hover:scale-105 transition-all duration-200">
                1800-XXX-XXXX
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Quick response time</p>
              <a href="mailto:support@medicareplus.com" 
              className="text-[#1193d4] font-semibold hover:text-[#0e80b3] hover:scale-105 transition-all duration-200">
                support@medicareplus.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Main Office</p>
              <p 
              className="text-[#1193d4] font-semibold hover:text-[#0e80b3] ">
                123 Health Street, Mumbai
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-3">Open Every Day</p>
              <p 
              className="text-[#1193d4] font-semibold hover:text-[#0e80b3] ">
                24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Form Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 mb-6 flex items-center">
                  <div className="bg-emerald-500 rounded-full p-2 mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900">Message Sent Successfully!</h4>
                    <p className="text-emerald-700">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    < label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="prescription">Prescription Question</option>
                    <option value="delivery">Delivery Status</option>
                    <option value="product">Product Information</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1193d4] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              <div className="bg-[#1193d4] rounded-3xl p-10 text-white">
                <h3 className="text-3xl font-bold mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Expert Support</h4>
                      <p className="text-emerald-50">Licensed pharmacists available to answer your questions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Quick Response</h4>
                      <p className="text-emerald-50">Average response time under 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Multiple Channels</h4>
                      <p className="text-emerald-50">Reach us via phone, email, or this form</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#1193d4] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">How do I upload my prescription?</h4>
                    <p className="text-gray-600 text-sm">You can upload prescriptions during checkout or email them to prescriptions@medicareplus.com</p>
                  </div>
                  <div className="border-l-4 border-[#1193d4] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">What are your delivery timelines?</h4>
                    <p className="text-gray-600 text-sm">Standard delivery is 2-3 days. Express delivery available in select cities within 24 hours.</p>
                  </div>
                  <div className="border-l-4 border-[#1193d4] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Do you verify prescriptions?</h4>
                    <p className="text-gray-600 text-sm">Yes, all prescriptions are verified by licensed pharmacists before processing.</p>
                  </div>
                  <div className="border-l-4 border-[#1193d4] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Can I return medicines?</h4>
                    <p className="text-gray-600 text-sm">Unopened medicines can be returned within 7 days. Contact us for return authorization.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                <p className="text-gray-700 mb-4">
                  For urgent medical emergencies, please call our 24/7 helpline or contact emergency services immediately.
                </p>
                <a
                  href="tel:1800-XXX-XXXX"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Helpline
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our office or distribution centers</p>
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden h-96 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MediCare Plus Headquarters</h3>
                <p className="text-gray-600">123 Health Street, Medical District</p>
                <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}