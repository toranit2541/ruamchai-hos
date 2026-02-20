import React from "react";
import { Link } from "react-router-dom";
import { WobbleCard } from "../components/ui/wobble-card";
import { motion } from "motion/react";
import hosbed from "../assets/hospital-bed.webp";
import clinic from "../assets/waiting-room.webp";
import packageImg from "../assets/reception.webp";

const Services: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-teal-50 via-white to-white py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-teal-800 mb-4">
              บริการของเรา
            </h1>
            <p className="mt-4 text-lg text-teal-600 max-w-3xl mx-auto">
              โรงพยาบาลของเราพร้อมให้บริการด้านสุขภาพอย่างครบวงจร ภายใต้การดูแลของทีมแพทย์เฉพาะทาง
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-teal-600 rounded-full" />
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Package & Promotion */}
            <WobbleCard
              containerClassName="
                lg:col-span-2 min-h-[320px]
                bg-gradient-to-br from-blue-700 to-blue-900
                rounded-2xl shadow-lg
              "
            >
              <Link to="/package" className="relative z-10 block h-full">
                <div className="max-w-lg">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white">
                    แพ็คเกจ & โปรโมชั่น
                  </h2>
                  <p className="mt-4 text-blue-100 leading-relaxed">
                    โปรแกรมตรวจสุขภาพ และสิทธิพิเศษ ที่ออกแบบมาเพื่อตอบโจทย์ทุกช่วงวัย
                  </p>
                </div>

                <img
                  src= {packageImg}
                  alt="package"
                  className="absolute right-0 bottom-0 w-72 opacity-20"
                />
              </Link>
            </WobbleCard>

            {/* Room */}
            <WobbleCard
              containerClassName="
                min-h-[320px]
                bg-gradient-to-br from-sky-600 to-sky-800
                rounded-2xl shadow-lg
              "
            >
              <Link to="/rooms" className="relative z-10 block h-full">
                <div className="max-w-sm">
                  <h2 className="text-2xl font-semibold text-white">
                    ห้องพักผู้ป่วย
                  </h2>
                  <p className="mt-4 text-sky-100 leading-relaxed">
                    ห้องพักมาตรฐานโรงพยาบาลเอกชน
                    สะดวกสบาย ปลอดภัย และเป็นส่วนตัว
                  </p>
                </div>

                <img
                  src={hosbed}
                  alt="room"
                  className="absolute right-0 bottom-0 w-48 opacity-20"
                />
              </Link>
            </WobbleCard>

            {/* Clinic */}
            <WobbleCard
              containerClassName="
                lg:col-span-3 min-h-[360px]
                bg-gradient-to-br from-teal-700 to-emerald-800
                rounded-2xl shadow-lg
              "
            >
              <Link to="/clinic" className="relative z-10 block h-full">
                <div className="max-w-lg">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white">
                    คลินิกเฉพาะทาง
                  </h2>
                  <p className="mt-4 text-emerald-100 leading-relaxed">
                    ครอบคลุมทุกสาขาการรักษา
                    ด้วยแพทย์เฉพาะทางและเทคโนโลยีทางการแพทย์ที่ทันสมัย
                  </p>
                </div>

                <img
                  src={clinic}
                  alt="clinic"
                  className="absolute right-0 bottom-0 w-80 opacity-15"
                />
              </Link>
            </WobbleCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
