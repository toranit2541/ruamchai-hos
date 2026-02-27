import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDoctors } from "../api/api";

interface Doctor {
  id: number;
  doctor_Photo: string;
  doctor_titlename: string;
  doctor_Name: string;
  doctor_lastname: string;
  specialty: string;
}
const Doctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError("ไม่สามารถโหลดข้อมูลแพทย์ได้");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500 animate-pulse">
        กำลังโหลดข้อมูลแพทย์...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (

    <div className="bg-teal-50 min-h-screen">
      {/* Hero */}
      <div className="bg-teal-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            ทีมแพทย์ผู้เชี่ยวชาญ
          </h1>
          <p className="mt-4 text-teal-100 max-w-2xl mx-auto">
            พบกับทีมแพทย์ผู้เชี่ยวชาญของเราที่พร้อมให้การดูแลสุขภาพคุณด้วยความเอาใจใส่และความชำนาญ
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 -mt-20 pb-24">
        <div className="max-w-8xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
                <div className="max-w-120 h-150 bg-teal-100 text-teal-900 rounded-2xl shadow-lg">
                  <div className="relative -mt-px overflow-hidden rounded-2xl">
                    <img
                      src={`https://ruamchai.com/admin/upload_image/website/doctor/${doctor.doctor_Photo}`}
                      alt={`${doctor.doctor_Name} ${doctor.doctor_lastname}`}
                      onError={(e) => {
                        e.currentTarget.src = "/images/doctor-placeholder.png";
                      }}
                      className="h-130 w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                    />
                    <div className="absolute bottom-0 z-10 h-60 w-full bg-linear-to-t pointer-events-none from-teal-100 to-transparent"></div>
                  </div>

                  <div className="px-4 pb-6 text-center">
                    <p className="mt-4 text-lg font-medium">
                      {doctor.doctor_titlename} {doctor.doctor_Name}{" "}
                      {doctor.doctor_lastname}
                    </p>

                    <p className="text-sm font-medium bg-linear-to-r from-teal-500 via-teal-600 to-teal-700 text-transparent bg-clip-text">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
