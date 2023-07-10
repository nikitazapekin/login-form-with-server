import "./login.css"
import { Link } from "react-router-dom"
const Login=()=> {
    return (
        <div className="login">
            <h1 className="loginForm">Login</h1>
            
<input className="loginUsername" placeholder="type username..." />
<input type="password" className="loginPassword" placeholder="type password..." />
<button className="loginBtn">Login</button>
<h3 className="orText">Or <br /> <Link to="/registration" style={{textDecoration: "none"}}> <span className="subOrText">Have no account? </span></Link></h3>

        </div>
    )
}
export {Login}