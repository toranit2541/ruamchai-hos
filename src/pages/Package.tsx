import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { getPackages } from '../api/api';
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
    const fetchPackages = async () => {
      try {
        const data = await getPackages();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-600">
            Promotion And Package
          </h1>

          <div className="flex flex-wrap justify-center gap-6 py-12">
            {packages.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Link to={`/package/${item.id}`}>
                  <DirectionAwareHover
                    imageUrl={`http://localhost:8080/admin/upload_image/website/package/${item.package_Photo}`}
                  >
                    <div>
                      <h3 className="text-xs tracking-widest text-gray-200 mb-1">
                        {item.package_name}
                      </h3>
                      <h2 className="text-white text-lg font-semibold">
                        {item.package_title}
                      </h2>
                      <p className="mt-1 text-gray-200">
                        {item.package_price} บาท
                      </p>
                    </div>
                  </DirectionAwareHover>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Package;
