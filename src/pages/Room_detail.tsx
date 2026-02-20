import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRoomById } from "../api/api";

interface RoomDetailType {
  room_id: number;
  room_name: string;
  room_details: string;
  room_keyword: string;
  room_photo: string;
  capacity: number;
  price: string;
  status: string;
  room_createDate: string;
}

const RoomDetail: React.FC = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<RoomDetailType | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!id) return;

      try {
        const data = await getRoomById(id);
        setDetail(data);
      } catch (error) {
        console.error("Error fetching room detail:", error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!detail) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading room detail...
      </div>
    );
  }

  return (

    <div className="bg-teal-50 min-h-screen">
      {/* Hero */}
      <div className="bg-teal-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80 mb-2">รายละเอียดห้องพัก</p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            {detail.room_name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 -mt-20 pb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-teal-600">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/rooms" className="hover:text-teal-600">
              Rooms
            </Link>{" "}
            / <span className="text-teal-600"> {detail.room_name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-10">
            <img
              className="max-w-sm w-full rounded-xl h-auto"
              src={`https://ruamchai.com/admin/upload_image/website/room/${detail.room_photo}`}
              alt={detail.room_name}
            />

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium text-gray-700">
                {detail.room_name}
              </h1>

              <div className="mt-6">
                <p className="text-2xl font-medium text-teal-600">
                  ราคา: {detail.price} บาท
                </p>
              </div>

              <p className="text-base font-medium mt-6">รายละเอียดห้อง</p>

              <div
                className="mt-3 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: detail.room_details,
                }}
              />

              <div className="mt-4 text-sm text-gray-500">
                ความจุห้อง: {detail.capacity} คน
              </div>

              {detail.room_keyword && (
                <div className="mt-2 text-sm text-gray-400">
                  Keyword: {detail.room_keyword}
                </div>
              )}

              {detail.room_createDate && (
                <div className="mt-2 text-xs text-gray-400">
                  Created: {detail.room_createDate}
                </div>
              )}

              <div className="flex items-center mt-10 gap-4 text-base">
                <button className="w-full py-3.5 cursor-pointer font-medium bg-teal-600 text-white hover:bg-teal-700 transition">
                  ติดต่อสอบถามเพิ่มเติม
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
