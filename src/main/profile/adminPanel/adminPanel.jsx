import s from "./adminPanel.module.css";
import jsonMas from "./jsonMas.json";
import { useState, useEffect } from "react";
function Adminpanel() {
  let newMasJson = [];
  for (let k in jsonMas) {
    let v = jsonMas[k];
    newMasJson.push(v);
  }

  const [n, nextPage] = useState(0);
  const [smallData, setSmallData] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSmallData(newMasJson);
    console.log("useEffect");
  }, []);

  const sortData = (field) => {
    const copyData = smallData.concat();
    let sortData;
    if (directionSort) {
      sortData = copyData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    } else {
      sortData = copyData.reverse((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    }
    setSmallData(sortData);
    setDirectionSort(!directionSort);
  };

  let lengthJson = smallData.length;
  let countPages = Math.ceil(lengthJson / 13);
  let DisplayData = smallData.slice(n, n + 13).map((info, n) => {
    return (
      <tr key={n}>
        <td>{info.ID}</td>
        <td>{info.Link}</td>
        <td>{info.Topic}</td>
        <td>{info.SiteID}</td>
        <td>{info.Weight}</td>
      </tr>
    );
  });

  return (
    <div className={s.wrapper}>
      <div className={s.data}>
        <table className={s.table_dark}>
          <thead>
            <tr>
              <th
                onClick={() => {
                  sortData("ID");
                }}
              >
                ID
              </th>
              <th
                onClick={() => {
                  sortData("Link");
                }}
              >
                Link
              </th>
              <th
                onClick={() => {
                  sortData("Topic");
                }}
              >
                Topic
              </th>
              <th
                onClick={() => {
                  sortData("SiteID");
                }}
              >
                SiteID
              </th>
              <th
                onClick={() => {
                  sortData("Weight");
                }}
              >
                Weight
              </th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
        <div className={s.buttons}>
          <div>
            {page}/{countPages}
          </div>
          <input type="text" placeholder="Поиск" id="inputSearch" />

          <button
            className={s.button}
            onClick={() => (n > 0 ? nextPage(n - 13) & setPage(page - 1) : 1)}
          >
            Назад
          </button>
          <button
            className={s.button}
            onClick={() =>
              lengthJson > n + 15 ? nextPage(n + 13) & setPage(page + 1) : n
            }
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
