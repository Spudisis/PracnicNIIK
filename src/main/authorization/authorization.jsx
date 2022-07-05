import s from "./authorization.module.css";
function Authorization() {
  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        <form action="" className={s.form}>
          <input type="text" name="text" id="" />
          <input type="password" />
        </form>
      </div>
    </div>
  );
}

export default Authorization;
