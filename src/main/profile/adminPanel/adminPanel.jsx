import s from "./adminPanel.module.css";
import jsonMas from "./jsonMas.json";
import AdsSites from "./AdsSites_sample.json";
import nbb from "./nbbb.json";
import table4 from "./table4.json";
import React, { useState, useEffect } from "react";
import { Component } from "react";
import Loader from "./loader.jsx";
import Table from "./table";
import DetailRowView from "./DetailRowView.jsx";
import _, { clone, forEach } from "lodash";
import ReactPaginate from "react-paginate";
import TableSearch from "./TableSearch";
class Adminpanel extends Component {
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
    let respons = await fetch("http://127.0.0.1:8000/project/");
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
    console.log(row);

    this.setState({ row: row });
  };

  pageChangeHandler = ({ selected }) => {
    console.log("click");
    this.setState({ currentPage: selected });
  };

  searchHandler = (search) => {
    this.setState({ search, currentPage: 0 });
  };
  getFilteredData() {
    const { data, search } = this.state;
    console.log(search);
    if (!search) {
      return data;
    }
    return data.filter((item) => {
      return item["Category"].toLowerCase().includes(search.toLowerCase());
    });
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

          <div className={s.buttons}>
            <div></div>
            <div></div>
          </div>
        </div>
        {this.state.row ? <DetailRowView person={this.state.row} /> : null}
      </div>
    );
  }
}

export default Adminpanel;
