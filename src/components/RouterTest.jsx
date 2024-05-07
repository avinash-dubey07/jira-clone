import { Route, Routes} from "react-router-dom";
import Project from "./pages/Project";
import CreateIssue from "./Modal/Createissue";



export default function RouterTest() {
  return (
    <>
    <nav>
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
    </Routes>
    </>
  )
}