import React from "react";
import s from "./table.module.css";
import { Component } from "react";
function Table(props) {
  let size = Object.keys(props.data[0]);
  function addCol() {
    let innerHtml = "";
    const rowNameCol = document.querySelector("#rowNameCol");
    for (let i = 0; i < size.length; i++) {
      innerHtml += "<th id ='th" + i + "'>" + size[i] + "</th>";
    }
    rowNameCol.innerHTML = innerHtml;
  }

  function addFuncCol() {
    for (let i = 0; i < size.length; i++) {
      document.querySelector("#th" + i).addEventListener("click", () => {
        props.onSort(size[i]);
      });
    }
  }

  function dataTableRender() {
    let tr = "";
    let tableBody = document.querySelector("#tableBody");
    Object.values(props.data).forEach((value, n) => {
      let td = "";
      Object.values(value).forEach((per) => {
        td += "<td>" + per + "</td>";
      });
      tr += "<tr id='key" + n + "'>" + td + "</tr>";
    });

    return (tableBody.innerHTML = tr);
  }
  function dataTableRowFunc() {
    for (let i = 0; i < props.data.length; i++) {
      document.querySelector("#key" + i).addEventListener("click", () => {
        props.onRowSelect(props.data[i]);
      });
    }
  }
  setTimeout(() => {
    addCol();
    addFuncCol();
    dataTableRender();
    dataTableRowFunc();
  }, 100);

  return (
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
  );
}

export default Table;
