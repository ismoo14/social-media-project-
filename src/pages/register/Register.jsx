import { Link, useNavigate } from "react-router-dom";
import "./register.scss"
import { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../../context/authContext";
const Register = () => {
    const navigate = useNavigate(); 
    const { login } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    });

    const [err, setErr] = useState(null);

    const handleChange =  (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);

            await login({ username: inputs.username, password: inputs.password }); 

        navigate("/");
        } catch(err){
        setErr(err.response.data);
        }
};
    
return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>DM Me.</h1>
                <p>This is DM Me Social Media web app that helps you connect with your loved ones.</p>
                <span>Do you have an account?</span>
                <Link to="/Login">
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}
                    />
                    <input type="email" placeholder="Email" name="email" onChange={handleChange}
                    />
                    <input type="Password" placeholder="Password" name="password" onChange={handleChange}
                    />
                    <input type="text" placeholder="Name" name="name" onChange={handleChange}
                    />
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Register;