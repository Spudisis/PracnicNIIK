import Auth from "./auth/auth";
import s from "./header.module.css";
import Logoname from "./logoName/logoname";

function Header() {
  let heigth;
  let header;
  let wrapper;
  let k;
  const load = function () {
    header = document.querySelector("#header");
    wrapper = document.querySelector("#wrapper");
    k = wrapper.scrollHeight;
  };

  window.addEventListener("scroll", function () {
    if (header == null || wrapper == null) {
      load();
    }
    heigth = window.pageYOffset;
    heigth > k ? add() : del();
  });

  function add() {
    header.classList.add(s.header__fixed);
    wrapper.classList.add(s.wrapper__change);
    wrapper.classList.remove(s.wrapper);
  }
  function del() {
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
