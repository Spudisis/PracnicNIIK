import s from "./logoname.module.css";
import { NavLink } from "react-router-dom";

function Logoname() {
  let logo;
  let text;
  let heigth;
  let k;
  let wrapper;

  const load = function () {
    logo = document.querySelector("#logoMain");
    text = document.querySelector("#textLogo");
    wrapper = document.querySelector("#wrapper");
    k = wrapper.scrollHeight;
  };

  window.addEventListener("scroll", function () {
    if (text == null || logo == null) {
      load();
    }
    heigth = window.pageYOffset;
    heigth > k ? add() : del();
  });

  const add = function () {
    logo.classList.remove(s.logo);
    logo.classList.add(s.logo__change);
    text.classList.remove(s.text);
    text.classList.add(s.text__change);
  };

  const del = function () {
    logo.classList.remove(s.logo__change);
    logo.classList.add(s.logo);
    text.classList.remove(s.text__change);
    text.classList.add(s.text);
  };

  return (
    <NavLink to="/">
      <div className={s.wrapper}>
        <div className={s.logoCenter}>
          <img
            id="logoMain"
            className={s.logo}
            src="./img/Logo.png"
            alt="logo"
          />

          <h1 className={s.text} id="textLogo">
            Научно-исследовательский и проектный институт карбамида
          </h1>
        </div>
      </div>
    </NavLink>
  );
}

export default Logoname;
