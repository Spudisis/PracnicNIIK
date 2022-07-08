import s from "./profile.module.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Adminpanel from "./adminPanel/adminPanel";
import Orders from "./orders/orders";
import Account from "./account/account";
function Profile() {
  return (
    <div className={s.wrapper}>
      <nav className={s.navBlock}>
        <NavLink
          to="/profile/account"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Аккаунт
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Заказы
        </NavLink>
        <NavLink
          to="/profile/adminPanel"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Админ
        </NavLink>
      </nav>
      <section className={s.content}>
        <Routes>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/adminPanel" element={<Adminpanel />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default Profile;
