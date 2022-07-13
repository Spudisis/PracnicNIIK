import s from "./authorization.module.css";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
function Authorization() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        <img src="./img/loginImg.png" alt="niik" />
        <h3>Авторизация</h3>

        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="login">
              E-mail/Номер телефона
              <div
                className={`${s.text_field__icon} ${s.text_field__icon_email}`}
              >
                <input
                  className={s.text_field__input}
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Login"
                  {...register("Email", { required: true })}
                />
              </div>
            </label>
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
                {...register("pass", { required: true })}
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

          <div>
            {(errors?.Email || errors?.pass) && (
              <p className={s.errors}>Неверный логин или пароль</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authorization;
