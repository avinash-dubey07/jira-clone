import React, { useState } from "react";
import { SiProgress } from "react-icons/si";
import { LiaChalkboardSolid } from "react-icons/lia";
import { BsGearWideConnected } from "react-icons/bs";
import { MdRocket } from "react-icons/md";
import { BsFilterSquareFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { MdSettingsInputComponent } from "react-icons/md";
import "./SideBar.css";
import SideBarOption from "./commons/SidebarOptions/SideBarOption";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "../App";

export default function SideBar() {
  const navigate = useNavigate();
  const [optionOnHover, setOptionOnHover] = useState(false);
  const {project} = useProjectContext();
  const { name, category } = project;
  

  return (
    <div
      className="side-bar"
      onMouseEnter={() => setOptionOnHover(true)}
      onMouseLeave={() => setOptionOnHover(false)}
    >
      <div style={{display:"flex", padding:'10px', marginTop:'12px', marginLeft:'23px'}}>
      <div>
        <SiProgress fontSize={"40px"} color="red" />
        </div>
        <div>
        <span className="heading-one"> {name} </span> <br />
        <span className="heading-two"> {category} Project</span>
        </div>
      </div>
     
    
      <div className="sidebar-btn">
        <div className="sb-btn">
          <SideBarOption
            icon={<LiaChalkboardSolid fontSize={"20px"} />}
            text={"Kanban Board"}
            onHover={optionOnHover}
            onClick={() => navigate("")}
          />
        </div>
        <div className="sb-btn">
          <SideBarOption
            icon={<BsGearWideConnected fontSize={"20px"} />}
            text={"Project Setting"}
            onHover={optionOnHover}
            onClick={() => navigate("project-settings")}
          />
        </div>
      </div>
      <hr />
      <div className="bottom-sb">
        <div>
          <SideBarOption
            icon={<MdRocket fontSize={"20px"} />}
            text={"Releases"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<BsFilterSquareFill fontSize={"20px"} />}
            text={"Issues and filters"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<MdEventNote fontSize={"20px"} />}
            text={"Pages"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<BsGraphUpArrow fontSize={"20px"} />}
            text={"Reports"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<MdSettingsInputComponent fontSize={"20px"} />}
            text={"Components"}
            onHover={optionOnHover}
          />
        </div>
      </div>
    </div>
  );
}
