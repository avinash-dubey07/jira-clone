import React from "react";
import SidebarOne from "../../components/Sidebar_one";
import SideBar from "../../components/SideBar";
import MainBoard from "../../components/Main_boardTop";
import Kanban from "../../components/Kanban/Kanban";

export default function HomePage() {
  return (
    <>
      <SidebarOne />
      <SideBar/>
      <MainBoard />
      <Kanban />
    </>
  );
}
