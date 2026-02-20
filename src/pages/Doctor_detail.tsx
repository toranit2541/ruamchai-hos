import { getDoctorSchedulesByDoctorId, getDoctorById } from "@/api/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface DoctorDetail {
    id: number;
    doctor_titlename: string;
    doctor_Name: string;
    doctor_lastname: string;
    doctor_major: string;
    doctor_profession: string;
    doctor_education: string;
    doctor_Photo: string;
}

const days = [
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
    "อาทิตย์",
];

function getThaiDay(dateString: string): string {
    const date = new Date(dateString);
    const map: Record<number, string> = {
        0: "อาทิตย์",
        1: "จันทร์",
        2: "อังคาร",
        3: "พุธ",
        4: "พฤหัสบดี",
        5: "ศุกร์",
        6: "เสาร์",
    };
    return map[date.getDay()];
}

const DoctorDetail: React.FC = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState<DoctorDetail | null>(null);
    const [schedule, setSchedule] = useState<Record<string, string>>({});

    useEffect(() => {
        if (!id) return;
        getDoctorById(id).then(setDetail);
    }, [id]);

    useEffect(() => {
        if (!id) return;

        getDoctorSchedulesByDoctorId(id).then((data: any[]) => {
            const map: Record<string, string> = {};
            days.forEach((d) => (map[d] = ""));

            data.forEach((item) => {
                const day = getThaiDay(item.start_date);
                const time = `${item.start_time.slice(0, 5)} - ${item.end_time.slice(0, 5)}`;
                map[day] = map[day] ? `${map[day]}, ${time}` : time;
            });

            setSchedule(map);
        });
    }, [id]);

    if (!detail) {
        return <div className="p-10 text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="bg-teal-50 min-h-screen">
            {/* Hero */}
            <div className="bg-teal-600 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm opacity-80 mb-2">
                        ทีมแพทย์ผู้เชี่ยวชาญ
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        {detail.doctor_titlename} {detail.doctor_Name} {detail.doctor_lastname}
                    </h1>
                    <p className="mt-3 text-teal-100">
                        {detail.doctor_major} | {detail.doctor_profession}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 -mt-20 pb-24">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Doctor Image */}
                        <div className="flex justify-center">
                            <img
                                src={`https://ruamchai.com/admin/upload_image/website/doctor/${detail.doctor_Photo}`}
                                alt="doctor"
                                className="w-full max-w-xs rounded-2xl shadow-md"
                            />
                        </div>

                        {/* Doctor Info */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Profile */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {detail.doctor_titlename} {detail.doctor_Name} {detail.doctor_lastname}
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    {detail.doctor_major}
                                    <span className="mx-2 text-gray-300">|</span>
                                    {detail.doctor_profession}
                                </p>
                            </div>

                            {/* Education */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-5 w-1 bg-teal-600 rounded-full" />
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        ประวัติการศึกษา
                                    </h3>
                                </div>

                                <div
                                    className="prose prose-sm sm:prose text-gray-600 max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: detail.doctor_education,
                                    }}
                                />
                            </div>

                            {/* Schedule */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-5 w-1 bg-teal-600 rounded-full" />
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        ตารางออกตรวจผู้ป่วยนอก
                                    </h3>
                                </div>

                                <div className="overflow-x-auto rounded-xl border border-gray-200">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-teal-600 text-white">
                                            <tr>
                                                <th className="p-4 text-left">วัน</th>
                                                {days.map((day) => (
                                                    <th key={day} className="p-4 text-center">
                                                        {day}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white">
                                                <td className="p-4 font-medium text-gray-700">
                                                    เวลา
                                                </td>
                                                {days.map((day) => (
                                                    <td key={day} className="p-4 text-center text-gray-700">
                                                        {schedule[day] || (
                                                            <span className="text-gray-400">--:--</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="mt-4 text-xs text-gray-500">
                                    * ตารางอาจมีการเปลี่ยนแปลง กรุณาติดต่อแผนกผู้ป่วยนอก
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DoctorDetail;
