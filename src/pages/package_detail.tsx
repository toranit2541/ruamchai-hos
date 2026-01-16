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
    const fetchDetail = async () => {
      if (!id) return;

      try {
        const data = await getPackageById(id);
        setDetail(data);
      } catch (error) {
        console.error("Error fetching package detail:", error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!detail) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading package detail...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <p className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-indigo-500">Home</Link> /
        <Link to="/package" className="hover:text-indigo-500"> Packages</Link> /
        <span className="text-indigo-500"> {detail.package_title}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          className="max-w-sm w-full rounded-xl h-auto"
          src={`http://localhost:8080/admin/upload_image/website/package/${detail.package_Photo}`}
          alt=""
        />

        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium text-gray-700">
            {detail.package_title}
          </h1>

          <h2 className="text-lg text-gray-500 mt-2">
            {detail.package_name}
          </h2>

          <div className="mt-6">
            <p className="text-2xl font-medium text-indigo-600">
              ราคา: {detail.package_price} บาท
            </p>
          </div>

          <p className="text-base font-medium mt-6">
            รายละเอียดแพ็กเกจ
          </p>

          <div
            className="mt-3 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: detail.package_details,
            }}
          />

          {detail.package_keyword && (
            <div className="mt-4 text-sm text-gray-400">
              Keyword: {detail.package_keyword}
            </div>
          )}

          {detail.package_createDate && (
            <div className="mt-2 text-xs text-gray-400">
              Created: {detail.package_createDate}
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

export default PackageDetail;
