import s from "./change_pass.module.css";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
function Changepass() {
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
        <h3>Смена пароля</h3>

        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="login">
              Введите Email
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

          <label htmlFor="buttonAuth" className={s.join}>
            Отправить код
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

export default Changepass;
