import { getDoctorById } from "@/api/api";
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

const DoctorDetail: React.FC = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState<DoctorDetail | null>(null);

    useEffect(() => {
        const fetchDetail = async () => {
            if (!id) return;
            try {
                const data = await getDoctorById(id);
                setDetail(data);
            } catch (error) {
                console.error("Error fetching doctor detail:", error);
            }
        };
        fetchDetail();
    }, [id]);

    if (!detail) {
        return (
            <div className="p-10 text-center text-gray-500">
                Loading doctor detail...
            </div>
        );
    }


    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">About our Doctor</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                Our team of experienced and compassionate doctors is dedicated to providing exceptional medical care. With a focus on patient-centered treatment, our doctors combine expertise with empathy to ensure the best outcomes for every individual.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">{detail.doctor_titlename} {detail.doctor_Name} {detail.doctor_lastname}</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        {detail.doctor_major} - {detail.doctor_profession}
                    </p>

                    <div className="flex flex-col gap-10 mt-6">
                        <h3 className="font-semibold">Education</h3>

                        <div
                            className="text-gray-600"
                            dangerouslySetInnerHTML={{
                                __html: detail.doctor_education
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default DoctorDetail;
