import s from "./logoname.module.css";
function Logoname() {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
        <img src="./img/Logo.png" alt="logo" />
      </div>

      <h1 className={s.text}>
        Научно-исследовательский и проектный институт карбамида
      </h1>
    </div>
  );
}

export default Logoname;
