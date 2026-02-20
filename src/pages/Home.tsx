import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaHandsHelping,
  FaHeart,
  FaUserMd,
  FaHospitalAlt,
} from "react-icons/fa";

import { Carousel } from "../components/ui/carousel";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { ImagesSlider } from "../components/ui/images-slider";

import imageruamchai from "../assets/ruamchai.webp";
import { stripHtml } from "@/lib/utils";
import {
  getDoctors,
  getPackages,
  getBannerImages,
  getRooms,
  getArticleDoctors,
} from "../api/api";




const Home: React.FC = () => {

  const [doctors, setDoctors] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);
  const [articlesdoctors, setArticlesDoctors] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setDoctors(await getDoctors());
      setPackages(await getPackages());
      setBanners(await getBannerImages());
      setRooms(await getRooms());
      setArticlesDoctors(await getArticleDoctors());
    };
    fetchData();
  }, []);

  const images = banners.map((b) => ({
    src: `https://ruamchai.com/admin/upload_image/website/baner/${b.baner_Photo}`,
  }));

  const doctorTestimonials = doctors.map((d) => ({
    quote:
      stripHtml(d.doctor_education) ||
      "พร้อมให้บริการดูแลสุขภาพคุณอย่างเต็มที่",
    name: `${d.doctor_titlename}${d.doctor_Name} ${d.doctor_lastname}`,
    designation: `${d.doctor_major} (${d.doctor_profession})`,
    src: `https://ruamchai.com/admin/upload_image/website/doctor/${d.doctor_Photo}`,
  }));

  const roomSlides = rooms.map((r) => ({
    id: r.room_id,
    title: `${r.room_name} (${r.room_keyword})`,
    button: `฿${Number(r.price).toLocaleString()} / คืน`,
    src: `https://ruamchai.com/admin/upload_image/website/room/${r.room_photo}`,
  }));

  const articleCardItems = articlesdoctors.map((a) => ({
    id: a.id,
    image: `https://ruamchai.com/admin/upload_image/website/blog/${a.article_Photo}`,
    category: a.article_keyword || "Article",
    title: a.article_title,
    description: stripHtml(a.article_details),
    views: "1.2K",
    comments: "6",
  }));

  return (
    <div>
      <ImagesSlider className="h-screen w-full relative z-0" images={images}>
        <div className="absolute inset-0 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6"
        >
        </motion.div>
      </ImagesSlider>


      {/* Services Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-teal-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container mx-auto py-16"
        >
          <h2 className="md:text-6xl text-4xl font-bold text-center mb-8 text-teal-500">บริการของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "แพ็กเกจสุขภาพ",
                desc: "โปรแกรมตรวจสุขภาพและโปรโมชั่นพิเศษ",
                link: "/package",
              },
              {
                title: "ห้องพักผู้ป่วย",
                desc: "ห้องพักมาตรฐานโรงพยาบาลเอกชน",
                link: "/rooms",
              },
              {
                title: "คลินิกเฉพาะทาง",
                desc: "ดูแลรักษาโดยทีมแพทย์เฉพาะด้าน",
                link: "/clinic",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-sm border border-teal-100 p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <Link to={item.link} className="text-teal-600 font-medium hover:underline">
                  ดูรายละเอียด →
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              โรงพยาบาลรวมชัยประชารักษ์
            </h1>
            <p className="text-teal-600 text-xl mt-3 font-semibold">
              Ruamchai Pracharug Hospital
            </p>

            <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
              โรงพยาบาลเอกชนขนาด 100 เตียง ให้บริการทางการแพทย์อย่างครบวงจร
              ด้วยมาตรฐานระดับประเทศ และการดูแลดุจญาติมิตร
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <FaHandsHelping />, text: "ดูแลใกล้ชิด" },
                { icon: <FaHeart />, text: "ดุจญาติมิตร" },
                { icon: <FaUserMd />, text: "แพทย์เฉพาะทาง" },
                { icon: <FaHospitalAlt />, text: "มาตรฐานโรงพยาบาลเอกชน" },
              ].map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                >
                  <span className="text-teal-600 text-xl">{v.icon}</span>
                  <span className="font-medium text-gray-700">{v.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={imageruamchai}
            alt="Hospital"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Promotion Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-teal-50 to-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container px-5 py-24 mx-auto"
        >
          <h1 className="md:text-6xl text-4xl font-bold text-center mb-8 text-teal-500">โปรโมชั่นพิเศษ</h1>
          <h2 className="text-center text-gray-600 mb-12 px-4 max-w-2xl mx-auto">
            คัดสรรโปรโมชั่นและแพ็คเกจสุขภาพที่ดีที่สุด เพื่อคุณและคนที่คุณรัก
          </h2>
          <div className="flex flex-wrap -m-4 py-8">
            {packages.slice(0, 3).map((b) => (
              <div key={b.id} className="p-4 md:w-1/3">
                <div className="h-full border border-teal-100 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={`https://ruamchai.com/admin/upload_image/website/package/${b.package_Photo}`}
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
                      <Link to={`/package/${b.id}`} className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">
                        <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">
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
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Doctor Section */}
      <section className="text-gray-600 body-font bg-linear-to-br from-teal-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="bg-gray-100 py-16 bg-linear-to-br from-teal-50 to-white"
        >
          <h1 className="md:text-6xl text-4xl font-bold text-center mb-8 text-teal-500">
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
      <section className="text-gray-600 body-font bg-linear-to-br from-teal-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden w-full h-full py-20 bg-linear-to-br from-teal-50 to-white"
        >
          <h1 className="md:text-6xl text-4xl font-bold text-center mb-8 text-teal-500">
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

      <section className="text-gray-600 body-font bg-linear-to-br from-teal-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-160 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden bg-linear-to-br from-teal-50 to-white"
        >
          <h1 className="md:text-6xl text-4xl font-bold text-center mb-8 text-teal-500">
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


      <section className="text-gray-600 body-font relative bg-linear-to-br from-teal-50 to-white">

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
            <h2 className="text-teal-600 text-lg mb-1 font-medium title-font">
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

            <button className="text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none 
                         hover:bg-teal-700 rounded text-lg">
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
