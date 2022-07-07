import s from "./authButton.module.css";
import { NavLink } from "react-router-dom";
function Auth() {
  // let heigth;
  // let k;
  // setTimeout(() => {
  //   let wrapper = document.querySelector("#wrap");
  //   k = wrapper.scrollHeight;
  //   heigth = window.pageYOffset;
  //   console.log(heigth);

  //   console.log(k);
  //   if (heigth > k) {
  //   }
  // }, 100);

  return (
    <div className={s.wrap} id="wrap">
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
      <div className={s.blockArrow} id="arrow">
        <img src="./img/arrow.png" alt="Наверх" className={s.arrowImg} />
      </div>
    </div>
  );
}

export default Auth;
