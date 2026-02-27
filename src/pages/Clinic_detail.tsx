import { getClinicById, getClinicImagesByClinicId } from "@/api/api";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface ClinicDetail {
    id: number;
    clinic_name: string;
    clinic_detail: string;
    clinic_title: string;
    clinic_createDate: string;
    clinic_CreateBy: number;
    clinic_UpdateDate: string;
    clinic_UpdateBy: number;
}

interface ClinicImage {
    id: number;
    clinic_id: number;
    image_path: string;
    image_title: string | null;
    image_order: number;
    created_at: string;
}

const ClinicDetail: React.FC = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState<ClinicDetail | null>(null);
    const [images, setImages] = useState<ClinicImage[]>([]);
    const [mainImage, setMainImage] = useState<string>("");

    // Load clinic detail
    useEffect(() => {
        if (!id) return;

        (async () => {
            const data = await getClinicById(id);
            setDetail(data);
        })();
    }, [id]);

    // Load clinic images
    useEffect(() => {
        if (!id) return;

        (async () => {
            const data = await getClinicImagesByClinicId(id);
            setImages(data);
        })();
    }, [id]);

    // Set default main image
    useEffect(() => {
        if (images.length > 0) {
            setMainImage(`https://ruamchai.com/admin/upload_image/website/clinic/${images[0].image_path}`);
        }
    }, [images]);

    if (!detail) {
        return <div className="p-10 text-center">Loading...</div>;
    }

    return (
        <div className="relative bg-linear-to-br from-teal-50 via-white to-white">
            <div className="container mx-auto px-6 py-32 relative max-w-7xl">

                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
                    <Link to="/" className="hover:text-teal-600 transition">
                        หน้าแรก
                    </Link>
                    <span>/</span>
                    <Link to="/clinic" className="hover:text-teal-600 transition">
                        คลินิกและศูนย์บริการ
                    </Link>
                    <span>/</span>
                    <span className="text-gray-700 font-medium">
                        รายละเอียดคลินิก
                    </span>
                </nav>

                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                        {detail.clinic_name}
                    </h1>

                    <p className="text-lg text-gray-600 max-w-4xl">
                        {detail.clinic_title}
                    </p>

                    <div className="mt-6 h-1 w-24 bg-teal-500 rounded-full" />
                </div>

                {/* Content + Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Detail Content */}
                    <div className="lg:col-span-7">
                        <div
                            className="prose prose-slate max-w-none prose-p:leading-relaxed prose-h2:text-teal -700"
                            dangerouslySetInnerHTML={{ __html: detail.clinic_detail }}
                        />
                    </div>

                    {/* Image Section */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Main Image */}
                        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                            {mainImage && (
                                <img
                                    src={mainImage}
                                    alt="Clinic"
                                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                                />
                            )}
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-3">
                            {images.map((img, index) => {
                                const imageUrl = `https://ruamchai.com/admin/upload_image/website/clinic/${img.image_path}`;

                                return (
                                    <button
                                        key={index}
                                        onClick={() => setMainImage(imageUrl)}
                                        className={`rounded-xl overflow-hidden border transition-all
                  ${mainImage === imageUrl
                                                ? "ring-2 ring-blue-500 scale-105"
                                                : "hover:ring-2 hover:ring-blue-300"
                                            }`}
                                    >
                                        <img
                                            src={imageUrl}
                                            alt={`Clinic ${index + 1}`}
                                            className="h-20 w-full object-cover"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicDetail;
