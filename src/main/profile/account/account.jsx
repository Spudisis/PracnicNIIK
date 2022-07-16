import s from "./account.module.css";

function Account() {
  const exit = () => {
    console.log("пошел нахуй");
  };
  return (
    <div className={s.wrapper}>
      <div className={s.info}>Last-Name</div>
      <div className={s.info}>first-name</div>
      <div className={s.info}>middle-name</div>
      <div className={s.info}>numberPhone</div>
      <div className={s.info}>Email</div>
      <button className={`${s.info} ${s.button}`} onClick={exit}>
        Выйти из профиля
      </button>
    </div>
  );
}

export default Account;
