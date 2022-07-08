import Authorization from "./authorization/authorization";
import s from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import General from "./general/general";
import Registration from "./registration/registration";
import Changepass from "./authorization/change_pass/change_pass";
import Profile from "./profile/profile";
function Main() {
  return (
    <main className={s.wrapper}>
      <div>
        <Routes>
          <Route path="/authorization/*" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route
            path="/authorization/change_password"
            element={<Changepass />}
          />
          <Route path="/" element={<General />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
