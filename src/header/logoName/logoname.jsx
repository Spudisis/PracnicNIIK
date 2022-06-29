import s from "./logoname.module.css";
function Logoname() {
  let logo;
  let text;
  let heigth;

  const load = function () {
    logo = document.querySelector("#logoMain");
    text = document.querySelector("#textLogo");
  };

  window.addEventListener("scroll", function () {
    if (text == null || logo == null) {
      load();
    }
    heigth = window.pageYOffset;
    heigth > 150 ? add() : del();
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
    <div className={s.wrapper}>
      <img id="logoMain" className={s.logo} src="./img/Logo.png" alt="logo" />

      <h1 className={s.text} id="textLogo">
        Научно-исследовательский и проектный институт карбамида
      </h1>
    </div>
  );
}

export default Logoname;
