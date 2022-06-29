import Auth from "./auth/auth";
import s from "./header.module.css";
import Logoname from "./logoName/logoname";

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
    const wrapper = document.querySelector("#wrapper");
    header.classList.add(s.header__fixed);
    wrapper.classList.add(s.wrapper__change);
    wrapper.classList.remove(s.wrapper);
  }
  function del() {
    const header = document.querySelector("#header");
    const wrapper = document.querySelector("#wrapper");
    header.classList.remove(s.header__fixed);
    wrapper.classList.remove(s.wrapper__change);
    wrapper.classList.add(s.wrapper);
  }

  return (
    <header id="header" className={s.header__main}>
      <div className={s.wrapper} id="wrapper">
        <div className={s.objects}>
          <Logoname />
          <Auth />
        </div>
      </div>
    </header>
  );
}

export default Header;
