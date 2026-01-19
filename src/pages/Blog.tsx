import { motion } from "motion/react";
import React from "react";

const Blog: React.FC = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-br from-blue-50 to-white">
            <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-50 flex flex-col justify-center items-center"
      >
            <div className="pt-20 text-center px-5 pb-24 max-w-3xl mx-auto py-24">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    บทความสุขภาพและข่าวสาร
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    ยินดีต้อนรับสู่บล็อกสุขภาพของเรา! ที่นี่ เราแบ่งปันข่าวสารล่าสุด เคล็ดลับด้านสุขภาพ และข้อมูลทางการแพทย์เพื่อช่วยให้คุณได้รับข้อมูลที่ถูกต้องและมีสุขภาพที่ดี สำรวจบทความของเราและอยู่เสมอในกระแสของโลกการแพทย์
                </p>
            </div>
            </motion.div>
        </section>
    );
};

export default Blog;
