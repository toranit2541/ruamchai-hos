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
    <section className="text-gray-600 body-font bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-5 py-42 mx-auto">
        <h1 className="text-3xl font-medium text-slate-800 text-center">
          ทีมแพทย์ผู้เชี่ยวชาญ
        </h1>
        <p className="text-slate-500 text-center">Medical Specialist</p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {doctors.length === 0 && (
            <p className="text-gray-500">ไม่พบข้อมูลแพทย์</p>
          )}

          {doctors.map((doctor) => (
            <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
              <div
                className="max-w-80 bg-black text-white rounded-2xl shadow-lg"
              >
                <div className="relative -mt-px overflow-hidden rounded-2xl">
                  <img
                    src={`http://localhost:8080/admin/upload_image/website/doctor/${doctor.doctor_Photo}`}
                    alt={`${doctor.doctor_Name} ${doctor.doctor_lastname}`}
                    onError={(e) => {
                      e.currentTarget.src = "/images/doctor-placeholder.png";
                    }}
                    className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                  />
                  <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                </div>

                <div className="px-4 pb-6 text-center">
                  <p className="mt-4 text-lg font-medium">
                    {doctor.doctor_titlename} {doctor.doctor_Name}{" "}
                    {doctor.doctor_lastname}
                  </p>

                  <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
