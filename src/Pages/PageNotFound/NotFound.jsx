import { Link } from "react-router-dom";
import "./NotFound.css";
export default function NotFoundPage() {
  return (
    <>
    <div className="errorpage">
    <div className="redirect">
      <h1>404 Page Not Found</h1>
      <h3>Click To the Home Link Below To Redirect</h3>
      <Link to="/">Home</Link>
      </div>
    </div>
    </>
  )
}