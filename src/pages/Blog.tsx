import React from "react";

const Blog: React.FC = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-br from-blue-50 to-white">
            <div className="pt-20 text-center px-5 pb-24 max-w-3xl mx-auto py-24">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Blog
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Welcome to our healthcare blog! Here, we share the latest news, health tips, and medical insights to help you stay informed and healthy. Explore our articles and stay updated with the world of healthcare.
                </p>
            </div>
        </section>
    );
};

export default Blog;
