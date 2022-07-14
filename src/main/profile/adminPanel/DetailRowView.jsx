function DetailRowView({ person, data }) {
  function dataTableRender() {
    let div = "";
    let personDiv = document.querySelector("#person");
    Object.values(person).forEach((value, n) => {
      div += "<input value='" + value + "'></input>";
    });
    return (personDiv.innerHTML = div);
  }
  setTimeout(() => {
    dataTableRender();
  }, 100);

  return (
    <div>
      <div id="person"></div>
      <button>delete</button>
      <button>update</button>
    </div>
  );
}

export default DetailRowView;
