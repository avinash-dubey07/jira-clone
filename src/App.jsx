import SidebarOne from "./components/Sidebar_one";
import SideBar from "./components/SideBar";
import MainBoard from "./components/Main_boardTop";
import Kanban from "./components/Kanban/Kanban";




function App() {
  return (
    <>
      <SidebarOne />
      <SideBar />
      <MainBoard />
      < Kanban />
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
