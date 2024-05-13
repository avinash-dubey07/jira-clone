import React from "react";
import SidebarOne from "../../components/Sidebar_one";
import SideBar from "../../components/SideBar";
import Board from "../../components/Board";

export default function HomePage() {
  return (
    <>
      <SidebarOne />
      <SideBar/>
      <Board />
    </>
  );
}
