import React from "react";
import { motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const mockData = [
  {
    id: 1,
    title: "The Catalyzer",
    category: "CATEGORY",
    price: "$16.00",
    imageUrl: "https://dummyimage.com/420x260",
  },
  {
    id: 2,
    title: "Shooting Stars",
    category: "CATEGORY",
    price: "$21.15",
    imageUrl: "https://dummyimage.com/421x261",
  },
  {
    id: 3,
    title: "Neptune",
    category: "CATEGORY",
    price: "$12.00",
    imageUrl: "https://dummyimage.com/422x262",
  },
  {
    id: 4,
    title: "The 400 Blows",
    category: "CATEGORY",
    price: "$18.40",
    imageUrl: "https://dummyimage.com/423x263",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Rooms: React.FC = () => {
    return (
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {mockData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <DirectionAwareHover imageUrl={item.imageUrl}>
                <div>
                  <h3 className="text-xs tracking-widest text-gray-200 mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-white text-lg font-semibold">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-gray-200">{item.price}</p>
                </div>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Rooms;