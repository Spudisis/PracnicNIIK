import s from "./auth.module.css";

function Auth() {
  document.addEventListener("click", function (e) {
    if (e.target.id === "auth") {
      console.log("click");
    }
  });
  return (
    <div className={s.wrapper}>
      <div className={s.authorization}>
        <div className={s.auth_text} id="auth">
          Авторизация
        </div>
        <div className={s.reg}>Регистрация</div>
      </div>
    </div>
  );
}

export default Auth;
