import Auth from "./auth/auth";
import s from "./header.module.css";
import Logoname from "./logoName/logoname";
import React, { useEffect } from "react";

function Header() {
  let heigth;

  window.addEventListener("scroll", function () {
    heigth = window.pageYOffset;
    if (heigth > 150) {
      add();
    } else {
      del();
    }
  });

  function add() {
    const header = document.querySelector("#header");
    header.classList.add(s.header__fixed);
  }
  function del() {
    const header = document.querySelector("#header");
    header.classList.remove(s.header__fixed);
  }

  return (
    <header id="header" className={s.header__main}>
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
