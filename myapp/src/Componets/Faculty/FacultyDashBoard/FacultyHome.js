import React from "react";
import "antd/dist/antd.css";
import "./Faculty.css";
import BasicTable from "./BasicTable";
import { Link } from "react-router-dom";

const FacultyHome = () => (
  <div className="dashBoardSection">
    <aside className="buttonSsection">
      <div className="buttonGruop">
        
        <button>Add</button>
        <button>Update</button>
        <button>certificates</button>
        <button>Modify</button>
      </div>
    </aside>
    <section className="contentSection">
    <div  className="logoutContainer">
      <h1>Faculty dashBoard</h1>
      <Link to="/"><button >LogOut</button></Link>
      </div>
      <BasicTable />
    </section>
  </div>
);

export default FacultyHome;
