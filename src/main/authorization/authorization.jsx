import s from "./authorization.module.css";

import { NavLink } from "react-router-dom";
function Authorization() {
  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        <img src="./img/loginImg.png" alt="niik" />
        <h3>Авторизация</h3>
        <form action="" className={s.form}>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="login">
              E-mail/Номер телефона
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_email}`}
            >
              <input
                className={s.text_field__input}
                type="text"
                name="login"
                id="login"
                placeholder="Login"
              />
            </div>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="password">
              Пароль
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_password}`}
            >
              <input
                className={s.text_field__input}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <NavLink to="./change_password" className={s.changePass}>
              Забыли пароль?
            </NavLink>
          </div>
          <label htmlFor="buttonAuth" className={s.join}>
            Войти
          </label>
          <button
            type="submit"
            id="buttonAuth"
            className={s.hideButton}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default Authorization;
