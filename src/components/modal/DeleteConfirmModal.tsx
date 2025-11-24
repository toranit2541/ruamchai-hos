import React from "react";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface DeleteConfirmModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;       // Optional custom title
  message?: string;     // Optional custom message
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  open,
  onCancel,
  onConfirm,
  title = "ยืนยันการลบข้อมูล",
  message = "คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้? การกระทำนี้ไม่สามารถย้อนกลับได้",
}) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      closeIcon={false}
    >
      <div className="text-center py-4">
        <ExclamationCircleOutlined className="text-red-500 text-5xl mb-4" />

        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center gap-4">
          <Button onClick={onCancel} className="px-6">
            ยกเลิก
          </Button>

          <Button
            danger
            type="primary"
            onClick={onConfirm}
            className="px-6"
          >
            ลบข้อมูล
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;
