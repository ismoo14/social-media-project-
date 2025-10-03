import { Link } from "react-router-dom";
import "./register.scss"
import { useState } from "react";
import axios from 'axios';
const Register = () => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    });

    const [err, setErr] = useState(false);

    const handleChange =  (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
        } catch(err){
        setErr(true);
        }
};
    
return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>DM Me.</h1>
                <p>
                    lnsvnf jvbfvbfj kvbjkbvj vknvkjvkj vbsjkvbsjkvsbvjs bvjsbvkj sbvsjb vsjkvb ssdjbsuf heufhwe fioqpdj efnvsoeif wh ufssjieu sfidjefu sfifhewufjfe ihfuejfklekfien.
                </p>
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
                    {err && ""}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Register;