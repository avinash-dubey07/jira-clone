// import { Route, Routes } from "react-router-dom";
import SidebarOne from "./components/Sidebar_one";
//  import Popup from "./Pages/Popup";
import SideBar from "./components/SideBar";
import MainBoard from "./components/Main_board";
// import Kanban from "./components/Kanban/Kanban";
// import BanBan from "./components/Banban copy";
// import CreateIssue from "./components/Modal/Createissue";
// import Project from "./pages/Project";

function App() {
  return (
    <>
      <SidebarOne />
      {/* < Popup /> */}
      <SideBar />
      {/* <Kanban /> */}
      {/* <BanBan /> */}
      <MainBoard />
      {/* < CreateIssue /> */}
    </>
  );
}

{
  /* <nav>
      <ul>
        <li>
          <Link to="/">Project</Link>
        </li>
        <li>
          <Link to="/createissue">Createissue</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path= "/" element= {<Project />} />
      <Route path= "/createissue" element= {<CreateIssue />} />
    </Routes> */
}

export default App;
