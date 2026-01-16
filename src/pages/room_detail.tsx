import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRoomById } from "../api/api";

interface RoomDetailType {
  id: number;
  room_name: string;
  room_title: string;
  room_details: string;
  room_price: number;
  room_Photo: string;
  room_keyword?: string;
  room_createDate?: string;
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
    <div className="container mx-auto px-6 py-12">
      <p className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-indigo-500">Home</Link> /
        <Link to="/room" className="hover:text-indigo-500"> Rooms</Link> /
        <span className="text-indigo-500"> {detail.room_title}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          className="max-w-sm w-full rounded-xl h-auto"
          src={`http://localhost:8080/admin/upload_image/website/room/${detail.room_Photo}`}
          alt=""
        />

        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium text-gray-700">
            {detail.room_title}
          </h1>

          <h2 className="text-lg text-gray-500 mt-2">
            {detail.room_name}
          </h2>

          <div className="mt-6">
            <p className="text-2xl font-medium text-indigo-600">
              ราคา: {detail.room_price} บาท
            </p>
          </div>

          <p className="text-base font-medium mt-6">
            รายละเอียดห้อง
          </p>

          <div
            className="mt-3 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: detail.room_details,
            }}
          />

          {detail.room_keyword && (
            <div className="mt-4 text-sm text-gray-400">
              Keyword: {detail.room_keyword}
            </div>
          )}

          {detail.room_createDate && (
            <div className="mt-2 text-xs text-gray-400">
              Created: {detail.room_createDate}
            </div>
          )}

          <div className="flex items-center mt-10 gap-4 text-base">
            <button className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition">
              ติดต่อสอบถามเพิ่มเติม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
