
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { Carousel } from "../components/ui/carousel";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { ImagesSlider } from "../components/ui/images-slider";
import { FaHandsHelping, FaHeart, FaUserMd, FaHospitalAlt } from 'react-icons/fa';
import { motion } from 'motion/react';
import { stripHtml } from '@/lib/utils'
import imageruamchai from "../assets/ruamchai.webp";
import { getDoctors, getPackages, getBannerImages, getRooms, getArticleDoctors } from '../api/api';




const Home: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);
  // const [news, setNews] = useState<any[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);
  const [articlesdoctors, setArticlesDoctors] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorsData = await getDoctors();
        setDoctors(doctorsData);

        const packagesData = await getPackages();
        setPackages(packagesData);

        const bannersData = await getBannerImages();
        setBanners(bannersData);

        // const newsData = await getNews();
        // setNews(newsData);

        const roomsData = await getRooms();
        setRooms(roomsData);

        const articlesDoctorsData = await getArticleDoctors();
        setArticlesDoctors(articlesDoctorsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const images = banners.map(banner => ({
    src: `http://localhost:8080/admin/upload_image/website/baner/${banner.baner_Photo}`,
  }));

  const articleCardItems = articlesdoctors.map((item) => ({
    id: item.id,
    image: `http://localhost:8080/admin/upload_image/website/blog/${item.article_Photo}`,
    category: item.article_keyword || "Article",
    title: item.article_title,
    description: stripHtml(item.article_details),
    views: "1.2K",       // optional (static or from API later)
    comments: "6",       // optional
  }));

  const doctorTestimonials = doctors.map((doctor) => ({
    quote: stripHtml(doctor.doctor_education) || "พร้อมให้บริการดูแลสุขภาพคุณอย่างเต็มที่",
    name: `${doctor.doctor_titlename}${doctor.doctor_Name} ${doctor.doctor_lastname}`,
    designation: `${doctor.doctor_major} (${doctor.doctor_profession})`,
    src: `http://localhost:8080/admin/upload_image/website/doctor/${doctor.doctor_Photo}`,
  }));

  const roomSlides = rooms.map((room) => ({
    title: `${room.room_name} (${room.room_keyword})`,
    button: `฿${Number(room.price).toLocaleString()} / คืน`,
    src: `http://localhost:8080/admin/upload_image/website/room/${room.room_photo}`,
  }));

  return (
    <div>
      <ImagesSlider className="h-screen w-full relative z-0" images={images}>
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

      {/* Services Section */}
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

      {/* Hero Section */}
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

      {/* Promotion Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container px-5 py-24 mx-auto"
        >
          <h1 className="text-3xl font-bold text-center my-12">โปรโมชั่นพิเศษ</h1>
          <h2 className="text-center text-gray-600 mb-12 px-4 max-w-2xl mx-auto">
            คัดสรรโปรโมชั่นและแพ็คเกจสุขภาพที่ดีที่สุด เพื่อคุณและคนที่คุณรัก
          </h2>
          <div className="flex flex-wrap -m-4 py-8">
            {packages.slice(0, 3).map((b) => (
              <div key={b.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={`http://localhost:8080/admin/upload_image/website/package/${b.package_Photo}`}
                    alt={b.package_title}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {b.package_name}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {b.package_title}
                    </h1>
                    <div className="leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: b.package_details }}></div>
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
            {doctorTestimonials.length > 0 ? (
              <AnimatedTestimonials testimonials={doctorTestimonials} />
            ) : (
              <p className="text-center text-gray-500">Loading doctors...</p>
            )}
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
            <Carousel slides={roomSlides} />
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
            บทความสุขภาพและข่าวสารล่าสุด
          </h1>
          <h2 className="text-center text-gray-600 mb-12 px-4 max-w-2xl mx-auto">
            ยินดีต้อนรับสู่บล็อกสุขภาพของเรา! ที่นี่ เราแบ่งปันข่าวสารล่าสุด เคล็ดลับด้านสุขภาพ
            และข้อมูลทางการแพทย์เพื่อช่วยให้คุณได้รับข้อมูลที่ถูกต้องและมีสุขภาพที่ดี
            สำรวจบทความของเราและอยู่เสมอในกระแสของโลกการแพทย์
          </h2>
          <InfiniteMovingCards
            items={articleCardItems}
            direction="right"
            speed="slow"
          />
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
