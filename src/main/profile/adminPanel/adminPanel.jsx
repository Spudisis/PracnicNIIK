import s from "./adminPanel.module.css";
import jsonMas from "./jsonMas.json";
import AdsSites from "./AdsSites_sample.json";
import { useState, useEffect } from "react";
function Adminpanel() {
  const [n, nextPage] = useState(0);
  const [smallData, setSmallData] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);
  const [page, setPage] = useState(1);
  const [table, setTable] = useState(0);
  let selectedValue;
  function changeSelect() {
    let selectBox = document.querySelector("#myselect");
    selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setTable(selectedValue);
    setSmallData(newMasJson);
  }

  let newMasJson = [];
  if (table == 0) {
    newMasJson = jsonMas;
  } else {
    newMasJson = AdsSites;
  }

  useEffect(() => {
    setSmallData(newMasJson);
    
  }, [table]);

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
  var size = Object.keys(newMasJson[0]);
  let DisplayData = smallData.slice(n, n + 13).map((info, n) => {
    if (table == 0) {
      return (
        <tr key={n}>
          <td>{info.ID}</td>
          <td>{info.SiteID}</td>
          <td>{info.Link}</td>
          <td>{info.Topic}</td>
          <td>{info.Weight}</td>
        </tr>
      );
    } else {
      return (
        <tr key={n}>
          <td>{info.ID}</td>
          <td>{info.SiteID}</td>
          <td>{info.Link}</td>
          <td>{info.AdsSite}</td>
          <td>{info.WhenAdd}</td>
        </tr>
      );
    }
  });
  // function addCol() {
  //   let innerHtml = "";
  //   const rowNameCol = document.querySelector("#rowNameCol");
  //   for (let i = 0; i < size.length; i++) {
  //     innerHtml += "<th>" + size[i] + "</th>";
  //   }
  //   rowNameCol.innerHTML = innerHtml;
  //   console.log(innerHtml);
  // }
  return (
    <div className={s.wrapper}>
      <div className={s.data}>
        <table className={s.table_dark}>
          <thead>
            <tr id="rowNameCol">
              <th
                onClick={() => {
                  sortData(size[0]);
                }}
              >
                {size[0]}
              </th>
              <th
                onClick={() => {
                  sortData(size[1]);
                }}
              >
                {size[1]}
              </th>
              <th
                onClick={() => {
                  sortData(size[2]);
                }}
              >
                {size[2]}
              </th>
              <th
                onClick={() => {
                  sortData(size[3]);
                }}
              >
                {size[3]}
              </th>
              <th
                onClick={() => {
                  sortData(size[4]);
                }}
              >
                {size[4]}
              </th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
        <div className={s.buttons}>
          <select name="tables" id="myselect" onChange={changeSelect}>
            <option value="0">table1</option>
            <option value="1">table2</option>
            <option value="2">table3</option>
            <option value="3">table4</option>
          </select>
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
