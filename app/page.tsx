
'use client';

import { useState } from 'react';

const furnitureImages = [
  '/images/img16.svg',
  '/images/img15.svg',
  '/images/img8.png',
  '/images/img11.png',
  '/images/img4.png',
  '/images/img5.png',
  '/images/img6.png',
  '/images/img7.png',
  '/images/img8.png',
];

const blogImages = [
  '/images/img8.png',
  '/images/img9.png',
  '/images/img4.png',
];

const categories = ['All Furniture', 'Bedroom', 'Living Room', 'Home Office', 'Dining Table', 'More'];

const products = [
  { name: 'Modern Sofa', price: 250, rating: '★★★★☆', badge: 'New', badgeColor: 'bg-purple-600', image: '/images/img1.png' },
  { name: 'Luxury Chair', price: 260, rating: '★★★★★', badge: 'New', badgeColor: 'bg-purple-600', image: '/images/img2.png' },
  { name: 'Wooden Table', price: 270, rating: '★★★★☆', badge: 'New', badgeColor: 'bg-purple-600', image: '/images/img3.png' },
  { name: 'Bookshelf', price: 280, rating: '★★★★☆', badge: null, badgeColor: null, image: '/images/img5.png' },
  { name: 'Bed Frame', price: 290, rating: '★★★★★', badge: 'New', badgeColor: 'bg-purple-600', image: '/images/img6.png' },
  { name: 'Night Stand', price: 300, rating: '★★★★☆', badge: null, badgeColor: null, image: '/images/img12.png' },
  { name: 'Dining Set', price: 310, rating: '★★★★★', badge: 'New', badgeColor: 'bg-purple-600', image: '/images/img13.png' },
  { name: 'Office Desk', price: 320, rating: '★★★★☆', badge: null, badgeColor: null, image: '/images/img14.png' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All Furniture');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <main className="relative min-h-screen text-gray-900 bg-gradient-to-r from-[#eef1f6] via-[#f3f4f8] to-[#e9c6f3]">

      {/* Navbar */}
      <header className="relative flex justify-between items-center px-6 md:px-16 lg:px-24 py-4 md:py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* Logo - Desktop Only */}
          <div className="hidden lg:flex items-center">
            <img src="/images/logo.png" alt="FurniShop" className="h-10 w-auto" />
          </div>
          {/* Mobile Menu Button - Mobile Only */}
          <button
            className="lg:hidden w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex gap-8 text-gray-600 font-medium">
          <div className="relative group">
            <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1 py-2">
              Shop Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">All Products</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">New Arrivals</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Best Sellers</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1 py-2">
              Home Furniture
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Beds</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Mattresses</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Wardrobes</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1 py-2">
              Living Room
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Sofas</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Coffee Tables</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">TV Units</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1 py-2">
              Bedroom
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Beds</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Wardrobes</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Night Stands</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1 py-2">
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Email</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Phone</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Support</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1 py-2">
              Settings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">My Account</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Language</a>
              <a href="#" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">Currency</a>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search Button */}
          <button className="w-10 h-10 md:w-11 md:h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {/* Cart Button */}
          <button className="relative w-10 h-10 md:w-11 md:h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900 shadow-lg hover:bg-gray-200 transition-all hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          {/* Login Button */}
          <button className="hidden md:block bg-pink-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-pink-700 transition-all hover:scale-105">
            Login
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full max-w-sm bg-white shadow-lg border-t border-gray-100 lg:hidden z-40 rounded-br-2xl rounded-bl-2xl overflow-hidden">
            <nav className="flex flex-col p-4 gap-2 max-h-[80vh] overflow-y-auto">
              {/* Shop Now Dropdown */}
              <div>
                <button onClick={() => toggleDropdown('shop')} className="w-full text-left text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between">
                  Shop Now
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'shop' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'shop' && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">All Products</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">New Arrivals</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Best Sellers</a>
                  </div>
                )}
              </div>
              {/* Home Furniture Dropdown */}
              <div>
                <button onClick={() => toggleDropdown('home')} className="w-full text-left text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between">
                  Home Furniture
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'home' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'home' && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Beds</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Mattresses</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Wardrobes</a>
                  </div>
                )}
              </div>
              {/* Living Room Dropdown */}
              <div>
                <button onClick={() => toggleDropdown('living')} className="w-full text-left text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between">
                  Living Room
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'living' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'living' && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Sofas</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Coffee Tables</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">TV Units</a>
                  </div>
                )}
              </div>
              {/* Bedroom Dropdown */}
              <div>
                <button onClick={() => toggleDropdown('bedroom')} className="w-full text-left text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between">
                  Bedroom
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'bedroom' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'bedroom' && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Beds</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Wardrobes</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Night Stands</a>
                  </div>
                )}
              </div>
              {/* Contact Us Dropdown */}
              <div>
                <button onClick={() => toggleDropdown('contact')} className="w-full text-left text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between">
                  Contact Us
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'contact' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'contact' && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Email</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Phone</a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg">Support</a>
                  </div>
                )}
              </div>
              {/* Settings Dropdown */}
              <div>
                <button onClick={() => toggleDropdown('settings')} className="w-full text-left text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between">
                  Settings
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'settings' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'settings' && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      My Account
                    </a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.148" />
                      </svg>
                      Language
                    </a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Currency
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative px-6 md:px-16 lg:px-24 py-12 md:py-20 lg:py-28 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover the Latest <br />
            <span className="relative inline-block">
              Furniture Trends
              <svg className="absolute left-0 -bottom-2 w-2/3 h-3" viewBox="0 0 160 12" fill="none">
                <path d="M5 7c40-10 110-10 150 0" stroke="#ec4899" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Shop the latest furniture items and stay ahead of the style game with our curated collection of premium pieces.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
            Explore Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 z-10">
          <div className="relative group aspect-square">
            <img src={furnitureImages[0]} alt="Sofa" className="rounded-2xl w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="relative group aspect-square mt-6 md:mt-8">
            <img src={furnitureImages[1]} alt="Chair" className="rounded-2xl w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="col-span-2 relative group">
            <img src={furnitureImages[2]} alt="Living Room" className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" />
            <span className="absolute top-3 left-3 bg-pink-100 text-pink-600 text-xs px-3 py-1.5 rounded-full font-semibold">New</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-16 lg:px-24 py-6">
         <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Stylish Collection of Furniture</h2>
          <p className="text-gray-500 max-w-2xl">
            Stay updated with our information and engaging blog posts about modern furniture and fashion in the industry
          </p>
            <span className="relative inline-block">
              Stylish Collection of Furniture
              <svg className="absolute left-0 bottom-0 w-32 h-6 -mb-2" viewBox="0 0 128 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 19c30-10 80-10 120 0" stroke="#E04BFF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full border font-medium text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-black text-white border-transparent shadow-lg'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-black hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="px-6 md:px-16 lg:px-24 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-900 text-sm mb-2">{product.rating}</p>
              <div className="flex items-center justify-between">
                <p className="font-bold text-xl text-gray-900">${product.price}.00</p>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
                  Add to
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </section>

      {/* Blog/News Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Discover the Latest Trends</h2>
            <p className="text-gray-500 max-w-xl">
              Read our blog posts about interior design, furniture care, and home decoration tips
            </p>
          </div>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 w-fit">
            Explore
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogImages.map((img, idx) => (
            <article key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img src={img} alt="Blog" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">Furniture</span>
                <h3 className="font-bold text-lg mt-3 mb-2">Modern Furniture Trends for {2026 + idx}</h3>
                <p className="text-gray-500 text-sm mb-4">Explore the latest in furniture design and style for your home and office space.</p>
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/150?img=${idx + 10}`} alt="Author" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">John Doe</p>
                    <p className="text-xs text-gray-400">Interior Designer</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="rounded-3xl p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* Heading */}
            <div>
              <img src="/images/enjoy.png" alt="Enjoy" className="w-24 h-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Enjoy Our Latest Fashion Trends<br/>
                and Style
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-gray-600 text-lg">
              Shop our curated collection of furniture items and stay ahead of the design game with premium quality pieces.
            </p>

            {/* Stats */}
            {/* Quality & Style */}
          <div className="grid grid-cols-2 gap-12 pt-6">
            
            <div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Our fashion items are crafted with the
                highest materials and attention to details
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Style</h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Express your unique style with our wide
                range of trendy items.
              </p>
            </div>

          </div>

            {/* Button */}
          <button className="bg-black text-white px-8 py-3 mt-6 rounded-md hover:bg-gray-800 transition">
            Explore →
          </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">
            <img src="/images/img10.png" alt="Featured Furniture" className="rounded-2xl w-full h-auto object-contain shadow-2xl" />
          </div>

        </div>
      </section>

      {/* Testimonial & Stats Section */}
      <section className="py-20">
        <div className="bg-white shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-10 flex items-start pt-6 order-1 lg:order-2">
                <div className="flex flex-col items-start text-left w-full">

                  <p className="text-gray-400 text-sm font-medium mb-1">Customer Service</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-pink-600 mb-2 leading-tight">
                    Success Story of<br />Our Customer
                  </h3>
                  <p className="text-pink-600 mb-8 max-w-md font-medium">
                  Emphasise time-saving and use numbers to maximise credibility.
                </p>
                <div className="grid grid-cols-2 gap-6 w-full pt-4">
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900">10x</div>
                    <div className="text-sm text-gray-500 mt-1">Products Sold</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900">5k+</div>
                    <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900">300%</div>
                    <div className="text-sm text-gray-500 mt-1">Sales Growth</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-500 mt-1">Major Clients</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-50 p-8 order-2 lg:order-1">
              <img src={furnitureImages[3]} alt="Interior" className="h-80 md:h-96 w-auto object-contain rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="px-6 md:px-16 lg:px-24 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo.png" alt="FurniShop" className="h-8 w-auto" />
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Shop the latest furniture trends and enjoy premium quality and style for your home.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2.5 rounded-xl border border-gray-300 text-sm w-full focus:outline-none focus:border-gray-400"
                />
                <button className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all">
                  Subscribe
                </button>
              </form>
              <br/>
              <p className="text-gray-500 text-sm mb-4">BY subscribing you agree to with our privacy and provide consent to recieve updates from our company</p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900">About Us</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900">Customer Support</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">My Orders</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900">Follow Us</h5>
              <div className="flex gap-3 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 text-center text-gray-400 text-sm">
          © 2026 FurniShop. All Rights Reserved.
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
