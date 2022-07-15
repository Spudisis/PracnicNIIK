import { useEffect } from "react";

function DetailRowView({ person, data }) {
  function dataTableRender() {
    let div = "";
    let personDiv = document.querySelector("#person");
    Object.values(person).forEach((value, n) => {
      div += "<input value='" + value + "'></input>";
    });
    return (personDiv.innerHTML = div);
  }
  useEffect(() => {
    dataTableRender();
  }, []);
  return (
    <div>
      <button>изменить</button>
      <div id="person"></div>
    </div>
  );
}

export default DetailRowView;
