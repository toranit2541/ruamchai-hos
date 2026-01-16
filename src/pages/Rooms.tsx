import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { getRooms } from "../api/api";
import { stripHtml } from '@/lib/utils'

interface Room {
  room_id: number;
  room_name: string;
  room_details: string;
  room_keyword: string;
  room_photo: string;
  capacity: number;
  price: number;
  status: string;
  room_CreateBy: number;
  room_createDate: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const roomsData = await getRooms();
        setRooms(roomsData);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-600">
            Service Rooms
          </h1>
          <p className="text-center text-gray-500 mb-12">
            ห้องพักพยาบาลสำหรับการเข้ารับการ admit ที่สะดวกสบายและทันสมัย
          </p>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6 py-12">
              {rooms.map((room) => (
                <motion.div
                  key={room.room_id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <DirectionAwareHover imageUrl={`http://localhost:8080/admin/upload_image/website/room/${room.room_photo}`}>
                    <div>
                      <h3 className="text-xs tracking-widest text-gray-200 mb-1">
                        {room.room_name}
                      </h3>
                      <h2 className="text-white text-lg font-semibold">
                        {stripHtml(room.room_details)}
                      </h2>
                      <p className="mt-1 text-gray-200">{room.price}</p>
                    </div>
                  </DirectionAwareHover>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Rooms;