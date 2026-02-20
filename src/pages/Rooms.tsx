import { Link } from "react-router-dom";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { getRooms } from "../api/api";
import { stripHtml } from '@/lib/utils'
import { useState, useEffect } from "react";
import { motion } from "motion/react";

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
    <div className="bg-teal-50 min-h-screen">
      {/* Hero */}
      <div className="bg-teal-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            ห้องพักพยาบาล
          </motion.h1>
          <p className="mt-4 text-teal-100 max-w-2xl mx-auto">
            ห้องพักพยาบาลสำหรับการเข้ารับการ admit ที่สะดวกสบายและทันสมัย
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 -mt-20 pb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {loading ? (
            <div className="p-10 text-center text-gray-500">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room) => (
                <motion.div
                  key={room.room_id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <Link to={`/rooms/${room.room_id}`}>
                    <DirectionAwareHover
                      imageUrl={`https://ruamchai.com/admin/upload_image/website/room/${room.room_photo}`}
                    >
                      <div>
                        <h3 className="text-xs tracking-widest text-gray-200 mb-1">
                          {room.room_name}
                        </h3>
                        <h2 className="text-white text-lg font-semibold">
                          {stripHtml(room.room_details)}
                        </h2>
                        <p className="mt-1 text-gray-200">{room.price} บาท/คืน</p>
                      </div>
                    </DirectionAwareHover>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;