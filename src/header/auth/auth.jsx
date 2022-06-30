import s from "./auth.module.css";
import { NavLink } from "react-router-dom";
function Auth() {
  return (
    <div className={s.wrapper}>
      <div className={s.authorization}>
        <NavLink to="/authorization" className={s.auth_text}>
          <div id="auth" className={s.refText}>
            Авторизация
          </div>
        </NavLink>
        <NavLink to="/registration" className={s.reg}>
          <div id="reg" className={s.refText}>
            Регистрация
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Auth;
