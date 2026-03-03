
import React, { useEffect } from 'react';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { getClinics } from '@/api/api';



const Clinic: React.FC = () => {
    const [clinics, setClinics] = React.useState<any[]>([]);

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const data = await getClinics();
                setClinics(data);
            } catch (error) {
                console.error("Error fetching clinics:", error);
            }
        };

        fetchClinics();
    }, []);

    const dummyContent = clinics
    return (
        <div className="bg-teal-50 min-h-screen">
            {/* Hero */}
            <div className="bg-teal-600 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        คลินิกสุขภาพ
                    </h1>
                    <p className="mt-4 text-teal-100 max-w-2xl mx-auto">
                        ดูแลสุขภาพของคุณด้วยบริการคลินิกสุขภาพที่ครบครัน
                        พร้อมทีมแพทย์ผู้เชี่ยวชาญและเทคโนโลยีทันสมัย
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 -mt-20 pb-24">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <TracingBeam className="px-6">
                        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                            {dummyContent.map((item, index) => (
                                <div key={`content-${index}`} className="mb-10">
                                    <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                        {item.clinic_name}
                                    </h2>

                                    <p className="text-xl mb-4">
                                        {item.clinic_title}
                                    </p>

                                    <div className="text-sm  prose prose-sm dark:prose-invert">
                                        {item?.clinic_image && item.clinic_image.length > 0 && (
                                            <div className="flex items-center gap-4 w-full max-w-4xl mt-10 mx-auto">
                                                {item.clinic_image.map((img: { image_path: any; image_title: string | undefined; }, imgIndex: React.Key | null | undefined) => (
                                                    <div
                                                        key={imgIndex}
                                                        className="relative group grow transition-all w-56 rounded-lg overflow-hidden h-64 duration-500 hover:w-full"
                                                    >
                                                        <img
                                                            className="h-full w-full object-cover object-center"
                                                            src={`https://ruamchai.com/admin/upload_image/website/clinic/${img.image_path}`}
                                                            alt={img.image_title}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-3 text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: item.clinic_detail,
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </TracingBeam>
                </div>
            </div>
        </div>

    );
};


export default Clinic;