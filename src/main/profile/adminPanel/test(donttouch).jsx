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
  let lengthJson;
  let countPages;
  var size;
  let tableBody;
  let selectedValue;

  let pagesTable;
  function changeSelect() {
    let selectBox = document.querySelector("#myselect");
    selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setTable(selectedValue);
    setSmallData(newMasJson);
  }

  let newMasJson = smallData;
  let data;
  let getTableFrom = async () => {
    let responst = await fetch("http://127.0.0.1:8000/project/");
    data = await responst.json();
    setSmallData(data);
  };
  useEffect(() => {
    let newMas = async () => {
      await getTableFrom();
    };
    newMas();
  }, [table, table]);
  useEffect(() => {
    onSearchSend();
  }, [searchValue]);

  useEffect(() => {
    if (smallData != null) {
      let renderTable = async () => {
        lengthJson = await smallData.length;
        countPages = await Math.ceil(lengthJson / 13);
        size = await Object.keys(newMasJson[0]);
        pagesTable = await document.querySelector("#countPages");
        pagesTable.innerHTML = await countPages;
        await addCol();
        await addFuncCol();
        await dataTableRender();
      };
      renderTable();
    }
  }, [smallData, n]);

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
    console.log(searchValue);
    if (!searchValue) {
      console.log(newMasJson);
      return setSmallData(newMasJson);
    }

    filtData = newMasJson.filter((el) => {
      return el["name"].toLowerCase().includes(searchValue.toLowerCase());
    });

    setSmallData(filtData);
  };

  function dataTableRender() {
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
            {page}/ <div id="countPages"></div>
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
              n > 0
                ? nextPage(n - 13) & setPage(page - 1) & dataTableRender()
                : 1
            }
          >
            Назад
          </button>
          <button
            className={s.button}
            onClick={() =>
              lengthJson > n + 13
                ? nextPage(n + 13) & setPage(page + 1) & dataTableRender()
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
