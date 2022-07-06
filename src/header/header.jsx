import Auth from "./auth/auth";
import s from "./header.module.css";
import a from "./auth/auth.module.css";
import Logoname from "./logoName/logoname";

function Header() {
  let heigth;
  let header;
  let wrapper;
  let arrow;
  let k;

  const load = function () {
    header = document.querySelector("#header");
    wrapper = document.querySelector("#wrapper");
    arrow = document.querySelector("#arrow");
    k = wrapper.scrollHeight;
    console.log(k);
  };
  function top() {
    arrow.onclick = () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  }

  window.addEventListener("scroll", function () {
    if (header == null || wrapper == null || arrow == null) {
      load();
      top();
    }
    heigth = window.pageYOffset;
    heigth > k + 150 ? add() : del();
  });

  function add() {
    header.classList.add(s.header__fixed);
    wrapper.classList.add(s.wrapper__change);
    wrapper.classList.remove(s.wrapper);
    arrow.classList.add(a.activeBlockArrow);
    arrow.classList.remove(a.blockArrow);
  }
  function del() {
    header.classList.remove(s.header__fixed);
    wrapper.classList.remove(s.wrapper__change);
    wrapper.classList.add(s.wrapper);
    arrow.classList.remove(a.activeBlockArrow);
    arrow.classList.add(a.blockArrow);
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
