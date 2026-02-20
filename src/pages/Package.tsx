import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { getPackages } from "../api/api";
import { Link } from "react-router-dom";

interface ApiPackage {
    id: number;
    package_name: string;
    package_title: string;
    package_price: number;
    package_Photo: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Package: React.FC = () => {
    const [packages, setPackages] = useState<ApiPackage[]>([]);

    useEffect(() => {
        getPackages()
            .then(setPackages)
            .catch((err) => console.error(err));
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
                        โปรแกรมตรวจสุขภาพ & แพ็กเกจ
                    </motion.h1>
                    <p className="mt-4 text-teal-100 max-w-2xl mx-auto">
                        ดูแลสุขภาพของคุณด้วยโปรแกรมตรวจสุขภาพมาตรฐาน
                        และแพ็กเกจทางการแพทย์จากทีมแพทย์ผู้เชี่ยวชาญ
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 -mt-20 pb-24">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="group"
                            >
                                <Link to={`/package/${item.id}`}>
                                    <DirectionAwareHover
                                        imageUrl={`https://ruamchai.com/admin/upload_image/website/package/${item.package_Photo}`}
                                    >
                                        <div className="text-left">
                                            <span className="inline-block mb-2 text-xs font-medium bg-teal-600/80 px-3 py-1 rounded-full text-white">
                                                โปรแกรมสุขภาพ
                                            </span>

                                            <h3 className="text-white text-lg font-semibold leading-snug">
                                                {item.package_title}
                                            </h3>

                                            <p className="mt-1 text-sm text-teal-100">
                                                {item.package_name}
                                            </p>

                                            <p className="mt-4 text-xl font-semibold text-white">
                                                {item.package_price.toLocaleString()} บาท
                                            </p>
                                        </div>
                                    </DirectionAwareHover>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {packages.length === 0 && (
                        <p className="text-center text-gray-500 py-20">
                            ไม่พบข้อมูลแพ็กเกจ
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Package;
