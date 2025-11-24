import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="pt-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        User Profile
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Manage your personal information, view your medical history, and update your settings here.
      </p>
    </div>
  );
};

export default Profile;