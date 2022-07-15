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
  const [ModeSelected, setModeSelected] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("");
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let respons = await fetch(
        "https://jsonplaceholder.typicode.com/comments/"
      );
      let data = await respons.json();
      setIsLoading(false);
      setData(data);
    }
    fetchData();
  }, []);

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
      return item["body"].toLowerCase().includes(search.toLowerCase());
    });
    if (!search || n.length == 0) {
      return data;
    }
    return n;
  };
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "DELETE",
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
  const onAdd = async (postId, id, name, email, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments`, {
      method: "POST",
      body: JSON.stringify({
        postId: postId,
        id: id,
        name: name,
        email: email,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData((elem) => [...elem, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOnSubmitAdd = (e) => {
    e.preventDefault();
    onAdd(
      e.target.postId.value,
      e.target.id.value,
      e.target.name.value,
      e.target.email.value,
      e.target.body.value
    );
  };
  const filteredData = getFilteredData();
  const pageSize = 13;
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
          <form onSubmit={handleOnSubmitAdd}>
            <input type="text" placeholder="postId" name="postId" />
            <input type="text" placeholder="id" name="id" />
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="body" name="body" />
            <button onSubmit={handleOnSubmitAdd}>Добавить</button>
          </form>
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

        <div className={s.buttons}>
          <TableSearch onSearch={searchHandler} />
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
      </div>
      {row ? <DetailRowView person={row} data={data} /> : null}
    </div>
  );
}

export default Table1;
