import React from 'react';
import { Link } from 'react-router-dom';
import { WobbleCard } from "../components/ui/wobble-card";
import { motion } from 'motion/react';

const Services: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-50 flex flex-col justify-center items-center"
      >
      <div className="container mx-auto py-24 px-5 flex flex-col gap-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-600">บริการของเรา</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
            <div className="relative z-10 pointer-events-auto">
              <Link to="/package">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    แพ็คเกจ และ โปรโมชั่น
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">
                    บริการด้านสุขภาพ และ สิทธิพิเศษสำหรับคุณ จากทางโรงพยาบาล
                  </p>
                </div>
                <img
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
              </Link>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <div className="relative z-10 pointer-events-auto">
              <Link to="/rooms">
                <div className="max-w-sm">

                  <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    ห้องพักพยาบาล
                  </h2>
                  <p className="mt-4 max-w-104 text-left  text-base/6 text-neutral-200">
                    ห้องพักพยาบาลสำหรับการเข้ารับการ admit
                  </p>
                </div>
                <img
                  src="/linear.webp"
                  width={250}
                  height={250}
                  alt="linear demo image"
                  className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
              </Link>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="relative z-10 pointer-events-auto">
              <Link to="/clinic">
                <div className="max-w-sm">

                  <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    คลีนิกเฉพาะด้าน
                  </h2>
                  <p className="mt-4 max-w-104 text-left  text-base/6 text-neutral-200">
                    บริการด้านสุขภาพภายใต้การดูแลจากแพทย์เฉพาะทาง
                  </p>
                </div>
                <img
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
              </Link>
            </div>
          </WobbleCard>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Services;