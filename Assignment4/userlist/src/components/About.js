import Navbar from "./Navbar";
const About = () => {
  return (
    <div>
       <h4 className="text-center">
            About Us
        </h4>
      <Navbar />
        <p className="text-warning text-center mb-4">
            This page is more about our web application
        </p>
        <div className="card">
            <p className="text-danger text-center">
                <code>
                 username:'admin',
                 password:'password123'
                </code>
            </p>
        </div>
    </div>
  )
}

export default About