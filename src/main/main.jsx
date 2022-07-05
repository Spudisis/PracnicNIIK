import Authorization from "./authorization/authorization";
import s from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import General from "./general/general";
import Registration from "./registration/registration";
function Main() {
  return (
    <main className={s.wrapper}>
      <div>
        <Routes>
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<General />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
