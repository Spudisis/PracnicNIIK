function DetailRowView({ person }) {
  function dataTableRender() {
    let div = "";
    let personDiv = document.querySelector("#person");
    Object.values(person).forEach((value, n) => {
      div += "<div>" + value + "</div>";
    });
    return (personDiv.innerHTML = div);
  }
  setTimeout(() => {
    dataTableRender();
  }, 100);

  return <div id="person"></div>;
}

export default DetailRowView;
