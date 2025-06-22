import "../style/Login.css"
function Login(){
    return (
        <div className="login-center">
            <div className="login-box">
                <h1 className="Login">Login</h1>
                <input type="text" placeholder="Enter username" />
                <input type="password" placeholder="Enter password" />
                <input type="submit" value="Login" />
            </div>
        </div>
    );
}
export default Login;