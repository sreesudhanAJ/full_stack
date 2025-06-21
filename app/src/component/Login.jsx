import "./style/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
   

       <img
          className="image"
          src="https://t3.ftcdn.net/jpg/02/14/29/22/360_F_214292295_dsMiBAa83bToIrvyKXeXDJyZtaK0S2bv.jpg"></img>
    
        <h1>Login</h1>

         <input type="text" placeholder="Username or Email" className="first-input" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default Login;
