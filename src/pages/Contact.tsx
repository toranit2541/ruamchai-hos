import { motion } from 'motion/react';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="text-gray-600 body-font relative bg-linear-to-br from-blue-50 to-white px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-50 flex flex-col justify-center items-center"
      >
      <h1 className="w-full text-4xl font-bold text-center mb-8 text-gray-600">Contact Us</h1>
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap py-8 gap-10">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5819993269944!2d100.851584!3d13.5836446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d44856cf1d7ab%3A0xa760c802d2a9a52f!2sRuamchai%20Pracharug%20Hospital!5e0!3m2!1sen!2sth!4v1731400000000!5m2!1sen!2sth" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ที่อยู่ที่ติดต่อ</h2>
              <p className="mt-1">เลขที่ 168/26 หมู่4 ถ.บางนา-ตราด กม.29 ต.บางบ่อ อ.บางบ่อ จ.สมุทรปราการ 10560 </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">อีเมล</h2>
              <a className="text-indigo-500 leading-relaxed">ruamchai@ruamchai.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">เบอร์โทรศัพท์</h2>
              <p className="leading-relaxed">0-2708-7501-10</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-linear-to-br from-blue-50 to-white                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 md:px-8">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <div className="mt-6 pt-6 border-t-2 border-gray-200 text-center ">
            <h2>
              or
            </h2>
          </div>
          <div className="mt-2 pt-2 text-center">
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Contact;