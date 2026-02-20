import React from 'react';
import { motion } from 'motion/react';

import hospital from '../assets/hospital.webp'
import boss from '../assets/dsfc.webp'

const About: React.FC = () => {
  return (
    <section className="text-teal-800 body-font bg-linear-to-br from-teal-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="container px-5 py-32 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-contain object-center max-w-full h-auto"
                src={hospital}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"> */}
                  <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center inline-flex bg-teal-100 text-gray-400">
                    <img
                      src={boss}
                      alt="avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                {/* </div> */}
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                  <div className="w-12 h-1 bg-teal-600 rounded mt-2 mb-4"></div>
                  <p className="text-base">Company President</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="text-lg leading-relaxed text-justify indent-8 mb-4">
                  โรงพยาบาลรวมชัยประชารักษ์(Ruamchai Pracharug Company Limited) ก่อตั้งด้วยเงินลงทุนกว่า 300 ล้านบาท ตัวอาคารสูง 8 ชั้น บนเนื้อที่ 18 ไร่ ริมถนนบางนา-ตราด กิโลเมตรที่ 29 (ขาเข้า) ตั้งอยู่ระหว่างทางเข้าวัดบางบ่อกับทางเข้าตลาดบางบ่อ ซึ่งมีอาณาบริเวณโดยรอบโรงพยาบาลกว้างขวางสามารถจัดพื้นที่จอดรถได้กว่า 200 คัน รวมถึงมีอาคารหอประชุมที่สามารถรองรับผู้เข้าร่วมสัมมนาได้มากกว่า 700 คน จดทะเบียนเป็นโรงพยาบาลเอกชนทั่วไป ขนาด 100 เตียง เปิดให้บริการอย่างเป็นทางการเมื่อ 1 พฤศจิกายน 2542
                </p>
                <p className="text-lg leading-relaxed text-justify indent-8 mb-4">
                  1 มกราคม 2543 เริ่มให้บริการแก่ผู้รับบริการประเถทประกันสังคม เนื่องจากในช่วงนั้นภาคอุตสหกรรมเริ่ม มีการขยายตัวหลังจากเริ่มพ้นยุควิกฤติฟองสบู่ อันทำให้มีสถานประกอบการก่อตั้งเพิ่มขึ้นในแนวถนนบางนา-ตราดและนิคมอุตสหกรรมใกล้เคียง เช่น นิคมอุตสาหกรรมเวลโกรว์ และนิคมอุตสาหกรรมบางพลี ทำให้มีผู้ประกันตนเพิ่มมากขึ้นและมีคสามต้องการในการรักษาพยาบาลมากขึ้น
                </p>
                <p className="text-lg leading-relaxed text-justify indent-8 mb-4">
                  1 ตุลาคม 2545 ได้เข้าร่วมกับสำนักงานประกันสุขภาพแห่งชาติในการให้บริการแก่ผู้รับบริการบัตรประกันสุขภาพ ถ้วนหน้าในเขตความรับผิดชอบ ซึ้งในช่วงนี้ทางโรงพยาบาลได้พัฒนาศักยภาพในด้านการรักษาพยาบาลผู้ป่วยโรคต้อกระจกด้วยวิธี Phacoemulsification จนเป็นที่ยอมรับและไว้วางใจของผู้รับบริการอย่างกว้างขวาง โดยมีผู้รับบริการจากทุกภูมิภาคเข้ามารับบริการ รวมถึงได้รับความเชื่อมั่นจากผู้ให้บริการด้านการแพทย์ เช่น โรงพยาบาลอื่นๆทั้งภาครัฐและเอกชนในการส่งผู้ป่วยเข้ามารับบริการ จนถึงปี 2552 โรงพยาบาลได้ขอออกจากการให้บริการบัตรประกันสุขภาพถ้วนหน้า แต่ในด้านการรักษาโรคต้อกระจกนั้นยังได้รับความไว้วางใจ จากประชาชนทั่วไปในการเข้ารับบริการต่อเนื่องตลอดมา
                </p>
                <p className="text-lg leading-relaxed text-justify indent-8 mb-4">
                  นอกจากนั้นแล้วในละแวกอำเภอบางบ่อเป็นเขตพื้นที่พานิชที่มีการขยายตัวของตลาดและตัวเมือง รวมถึงเป็นเขตพื้นที่ทำเกษตรกรรมที่สำคัญและมีชื่่อเสียง เช่น เลี้ยงปลาสลิด เลี้ยงกุ้ง จึงมีข้อจำกัดของเวลา และระยะการเดินทางในการเดินทางไปรับการรักษาพยาบาลในยามเจ็บป่วย ทำให้ประชาชนมองหาสถานที่รักษาพยาบาลในยามเจ็บป่วย ที่ใกล้บ้านและไว้ว่างใจได้ ทำให้โรงพยาบาลได้รับการสนับสนุนจากผู้รับบริการทำให้เติบโตและสามารถพัฒนาศักยภาพในการรักษาพยาบาลมาอย่างต่อเนื่องจนถึงปัจจุบัน ในการพัฒนามาตรฐาน รวมถึงการได้รับการประเมินจากบริษัทประกันชีวิตชั้นนำทุกปีว่ามีคุณภาพในการให้บริการได้ตามมาตรฐานและเป็นที่พึงพอใจของผู้รับบริการ
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;