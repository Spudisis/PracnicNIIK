import s from "./profile.module.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Orders from "./orders/orders";
import Account from "./account/account";
import Table1 from "./table1/table1.jsx";
import Table2 from "./table2/table2.jsx";
import Table3 from "./table3/table3.jsx";
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
          to="/profile/table1"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          таблица1
        </NavLink>
        <NavLink
          to="/profile/table2"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          таблица2
        </NavLink>
        <NavLink
          to="/profile/table3"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          таблица3
        </NavLink>
        <NavLink
          to="/profile/table4"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          таблица4
        </NavLink>
      </nav>
      <section className={s.content}>
        <Routes>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/orders" element={<Orders />}></Route>

          <Route path="/table1" element={<Table1 />}></Route>
          <Route path="/table2" element={<Table2 />}></Route>
          <Route path="/table3" element={<Table3 />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default Profile;
