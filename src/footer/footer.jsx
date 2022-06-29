import Logoname from "../header/logoName/logoname";
import s from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={s.wrapper}>
        <div className={s.top_info}>
          <Logoname />
          <div className={s.link}>
            <p>Почта: example141@yandex.ru</p>
            <p>Телефон: 8 500 555 35-35</p>
          </div>
        </div>
        <hr />
        <div className={s.info}>
          <p>
            &copy;1952-2022 АО "НИИК" Член международных ассоциаций. Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
