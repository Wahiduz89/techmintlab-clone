import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 lg:pr-12">
              <div className="mb-6">
                <span className="text-coral-500 font-medium text-sm tracking-wide uppercase">
                  MOBILE APP DEVELOPMENT
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Create <span className="text-blue-500">stellar mobile</span>
                <br />
                <span className="text-blue-400">apps</span> for <span className="text-coral-500">iOS & Android</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our expert team builds high-performance mobile applications using Flutter, 
                React Native, and native technologies to help you reach your customers 
                anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors font-medium">
                  View Our Portfolio
                </button>
                <button className="flex items-center justify-center bg-coral-500 text-white px-6 py-3 rounded-full hover:bg-coral-600 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  +91-7027944324
                </button>
              </div>
              
              {/* Pagination */}
              <div className="flex items-center mt-12 space-x-2">
                <div className="w-8 h-1 bg-gray-300 rounded"></div>
                <div className="w-8 h-1 bg-gray-300 rounded"></div>
                <div className="w-8 h-1 bg-coral-500 rounded"></div>
                <div className="w-8 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-coral-100 to-blue-100 rounded-tl-[100px] rounded-br-[100px] p-8">
                  <img
                    src="/images/office-team.jpg"
                    alt="Office team working"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We <span className="text-blue-500">Deliver</span> <span className="text-purple-600">Premium IT</span>
            <br />
            <span className="text-coral-500">Solutions</span> With <span className="text-coral-500">Cutting-</span>
            <br />
            <span className="text-coral-500">Edge Technology</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Blockchain Development */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-coral-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm8-2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain Development</h3>
              <p className="text-gray-600 text-center">
                Secure decentralized applications using Ethereum, Hyperledger, and Solidity
              </p>
            </div>

            {/* IoT Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-coral-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT Solutions</h3>
              <p className="text-gray-600 text-center">
                Connected device solutions with Raspberry Pi, Arduino, and custom firmware
              </p>
            </div>

            {/* Digital Transformation */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-coral-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 text-center">
                End-to-end modernization of your business processes and systems
              </p>
            </div>

            {/* Quality Assurance & Testing */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-coral-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance & Testing</h3>
              <p className="text-gray-600 text-center">
                Comprehensive testing services to ensure bug-free, high-performance software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-pink-500">Our</span> <span className="text-coral-500">Creative Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Explore our colorful collection of digital masterpieces
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ShopNest */}
            <div className="bg-pink-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-coral-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM9 18v-6h2v6H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ShopNest</h3>
              <p className="text-gray-600">Vibrant e-commerce platform with AR product preview</p>
            </div>

            {/* MediCare+ */}
            <div className="bg-green-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">MediCare+</h3>
              <p className="text-gray-600">Health tracking with AI diagnostics and telemedicine</p>
            </div>

            {/* EduVerse */}
            <div className="bg-yellow-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EduVerse</h3>
              <p className="text-gray-600">Interactive learning platform with VR classrooms</p>
            </div>

            {/* SmartNest */}
            <div className="bg-purple-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SmartNest</h3>
              <p className="text-gray-600">IoT home automation with voice control</p>
            </div>

            {/* FinTrack Pro */}
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FinTrack Pro</h3>
              <p className="text-gray-600">AI-powered personal finance dashboard</p>
            </div>

            {/* TravelEase */}
            <div className="bg-pink-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM9 18v-6h2v6H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TravelEase</h3>
              <p className="text-gray-600">Augmented reality travel planning app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-coral-100 to-blue-100 rounded-tl-[100px] rounded-br-[100px] p-8">
                  <img
                    src="/images/team-collaboration.jpg"
                    alt="Team collaboration"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-coral-500">Transform Your Business</span>
                <br />
                With Our <span className="text-blue-500">Tech Solutions</span> &
                <br />
                <span className="text-purple-600">Digital</span> <span className="text-purple-600">Expertise</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                TechMintLab is a premier IT development company specializing in 
                creating cutting-edge mobile apps, websites, and desktop software 
                solutions tailored to your business needs.
              </p>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
                  <p className="text-coral-500 font-medium">Mobile Apps</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Built with Flutter, React Native, and native technologies
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">120+</h3>
                  <p className="text-coral-500 font-medium">Web Projects</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Developed using modern frameworks like React and Angular
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
                  <p className="text-coral-500 font-medium">Client Retention</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Our commitment to quality keeps clients coming back
                  </p>
                </div>
              </div>

              <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors font-medium">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-pink-500">Our</span> <span className="text-blue-500">Technology</span>
            <br />
            <span className="text-blue-500">Solutions</span> & <span className="text-purple-600">Success</span>
            <br />
            <span className="text-coral-500">Stories</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16">
            <div className="lg:col-span-3">
              <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Showcase Video</h3>
                  <p className="text-gray-600">Watch our transformation projects</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-coral-500 text-white p-4 rounded-lg">
                <h4 className="font-semibold">Project One</h4>
                <p className="text-sm opacity-90">SEO & Marketing</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Second Project</h4>
                <p className="text-sm text-gray-600">Analytics Dashboard</p>
              </div>
              <div className="bg-coral-500 text-white p-4 rounded-lg">
                <h4 className="font-semibold">Project Three</h4>
                <p className="text-sm opacity-90">Mobile Development</p>
              </div>
              <div className="bg-coral-500 text-white p-4 rounded-lg">
                <h4 className="font-semibold">Fourth Project</h4>
                <p className="text-sm opacity-90">Web Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-pink-500">Choose The Perfect</span>
            <br />
            <span className="text-blue-500">Solution</span> <span className="text-purple-600">For Your</span>
            <br />
            <span className="text-pink-500">Digital</span> <span className="text-coral-500">Transformation</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Basic Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Development</h3>
                <div className="text-gray-500 line-through">₹5,000</div>
              </div>
              
              <h4 className="text-3xl font-bold text-coral-500 text-center mb-2">Landing</h4>
              <h4 className="text-3xl font-bold text-coral-500 text-center mb-6">Page</h4>
              
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600">Responsive Website Design</li>
                <li className="text-gray-600">Up to 20 Custom Pages</li>
                <li className="text-gray-600">Basic SEO Optimization</li>
                <li className="text-gray-600">Contact Form Integration</li>
                <li className="text-gray-600">1 Month Support</li>
              </ul>
              
              <button className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors font-medium">
                Start Project
              </button>
            </div>

            {/* Mobile App Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-coral-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM9 9a1 1 0 000 2v2a1 1 0 001 1h1a1 1 0 100-2v-2a1 1 0 00-1-1H9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile App Package</h3>
                <div className="text-gray-500 line-through">₹25,000</div>
              </div>
              
              <h4 className="text-3xl font-bold text-coral-500 text-center mb-2">Android/iOS</h4>
              <h4 className="text-3xl font-bold text-coral-500 text-center mb-6">App</h4>
              
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600">Cross-Platform Development</li>
                <li className="text-gray-600">UI/UX Design</li>
                <li className="text-gray-600">Backend API Integration</li>
                <li className="text-gray-600">Basic Features Set</li>
                <li className="text-gray-600">3 Months Support</li>
              </ul>
              
              <button className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors font-medium">
                Build Your App
              </button>
            </div>

            {/* Enterprise Solution */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L16 14.586V8a2 2 0 00-2-2h-2V5a3 3 0 00-3-3H9a3 3 0 00-3 3v1H4a2 2 0 00-2 2v8a2 2 0 002 2h8.586l-1.293-1.293a1 1 0 111.414-1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L16 16.586H4V8h2zm2-1V5a1 1 0 011-1h2a1 1 0 011 1v1H8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Solution</h3>
                <div className="text-gray-500 line-through">₹50,000</div>
              </div>
              
              <h4 className="text-3xl font-bold text-coral-500 text-center mb-2">Custom</h4>
              <h4 className="text-3xl font-bold text-coral-500 text-center mb-6">CRM/ERP</h4>
              
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600">Custom Business Software</li>
                <li className="text-gray-600">Multi-user Dashboard</li>
                <li className="text-gray-600">Database Integration</li>
                <li className="text-gray-600">Advanced Security</li>
                <li className="text-gray-600">6 Months Support</li>
              </ul>
              
              <button className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors font-medium">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-pink-500">Get In Touch With</span> <span className="text-purple-600">Our</span> <span className="text-blue-500">Tech</span>
              <br />
              <span className="text-blue-500">Experts</span> <span className="text-purple-600">For Your</span> <span className="text-coral-500">Next Project</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-600">Karnal, Haryana, India</p>
                <p className="text-gray-500 text-sm mt-2">Interactive Map Location</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-coral-500 text-white py-3 rounded-full hover:bg-coral-600 transition-colors font-medium"
                >
                  Send Project Requirements
                </button>
              </form>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center text-coral-500">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-medium">+91-7027944324</p>
                    <p className="text-sm text-gray-600">+91-8571994258 (Sales)</p>
                  </div>
                </div>
                <div className="flex items-center text-coral-500">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-medium">support@techmintlab.com</p>
                    <p className="text-sm text-gray-600">sales@techmintlab.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 space-y-4 z-50">
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </button>
        <button className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Homepage;