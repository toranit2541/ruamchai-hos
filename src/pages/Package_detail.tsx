import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPackageById } from "../api/api";

interface PackageDetailType {
    id: number;
    package_name: string;
    package_title: string;
    package_details: string;
    package_price: number;
    package_Photo: string;
    package_keyword?: string;
    package_createDate?: string;
}

const PackageDetail: React.FC = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState<PackageDetailType | null>(null);

    useEffect(() => {
        if (!id) return;
        getPackageById(id).then(setDetail).catch(console.error);
    }, [id]);

    if (!detail) {
        return (
            <div className="p-10 text-center text-gray-500">
                Loading package detail...
            </div>
        );
    }

    return (
        <div className="bg-teal-50 min-h-screen">
            {/* Hero */}
            <div className="bg-teal-600 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm opacity-80 mb-2">
                        โปรแกรมตรวจสุขภาพ
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        {detail.package_title}
                    </h1>
                    <p className="mt-3 text-teal-100">
                        {detail.package_name}
                    </p>
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
                        <Link to="/package" className="hover:text-teal-600">
                            Packages
                        </Link>{" "}
                        /{" "}
                        <span className="text-teal-600 font-medium">
                            {detail.package_title}
                        </span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Package Image */}
                        <div className="flex justify-center">
                            <img
                                src={`https://ruamchai.com/admin/upload_image/website/package/${detail.package_Photo}`}
                                alt="package"
                                className="w-full max-w-xs rounded-2xl shadow-md"
                            />
                        </div>

                        {/* Package Info */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Title */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {detail.package_title}
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    {detail.package_name}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                                <p className="text-sm text-gray-600 mb-1">
                                    ราคาแพ็กเกจ
                                </p>
                                <p className="text-3xl font-semibold text-teal-600">
                                    {detail.package_price.toLocaleString()} บาท
                                </p>
                            </div>

                            {/* Details */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-5 w-1 bg-teal-600 rounded-full" />
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        รายละเอียดแพ็กเกจ
                                    </h3>
                                </div>

                                <div
                                    className="prose prose-sm sm:prose text-gray-600 max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: detail.package_details,
                                    }}
                                />
                            </div>

                            {/* Meta */}
                            {(detail.package_keyword || detail.package_createDate) && (
                                <div className="text-sm text-gray-400 space-y-1">
                                    {detail.package_keyword && (
                                        <div>Keyword: {detail.package_keyword}</div>
                                    )}
                                    {detail.package_createDate && (
                                        <div>
                                            วันที่เผยแพร่: {detail.package_createDate}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* CTA */}
                            <div className="pt-6">
                                <a
                                    href="https://line.me/R/ti/p/@104vtkyc?oat_content=url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto inline-block text-center px-10 py-4 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-md"
                                >
                                    ติดต่อสอบถาม / นัดหมาย
                                </a>
                            </div>

                            <p className="text-xs text-gray-500">
                                * ราคาและรายการตรวจอาจมีการเปลี่ยนแปลง กรุณาติดต่อโรงพยาบาล
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetail;
