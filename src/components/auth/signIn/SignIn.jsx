import "./SignIn.css";

export default function SignIn() {
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Sign In</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email"/>
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password"/>
      </div>
      <input type="submit" className="btn22" value="Login" />
      <p className="social-text">Or Sign In with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}