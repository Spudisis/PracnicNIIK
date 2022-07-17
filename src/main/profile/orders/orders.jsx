import s from "./orders.module.css";
import { useEffect, useState } from "react";

function Orders() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let respons = await fetch("http://127.0.0.1:8000/cards/");
      let data = await respons.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      {data.map((element, id) => (
        <div className={s.projCard} key={id}>
          <img src={element["url"]} alt="img" className={s.imgProjCard} />
          <div className={s.nameProjCard}>{element["name"]}</div>
          <div className={s.textProjCard}>{element["discription"]}</div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
