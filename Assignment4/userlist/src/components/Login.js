import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


const initialState = {
   username:"",
   password:"",
 };
const Login = (props) => {
   const [state,setState] = useState(initialState);
   const {username,password} = state;

const navigate = useNavigate();
   const handleSubmit = (e) =>{
    e.preventDefault();

    let userData = {
      username:'admin',
      password:'password123'
    }
    if (!password || !username) {
      alert("Please fill all fields");
    }
    if ((username === userData.username)&&(password === userData.password)) {
      const token = '1234token';
      sessionStorage.setItem('auth-token',token);
      props.auth();
      navigate("/main");
      
    } else {
      alert('Wrong credentilas');
    }
    
   }

   const handleInputChange = (e)=>{
    const {name,value} = e.target;


    setState({...state,[name]:value});

    
   }
  return (
    <div>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <strong>Login</strong>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="text-muted" for="userName">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-muted" for="Password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <input type="submit" className="btn btn-primary" value= "Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
