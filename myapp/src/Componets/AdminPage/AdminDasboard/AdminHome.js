
import React from "react";
import "antd/dist/antd.css";
import "./admin.css";
import { Link } from "react-router-dom";
import FacultyAllTable from "./FacultyAllTable";



const AdminHome = () => (
  <div className="dashBoardSection">
    <aside className="buttonSsection">
      <div className="buttonGruop">
        
        <button>Adding Faculty</button>
        <button>Upload</button>
        <button>Modify</button>
        <button>delete</button>
      </div>
    </aside>
    <section className="contentSection">
      <div  className="logoutContainer">
      <h1>Admin dashBoard</h1>
      <Link to="/"><button >LogOut</button></Link>
      
      </div>
      <FacultyAllTable />
    </section>
  </div>
);

export default AdminHome;

