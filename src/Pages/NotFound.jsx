import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
    <div className="errorpage">
    <div>404 Not Found</div>
    <Link to="/">Home from Link</Link>
    <a href="/">Home from A</a>
    </div>
    </>
  )
}