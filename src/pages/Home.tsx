import React from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Carousel } from "../components/ui/carousel";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { ImagesSlider } from "../components/ui/images-slider";
import { FaHandsHelping, FaHeart, FaUserMd, FaHospitalAlt } from 'react-icons/fa';
import { motion } from 'motion/react';

import imageruamchai from "../assets/ruamchai.webp";
import mo1 from "../assets/mo1.png";
import mo2 from "../assets/mo2.png";
import mo3 from "../assets/mo3.png";
import mo4 from "../assets/mo4.png";

import rch1 from "../assets/rch1.png";
import rch2 from "../assets/rch2.png";
import rch3 from "../assets/rch3.png";
import rch4 from "../assets/rch4.png";
import rch5 from "../assets/rch5.png";



const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const images = [
  rch1,
  rch2,
  rch3,
  rch4,
  rch5
];

const testimonials2 = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: mo1,
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: mo2,
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: mo3,
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: mo4,
  }
];

const testimonials = [
  {
    image: "https://dummyimage.com/720x400",
    category: "CATEGORY",
    title: "The Catalyzer",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    views: "1.2K",
    comments: "6",
  },
  {
    image: "https://dummyimage.com/721x401",
    category: "CATEGORY",
    title: "The 400 Blows",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    views: "980",
    comments: "4",
  },
  {
    image: "https://dummyimage.com/722x402",
    category: "CATEGORY",
    title: "Shooting Stars",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    views: "1.5K",
    comments: "8",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <ImagesSlider className="h-220 w-full relative z-0" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 py-4">
            โรงพยาบาลรวมชัยประชารักษ์ <br /> บริการทุกระดับ ประทับใจ
          </motion.p> */}
          <Link to="/login">
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-96">
              <span>Join Now →</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </Link>
        </motion.div>
      </ImagesSlider>
      <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container mx-auto py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">บริการของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">แพ็คเกจ และ โปรโมชั่น</h3>
              <p className="text-gray-700 mb-4">
                เรามีบริการทางด้านสุขภาพ และ สิทธิพิเศษสำหรับคุณ จากทางโรงพยาบาลมากมาย
              </p>
              <Link to="/package" className="text-blue-500 hover:text-blue-700 font-semibold">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">ห้องพักพยาบาล</h3>
              <p className="text-gray-700 mb-4">
                หากคุณได้รับการรักษาและมีความประสงค์ที่จะพักฟืนที่โรงพยาบาล ทางเราก็มีห้องสุดพิเศษสำหรับคุณพร้อมบริการ
              </p>
              <Link to="/rooms" className="text-blue-500 hover:text-blue-700 font-semibold">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">คลีนิกเฉพาะด้าน</h3>
              <p className="text-gray-700 mb-4">
                คลีนิกเฉพาะด้าน สำหรับผู้ที่ต้องการดูแลสุขภาพเฉพาะด้าน
              </p>
              <Link to="/clinic" className="text-blue-500 hover:text-blue-700 font-semibold">
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="text-gray-700 body-font bg-linear-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col justify-center md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-5xl text-3xl mb-6 font-extrabold text-gray-900 leading-tight">
              โรงพยาบาลรวมชัยประชารักษ์
              <br className="hidden lg:inline-block" />
              <span className="text-blue-600 text-2xl md:text-3xl font-semibold">
                Ruamchai Pracharug Hospital
              </span>
            </h1>

            <p className="mb-8 leading-relaxed text-gray-600 max-w-xl">
              โรงพยาบาลรวมชัยประชารักษ์ (Ruamchai Pracharug Company Limited)
              เป็นโรงพยาบาลเอกชนขนาด 100 เตียง ตั้งอยู่ในจังหวัดสมุทรปราการ
              เปิดให้บริการทางการแพทย์ตั้งแต่ปี พ.ศ. 2542
            </p>

            {/* VALUE LIST */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 w-full md:w-auto">
              <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm hover:bg-blue-100 transition">
                <FaHandsHelping className="text-blue-600 text-xl" />
                <p className="font-medium">ดูแลใกล้ชิด</p>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm hover:bg-blue-100 transition">
                <FaHeart className="text-pink-500 text-xl" />
                <p className="font-medium">ดุจญาติมิตรในครัวเรือน</p>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm hover:bg-blue-100 transition">
                <FaUserMd className="text-green-600 text-xl" />
                <p className="font-medium">รักษาดีมีคุณธรรม</p>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm hover:bg-blue-100 transition">
                <FaHospitalAlt className="text-indigo-500 text-xl" />
                <p className="font-medium">เลิศล้ำด้วยคุณภาพและบริการ</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <div className="relative">
              <img
                className="object-cover object-center rounded-3xl shadow-lg"
                alt="Ruamchai Hospital"
                src={imageruamchai}
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/10 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container px-5 py-24 mx-auto"
        >
          <h1 className="text-3xl font-bold text-center my-12">New Promotions</h1>
          <h2 className="text-center text-gray-600 mb-12 px-4 max-w-2xl mx-auto">
            Stay updated with the latest health news, tips, and articles from our
            experts.
          </h2>
          <div className="flex flex-wrap -m-4 py-8">
            {[
              { img: "https://dummyimage.com/720x400", title: "The Catalyzer" },
              { img: "https://dummyimage.com/721x401", title: "The 400 Blows" },
              { img: "https://dummyimage.com/722x402", title: "Shooting Stars" },
            ].map((b, i) => (
              <div key={i} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={b.img}
                    alt={b.title}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {b.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Doctor Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="bg-gray-100 py-16 bg-linear-to-br from-blue-50 to-white"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            Medical Specialists
          </h1>
          <h2 className="text-center text-gray-600 mb-12 px-4 max-w-2xl mx-auto">
            ทีมแพทย์ผู้เชี่ยวชาญของเรา พร้อมให้บริการดูแลสุขภาพคุณอย่างเต็มที่
          </h2>
          <div className="container mx-auto">
            <AnimatedTestimonials testimonials={testimonials2} />
          </div>
        </motion.div>
      </section>

      {/* Service Rooms Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden w-full h-full py-20 bg-linear-to-br from-blue-50 to-white"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            บริการห้องพักพยาบาล
          </h1>
          <h2 className="text-center text-gray-600 mb-12 px-4 max-w-2xl mx-auto">
            เรามีห้องพักพยาบาลหลากหลายประเภท เพื่อตอบสนองความต้องการของผู้ป่วย
            ทั้งในด้านความสะดวกสบายและการดูแลสุขภาพ
          </h2>
          <div className="py-20">
            <Carousel slides={slideData} />
          </div>
        </motion.div>
      </section>

      {/* News and Article Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-160 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden bg-linear-to-br from-blue-50 to-white"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            News & Articles
          </h1>
          <h2 className="text-center text-gray-600 mb-12 px-4 max-w-2xl mx-auto">
            Stay updated with the latest health news, tips, and articles from our
            experts.
          </h2>
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </motion.div>
      </section>


      <section className="text-gray-600 body-font relative bg-linear-to-br from-blue-50 to-white">

        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Ruamchai Pracharug Hospital"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5819993269944!2d100.851584!3d13.5836446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d44856cf1d7ab%3A0xa760c802d2a9a52f!2sRuamchai%20Pracharug%20Hospital!5e0!3m2!1sen!2sth!4v1731400000000!5m2!1sen!2sth"
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container px-5 py-24 mx-auto flex"
        >
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              ส่งความคิดเห็นของคุณถึงเรา
            </h2>


            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                เบอร์โทรศัพท์
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                     focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 
                     py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                ข้อความ
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                     focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 
                     py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button className="text-white bg-indigo-100 border-0 py-2 px-6 focus:outline-none 
                         hover:bg-indigo-200 rounded text-lg">
              ส่งผลการประเมิน
            </button>

            <p className="text-xs text-gray-500 mt-3 py-4">
              ทุกความเห็นของทุกคนคือแรงพักดันให้เรา
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
