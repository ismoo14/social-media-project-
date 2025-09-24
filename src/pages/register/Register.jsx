import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
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
                    <input type="text" placeholder="Username"
                    />
                    <input type="email" placeholder="Email"
                    />
                    <input type="Password" placeholder="Password"
                    />
                    <input type="text" placeholder="Name"
                    />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Register;