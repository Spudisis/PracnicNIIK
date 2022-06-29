import s from "./auth.module.css";

function Auth() {
  return (
    <div className={s.wrapper}>
      <div className={s.authorization}>
        <div className={s.auth_text}>Авторизация</div>
        <div className={s.reg}>Регистрация</div>
      </div>
    </div>
  );
}

export default Auth;
