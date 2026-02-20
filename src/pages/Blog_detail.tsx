import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleDoctorById } from "../api/api";

interface ArticleDetailType {
  id: number;
  article_title: string;
  article_details: string;
  article_Photo: string;
  article_keyword?: string;
  article_createDate?: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<ArticleDetailType | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!id) return;

      try {
        const data = await getArticleDoctorById(id);
        setDetail(data);
      } catch (error) {
        console.error("Error fetching article detail:", error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!detail) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading article detail...
      </div>
    );
  }

  return (
    <div className="bg-teal-50 min-h-screen">
      {/* Hero */}
      <div className="bg-teal-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80 mb-2">บทความ</p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            {detail.article_title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 -mt-20 pb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <p className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-teal-600">
              Home
            </Link>{" "}
            /{" "}
            <span className="text-teal-600"> {detail.article_title}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-10">
            <img
              className="max-w-sm w-full rounded-xl h-auto"
              src={`https://ruamchai.com/admin/upload_image/website/blog/${detail.article_Photo}`}
              alt=""
            />

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium text-gray-700">
                {detail.article_title}
              </h1>

              <p className="text-base font-medium mt-6">
                รายละเอียดบทความ
              </p>

              <div
                className="mt-3 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: detail.article_details,
                }}
              />

              {detail.article_keyword && (
                <div className="mt-4 text-sm text-gray-400">
                  Keyword: {detail.article_keyword}
                </div>
              )}

              {detail.article_createDate && (
                <div className="mt-2 text-xs text-gray-400">
                  Created: {detail.article_createDate}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BlogDetail;
