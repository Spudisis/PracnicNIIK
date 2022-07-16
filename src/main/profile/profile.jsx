import s from "./profile.module.css";
import { NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Orders from "./orders/orders";
import Account from "./account/account";
import Table1 from "./table1/table1.jsx";
import Table2 from "./table2/table2.jsx";
import Table3 from "./table3/table3.jsx";
import Table4 from "./table4/table4";

import { checkAthenticated, load_user } from "../../auth.action";
import { connect } from "react-redux";

const Profile = () => {
  if (localStorage.getItem("access") == null) {
    return <Navigate to="/" />;
  }
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
          Проекты
        </NavLink>

        <NavLink
          to="/profile/table1"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Менеджеры
        </NavLink>
        <NavLink
          to="/profile/table2"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Товары
        </NavLink>
        <NavLink
          to="/profile/table3"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Заказы
        </NavLink>
        <NavLink
          to="/profile/table4"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Аккаунты
        </NavLink>
      </nav>
      <section className={s.content}>
        <Routes>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/orders" element={<Orders />}></Route>

          <Route path="/table1" element={<Table1 />}></Route>
          <Route path="/table2" element={<Table2 />}></Route>
          <Route path="/table3" element={<Table3 />}></Route>
          <Route path="/table4" element={<Table4 />}></Route>
        </Routes>
      </section>
    </div>
  );
};

export default connect(null, { checkAthenticated, load_user })(Profile);
