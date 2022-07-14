import s from "../adminPanel/adminPanel.module.css";
import jsonMas from "../adminPanel/jsonMas.json";
import AdsSites from "../adminPanel/AdsSites_sample.json";
import nbb from "../adminPanel/nbbb.json";
import table4 from "../adminPanel/table4.json";
import React, { useState, useEffect } from "react";
import { Component } from "react";
import Loader from "../adminPanel/loader.jsx";
import Table from "../adminPanel/table";
import DetailRowView from "../adminPanel/DetailRowView.jsx";
import _, { clone, forEach } from "lodash";
import ReactPaginate from "react-paginate";
import TableSearch from "../adminPanel/TableSearch";
import AddRow from "./addNewRow";
import { data } from "jquery";
class Table1 extends Component {
  state = {
    isModeSelected: false,
    isLoading: true,
    data: [],
    sort: "asc",
    sortField: "",
    search: "",
    row: null,
    currentPage: 0,
  };

  async componentDidMount() {
    let respons = await fetch("http://jsonplaceholder.typicode.com/todos/");
    let data = await respons.json();

    this.setState({
      isLoading: false,
      data,
    });
  }

  onSort = (sortField) => {
    const clonedData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(clonedData, sortField, sort);

    this.setState({
      data: data,
      sort: sort,
      sortField: sortField,
    });
  };
  onRowSelect = (row) => {
    this.setState({ row: row });
  };

  pageChangeHandler = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  searchHandler = (search) => {
    this.setState({ search, currentPage: 0 });
  };
  getFilteredData() {
    const { data, search } = this.state;
    let n = data.filter((item) => {
      return item["title"].toLowerCase().includes(search.toLowerCase());
    });
    console.log(n);
    if (!search || n.length == 0) {
      return data;
    }
    return n;
  }

  render() {
    const filteredData = this.getFilteredData();
    const pageSize = 13;
    const countPage = Math.ceil(filteredData.length / pageSize);
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className={s.wrapper}>
        <div className={s.data}>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <React.Fragment>
              <TableSearch onSearch={this.searchHandler} />
              <Table
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
              />
            </React.Fragment>
          )}
        </div>
        <div className={s.func}>
          {this.state.data.length > pageSize ? (
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={this.pageChangeHandler}
              pageRangeDisplayed={5}
              pageCount={countPage}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName={s.pagination}
              pageClassName={s.page_item}
              pageLinkClassName={s.pageLink}
              activeClassName={s.active}
              forcePage={this.state.currentPage}
            />
          ) : null}

          <div className={s.buttons}></div>
        </div>
        {this.state.row ? (
          <DetailRowView person={this.state.row} data={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default Table1;
