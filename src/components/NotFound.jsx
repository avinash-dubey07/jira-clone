import { Link } from "react-router-dom";
import "./NotFound.css";
import Error from "./Images/error.jpg";

export default function NotFoundPage() {
  return (
    <>
      <div className="errorpage">
        <div>
          <img className="err-img" src={Error} alt="Error Image" />
        </div>
        <div className="text-box">
          <h3>Click To the Home Link Below To Redirect</h3>
          <label className="LINK">
            <Link to="/">Home</Link>
          </label>
        </div>
      </div>
    </>
  );
}
