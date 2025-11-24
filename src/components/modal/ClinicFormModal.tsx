import React, { useState, useEffect } from "react";
import { IconX, IconUpload } from "@tabler/icons-react";

export interface ClinicFormData {
    id?: number;
    title: string;
    description: string;
    imageUrl: string | File | null;
}

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: ClinicFormData) => void;
    initialData?: ClinicFormData | null;
}

const ClinicFormModal: React.FC<Props> = ({
    open,
    onClose,
    onSubmit,
    initialData,
}) => {
    const [formData, setFormData] = useState<ClinicFormData>({
        title: "",
        description: "",
        imageUrl: null,
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                title: "",
                description: "",
                imageUrl: null,
            });
        }
    }, [initialData]);

    if (!open) return null;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, imageUrl: file }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    //Preview image
    const previewImage =
        typeof formData.imageUrl === "string"
            ? formData.imageUrl
            : formData.imageUrl
                ? URL.createObjectURL(formData.imageUrl)
                : null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-999 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <IconX size={22} />
        </button>

        <h2 className="text-xl font-bold mb-4">
          {initialData ? "แก้ไขข้อมูลคลีนิก" : "เพิ่มข้อมูลคลีนิก"}
        </h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="text-sm font-semibold">รูปภาพคลีนิก</label>
          <div className="mt-2 w-full h-40 border rounded-xl flex flex-col items-center justify-center cursor-pointer bg-gray-50">
            {previewImage ? (
              <img
                src={previewImage}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="flex flex-col items-center">
                <IconUpload size={40} />
                <p className="text-sm mt-2">คลิกเพื่ออัปโหลดรูปภาพ</p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={handleImage}
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm font-semibold">ชื่อคลีนิก</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded-lg w-full p-2 mt-1"
            placeholder="เช่น นพ. สมชาย ใจดี"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-sm font-semibold">รายละเอียดคลีนิก</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded-lg w-full p-2 mt-1"
            placeholder="เช่น ออร์โธปิดิกส์"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            ยกเลิก
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            บันทึกข้อมูล
          </button>
        </div>
      </div>
    </div>
    );
};

export default ClinicFormModal;