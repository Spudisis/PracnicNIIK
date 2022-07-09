import s from "./adminPanel.module.css";
import jsonMas from "./jsonMas.json";
import AdsSites from "./AdsSites_sample.json";
import nbb from "./nbbb.json";
import table4 from "./table4.json";
import { useState, useEffect } from "react";

function Adminpanel() {
  const [n, nextPage] = useState(0);
  const [smallData, setSmallData] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);
  const [page, setPage] = useState(1);
  const [table, setTable] = useState(0);
  const [searchValue, setSearchValue] = useState("");

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
  } else if (table == 1) {
    newMasJson = AdsSites;
  } else if (table == 2) {
    newMasJson = nbb;
  } else if (table == 3) {
    newMasJson = table4;
  }

  useEffect(() => {
    function newMas() {
      setSmallData(newMasJson);
      onSearchSend();
    }
    newMas();
  }, [table, searchValue]);

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

  const onSearchSend = () => {
    let filtData;
    if (searchValue) {
      filtData = smallData.filter((el) => {
        return el["Topic"].toLowerCase().includes(searchValue.toLowerCase());
      });
    }
    if (!searchValue) {
      return setSmallData(newMasJson);
    }
    setSmallData(filtData);
  };

  let lengthJson = smallData.length;
  let countPages = Math.ceil(lengthJson / 13);
  var size = Object.keys(newMasJson[0]);

  let tableBody;
  function dataTable() {
    addCol();
    let tr = "";
    tableBody = document.querySelector("#tableBody");
    Object.values(smallData)
      .slice(n, n + 13)
      .forEach((value) => {
        let td = "";
        Object.values(value).forEach((per) => {
          td += "<td>" + per + "</td>";
        });
        tr += "<tr>" + td + "</tr>";
      });

    return (tableBody.innerHTML = tr);
  }

  function addCol() {
    let innerHtml = "";
    const rowNameCol = document.querySelector("#rowNameCol");
    for (let i = 0; i < size.length; i++) {
      innerHtml += "<th id ='th" + i + "'>" + size[i] + "</th>";
    }
    rowNameCol.innerHTML = innerHtml;
    addFuncCol();
  }
  function addFuncCol() {
    for (let i = 0; i < size.length; i++) {
      document.querySelector("#th" + i).addEventListener("click", () => {
        sortData(size[i]);
      });
    }
  }

  setTimeout(() => {
    dataTable();
  }, 10);
  return (
    <div className={s.wrapper}>
      <div className={s.data}>
        <table className={s.table_dark}>
          <thead>
            <tr id="rowNameCol">
              <th></th>
            </tr>
          </thead>
          <tbody id="tableBody">
            <tr></tr>
          </tbody>
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
          <div>
            <input
              type="text"
              placeholder="Поиск"
              id="inputSearch"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>

          <button
            className={s.button}
            onClick={() =>
              n > 0 ? nextPage(n - 13) & setPage(page - 1) & dataTable() : 1
            }
          >
            Назад
          </button>
          <button
            className={s.button}
            onClick={() =>
              lengthJson > n + 15
                ? nextPage(n + 13) & setPage(page + 1) & dataTable()
                : n
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
