import s from "../adminPanel/adminPanel.module.css";
import jsonMas from "../adminPanel/jsonMas.json";
import AdsSites from "../adminPanel/AdsSites_sample.json";
import nbb from "../adminPanel/nbbb.json";
import table4 from "../adminPanel/table4.json";
import { React, useState, useEffect } from "react";
import Loader from "../adminPanel/loader.jsx";
import Table from "../adminPanel/table";
import DetailRowView from "../adminPanel/DetailRowView.jsx";
import _, { clone, forEach } from "lodash";
import ReactPaginate from "react-paginate";
import TableSearch from "../adminPanel/TableSearch";
import userEvent from "@testing-library/user-event";

function Table1() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("");
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setId] = useState(null);
  const [countRow, setCountRow] = useState(15);

  useEffect(() => {
    async function fetchData() {
      let respons = await fetch("http://127.0.0.1:8000/employee/");
      let data = await respons.json();
      setIsLoading(false);
      setData(data);
    }
    fetchData();
  }, [countRow]);

  const onSort = (sortField) => {
    const clonedData = data.concat();
    const sorted = sort === "asc" ? "desc" : "asc";
    const datad = _.orderBy(clonedData, sortField, sorted);
    setData(datad);
    setSort(sorted);
    setSortField(sortField);
  };
  const onRowSelect = (row) => {
    setRow(row);
  };

  const pageChangeHandler = ({ selected }) => {
    setCurrentPage(selected);
  };

  const searchHandler = (search) => {
    setSearch(search);
    setCurrentPage(0);
  };
  const getFilteredData = () => {
    let n = data.filter((item) => {
      return (
        data
        //item["em_fio"].toLowerCase().includes(search.toLowerCase()) ||
        //item["em_phone"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!search || n.length == 0) {
      return data;
    }
    return n;
  };
  const onDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/employee/`, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })

      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setData(
            data.filter((mes) => {
              console.log(mes.id !== id);
              return mes.id != id;
            })
          );
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };
  const handleDelete = () => {
    console.log(id);
    onDelete(id);
  };


  const onAdd = async (em_fio, em_phone) => {
    await fetch(`http://127.0.0.1:8000/employee/`, {
      method: "POST",
      body: JSON.stringify({
        em_fio: em_fio,
        em_phone: em_phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        console.log(res);
          return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleOnSubmitAdd = (e) => {
    e.preventDefault();
    onAdd(e.target.em_fio.value, e.target.em_phone.value);
    e.target.em_fio.value = "";

    e.target.em_phone.value = "";
  };

  const filteredData = getFilteredData();
  const pageSize = countRow;
  const countPage = Math.ceil(filteredData.length / pageSize);
  const displayData = _.chunk(filteredData, pageSize)[currentPage];

  return (
    <div className={s.wrapper}>
      <div className={s.data}>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Table
              data={displayData}
              onSort={onSort}
              sort={sort}
              sortField={sortField}
              onRowSelect={onRowSelect}
            />
          </div>
        )}
      </div>
      <div className={s.func}>
        <div className={s.addStr}>
          <form onSubmit={handleOnSubmitAdd} className={s.formAddMain}>
            <input
              type="text"
              placeholder="ФИО"
              name="em_fio"
              className={s.formAdd}
            />

            <input
              type="number"
              placeholder="Номер телефона"
              name="em_phone"
              className={s.formAdd}
            />

            <button className={s.btn} onSubmit={handleOnSubmitAdd}>
              Добавить
            </button>
          </form>
        </div>

        <div className={s.buttons}>
          <TableSearch onSearch={searchHandler} />
          <select
            defaultValue="15"
            name="SelectCountRow"
            className={s.formAdd}
            onChange={(e) => setCountRow(e.target.value)}
          >
            <option value="10">10 строк</option>
            <option value="15">15 строк</option>
            <option value="20">20 строк</option>
            <option value="30">30 строк</option>
          </select>
          <div>
            <button onClick={handleDelete} className={s.btn}>
              удалить
            </button>
            <input
              type="text"
              placeholder="Введите id для удаления"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>
        {data.length > pageSize ? (
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={pageChangeHandler}
            pageRangeDisplayed={5}
            pageCount={countPage}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={s.pagination}
            pageClassName={s.page_item}
            pageLinkClassName={s.pageLink}
            activeClassName={s.active}
            forcePage={currentPage}
          />
        ) : null}
      </div>
      {row ? <DetailRowView person={row} data={data} /> : null}
    </div>
  );
}

export default Table1;
