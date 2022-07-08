import s from "./registration.module.css";
function Registration() {
  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        <img src="./img/loginImg.png" alt="niik" />
        <h3>Регистрация</h3>
        <form action="" className={s.form}>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="login">
              E-mail
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_email}`}
            >
              <input
                className={s.text_field__input}
                type="email"
                name="login"
                id="login"
                placeholder="Login"
              />
            </div>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="name">
              Имя
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_email}`}
            >
              <input
                className={s.text_field__input}
                type="text"
                name="login"
                id="name"
                placeholder="Имя"
              />
            </div>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="phone">
              Телефон
            </label>
            <div className={`${s.text_field__icon} ${s.text_field__icon_tel}`}>
              <input
                className={s.text_field__input}
                type="tel"
                name="phone"
                id="phone"
                placeholder="Номер телефона"
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
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="password_repeat">
              Повторите пароль
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_password}`}
            >
              <input
                className={s.text_field__input}
                type="password"
                name="password_repeat"
                id="password_repeat"
                placeholder="Password repeat"
              />
            </div>
          </div>
          <label htmlFor="buttonAuth" className={s.join}>
            Зарегистрироваться
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

export default Registration;
