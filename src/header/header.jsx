import Auth from "./auth/auth";
import s from "./header.module.css";
import Logoname from "./logoName/logoname";

function Header() {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.objects}>
          <Logoname />
          <Auth />
        </div>
      </div>
    </header>
  );
}

export default Header;
