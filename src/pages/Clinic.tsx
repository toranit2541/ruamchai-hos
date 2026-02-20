import { getClinics } from "@/api/api";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

interface Department {
    id: number;
    clinic_name: string;
    clinic_detail: string;
    clinic_title: string;
    clinic_createDate: string;
    clinic_CreateBy: number;
    clinic_UpdateDate: string;
    clinic_UpdateBy: number;
}

export default function DepartmentSection() {
    const [department, setDepartment] = React.useState<Department[]>([]);

    React.useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const data = await getClinics();
                setDepartment(data);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };

        fetchDepartments();
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
                        แผนกและศูนย์บริการของโรงพยาบาล
                    </motion.h1>
                    <p className="mt-4 text-teal-100 max-w-2xl mx-auto">
                        ให้บริการโดยทีมแพทย์ผู้เชี่ยวชาญ พร้อมเครื่องมือและเทคโนโลยีทันสมัย
                    </p>
                </div>
            </div>
            {/* Content */}
            <div className="container mx-auto px-6 -mt-20 pb-24">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {department.map((dept) => (
                            <motion.div
                                key={dept.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="group"
                            >
                                <Link to={`/clinic/${dept.id}`}>
                                    <div className="h-full bg-white bg-opacity-75 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            {dept.clinic_name}
                                        </h2>
                                        <p className="leading-relaxed text-base text-gray-600">
                                            {dept.clinic_detail.length > 100
                                                ? dept.clinic_detail.substring(0, 100) + "..."
                                                : dept.clinic_detail}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
