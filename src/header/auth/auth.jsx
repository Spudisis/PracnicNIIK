import s from "./auth.module.css";

function Auth() {
  document.addEventListener("click", function (e) {
    if (e.target.id === "auth") {
      console.log("click1");
    }
    if (e.target.id === "reg") {
      console.log("click2");
    }
  });
  return (
    <div className={s.wrapper}>
      <div className={s.authorization}>
        <div className={s.auth_text} id="auth">
          Авторизация
        </div>
        <div className={s.reg} id="reg">
          Регистрация
        </div>
      </div>
    </div>
  );
}

export default Auth;
