import s from "./profile.module.css";
import { NavLink } from "react-router-dom";
function Profile() {
  return (
    <div className={s.wrapper}>
      <nav className={s.navBlock}>
        <NavLink to="/profile/account" className={s.link}>
          Аккаунт
        </NavLink>
        <NavLink to="/profile/orders" className={s.link}>
          Заказы
        </NavLink>
        <NavLink to="/profile/adminPanel" className={s.link}>
          Админ
        </NavLink>
      </nav>
      <section className={s.content}></section>
    </div>
  );
}

export default Profile;
