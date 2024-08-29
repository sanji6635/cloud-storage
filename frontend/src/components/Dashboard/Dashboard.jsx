import React from "react";
import "./dashboard.css";
import AddFiles from "../addFiles/AddFiles";
import UploadedFiles from "../uploadedFiles/UploadedFiles";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <AddFiles />
      </div>
      <div>
        <UploadedFiles />
      </div>
    </div>
  );
};

export default Dashboard;
