import s from "./registration.module.css";
import { useForm } from "react-hook-form";
function Registration() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let errors = document.querySelector("#errors");
    data.pass != data.passRepeat
      ? alert("Пароли должны быть одинаковы")
      : alert(JSON.stringify(data));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        <img src="./img/loginImg.png" alt="niik" />
        <h3>Регистрация</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
                placeholder="Email"
                {...register("Email", { required: true })}
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
                {...register("FIO", { required: true })}
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
                {...register("phone", { required: true })}
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
                {...register("pass", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Пароль должен содержать минимум 5 символов",
                  },
                })}
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
                {...register("passRepeat", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Пароль должен содержать минимум 5 символов",
                  },
                })}
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
          <div id="errors">
            {(errors?.Email ||
              errors?.pass ||
              errors?.passRepeat ||
              errors?.phone ||
              errors?.FIO) && (
              <p className={s.errors}>
                {errors?.pass?.message || "Необходимо заполнить каждое поле"}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
