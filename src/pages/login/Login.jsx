import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>
                    lnsvnf jvbfvbfj kvbjkbvj vknvkjvkj vbsjkvbsjkvsbvjs bvjsbvkj sbvsjb vsjkvb ssdjbsuf heufhwe fioqpdj efnvsoeif wh ufssjieu sfidjefu sfifhewufjfe ihfuejfklekfien.
                </p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username"
                    />
                    <input type="Password" placeholder="Password"
                    />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Login;
