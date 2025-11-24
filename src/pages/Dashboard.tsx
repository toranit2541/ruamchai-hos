import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="pt-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Dashboard
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Welcome to your dashboard. Here you can manage your appointments, view your health records, and access various services provided by RuamChai Hospital.
      </p>
    </div>
  );
};

export default Dashboard;