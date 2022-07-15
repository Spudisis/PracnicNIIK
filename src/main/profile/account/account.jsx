import s from "./account.module.css";

function Account() {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>Last-Name</div>
      <div className={s.info}>first-name</div>
      <div className={s.info}>middle-name</div>
      <div className={s.info}>numberPhone</div>
      <div className={s.info}>Email</div>
    </div>
  );
}

export default Account;
