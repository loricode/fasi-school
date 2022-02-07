import "../../styles/signin.css";
import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../../../../hooks/auth/useAuth";
import { SigninService } from "../../services/signin.service";
import { authenticated } from "../../../../store/auth/action";
import { User } from "../../interfaces/user.interface";

export function SignIn() {
  const inputEmail: MutableRefObject<any> = useRef();
  const inputpassword: MutableRefObject<any> = useRef();

  const dispatch = useAuthDispatch();
  const navigation = useNavigate();

  const signIn = () => {
    const user: User = {
      email: inputEmail.current.value,
      password: inputpassword.current.value,
    };

    if (user.email === "" || user.password === "") {
      return;
    }

    const response = SigninService.signIn(user);
   
    if (response.ok && response.status) {
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(authenticated(response.data));
      navigation("/dashboard");
    }
  };

  return (
    <div className="signin">
      <section className="section-form">
        <form className="form-signin">
          <div className="form-title">
            <h4>Login</h4>
          </div>

          <div className="group">
            <div className="box-icon">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/user.svg"}
                className="icon"
                id="input-1"
                alt="ic"
              />
            </div>

            <input
              autoComplete="off"
              autoFocus
              placeholder="Username"
              ref={inputEmail}
            />
          </div>

          <div className="group">
            <div className="box-icon-password">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/password.svg"}
                className="icon"
                id="input-1"
                alt="ic"
              />
            </div>
            <input
              placeholder="Password"
              type="password"
              maxLength={6}
              ref={inputpassword}
            />

            <div className="box-icon-eye">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/eye.svg"}
                className="icon"
                id="input-1"
                alt="ic"
              />
            </div>
          </div>
          <div className="btn-group">
            <button type="button" onClick={signIn}>
              Sign in
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
