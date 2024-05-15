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
import projectService from "../backend/services/project.service";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const [optionOnHover, setOptionOnHover] = useState(false);
  const project = projectService.getProjectDetails();
  const { name, projectCategory } = project;

  return (
    <div
      className="side-bar"
      onMouseEnter={() => setOptionOnHover(true)}
      onMouseLeave={() => setOptionOnHover(false)}
    >
      <div>
        <SiProgress fontSize={"40px"} color="red" />
        <span className="heading-one"> {name}</span> <br />
        <span className="heading-two"> {projectCategory} Project</span>
      </div>{" "}
      <br />
      <div className="sidebar-btn">
        <div className="sb-btn">
          <SideBarOption
            icon={<LiaChalkboardSolid fontSize={"21px"} />}
            text={"Kanban Board"}
            onHover={optionOnHover}
            onClick={() => navigate("")}
          />
        </div>
        <div className="sb-btn">
          <SideBarOption
            icon={<BsGearWideConnected fontSize={"21px"} />}
            text={"Project Setting"}
            onHover={optionOnHover}
            onClick={() => navigate("project-settings")}
          />
        </div>
        <hr />
      </div>
      <div className="bottom-sb">
        <div>
          <SideBarOption
            icon={<MdRocket fontSize={"21px"} />}
            text={"Releases"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<BsFilterSquareFill fontSize={"21px"} />}
            text={"Issues and filters"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<MdEventNote fontSize={"21px"} />}
            text={"Pages"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<BsGraphUpArrow fontSize={"21px"} />}
            text={"Reports"}
            onHover={optionOnHover}
          />
        </div>
        <div>
          <SideBarOption
            icon={<MdSettingsInputComponent fontSize={"21px"} />}
            text={"Components"}
            onHover={optionOnHover}
          />
        </div>
      </div>
    </div>
  );
}
