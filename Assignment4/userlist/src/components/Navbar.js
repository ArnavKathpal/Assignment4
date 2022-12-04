import { Link } from "react-router-dom"; 
const Navbar = () => {
  return (
    <div className="text-center">
    <nav>
    <Link to="/main" className="link">Main</Link>
    <Link to="/about" className="link">About</Link>
    <Link to="/" className="link">Logout</Link>
    </nav>
    </div>
  )
}

export default Navbar