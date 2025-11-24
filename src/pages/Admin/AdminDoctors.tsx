import React, { useState } from "react";
import { motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { IconPencil, IconTrash, IconPlus } from "@tabler/icons-react";
import DoctorFormModal, { type DoctorFormData } from "@/components/modal/DoctorFormModal";
import DeleteConfirmModal from "@/components/modal/DeleteConfirmModal";

import mo1 from "@/assets/mo1.png";
import mo2 from "@/assets/mo2.png";
import mo3 from "@/assets/mo3.png";
import mo4 from "@/assets/mo4.png";

const mockData = [
  {
    id: 1,
    title: "นพ. ทวีพงษ์ ทวีชัยถาวร",
    category: "สูติศาสตร์-นรีเวชวิทยา",
    profession: "อายุรกรรม",
    education: "คณะแพทย์ศาสตร์บัณฑิต ศิริราชพยาบาล มหาวิทยาลัยมหิดล",
    imageUrl: mo1,
  },
  {
    id: 2,
    title: "นพ. ประภัทร จารุมนพร",
    category: "ออร์โธปิดิกส์",
    profession: "อายุรกรรม",
    education: "แพทยศาสตร์บัณฑิต คณะแพทยศาสตร์ โรงพยาบาลรามาธิบดี",
    imageUrl: mo2,
  },
  {
    id: 3,
    title: "นพ. พงษ์ธร ทัศนาวิวัฒน์",
    category: "เวชปฏิบัติทั่วไป",
    profession: "อายุรกรรม",
    education: "แพทยศาสตร์บัณฑิตคณะแพทยศาสตร์ มหาวิทยาลัยนเรศวร",
    imageUrl: mo3,
  },
  {
    id: 4,
    title: "นพ. อนิรุทร พงษ์พัชราธรเทพ",
    category: "รังสีวิทยาวินิจฉัย",
    profession: "อายุรกรรม",
    education: "คณะแพทยศาสตร์รามาธิบดี มหาวิทยาลัยมหิดล",
    imageUrl: mo4,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AdminDoctors: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<DoctorFormData | null>(null);

  // DELETE modal states
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // CREATE
  const handleCreate = () => {
    setEditData(null);
    setOpenModal(true);
  };

  // EDIT
  const handleEdit = (id: number) => {
    const doctor = mockData.find((d) => d.id === id);
    if (doctor) {
      setEditData(doctor);
      setOpenModal(true);
    }
  };

  // SUBMIT FORM
  const handleSubmitForm = (data: DoctorFormData) => {
    console.log("Form submitted:", data);
  };

  // OPEN DELETE CONFIRM
  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setDeleteOpen(true);
  };

  // CONFIRM DELETE
  const confirmDelete = () => {
    console.log("Deleting ID:", selectedId);

    // TODO: API DELETE

    setDeleteOpen(false);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center gap-6">

          {/* CREATE CARD */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={handleCreate}
            className="flex flex-col justify-center items-center w-[300px] h-[350px] border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50"
          >
            <IconPlus size={60} stroke={1.5} />
            <p className="mt-4 text-xl font-semibold">สร้างข้อมูลแพทย์</p>
          </motion.div>

          {/* DOCTOR CARDS */}
          {mockData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              {/* Edit / Delete Buttons */}
              <div className="absolute top-2 right-2 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition">

                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <IconPencil size={18} />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteClick(item.id)}
                  className="bg-white p-2 rounded-full shadow hover:bg-red-100"
                >
                  <IconTrash size={18} className="text-red-600" />
                </button>
              </div>

              {/* Hover Card */}
              <DirectionAwareHover imageUrl={item.imageUrl}>
                <div>
                  <h3 className="text-xs tracking-widest text-gray-200 mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-white text-lg font-semibold">
                    {item.title}
                  </h2>
                </div>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FORM MODAL */}
      <DoctorFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        initialData={editData}
        onSubmit={handleSubmitForm}
      />

      {/* DELETE CONFIRMATION MODAL */}
      <DeleteConfirmModal
        open={deleteOpen}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={confirmDelete}
      />
    </section>
  );
};

export default AdminDoctors;
