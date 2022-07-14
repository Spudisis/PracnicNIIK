import React from "react";

const AddRow = ({ onAdd }) => {
  const hanleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(
      e.target.userId.value,
      e.target.id.value,
      e.target.title.value,
      e.target.completed.value
    );
  };

  return (
    <div>
      <form onSubmit={hanleOnSubmit}>
        <h3>add</h3>
        <input type="text" name="userId" />
        <input type="text" name="id" />
        <input type="text" name="title" />
        <input type="text" name="completed" />
        <button onSubmit={hanleOnSubmit}>add</button>
      </form>
    </div>
  );
};
export default AddRow;
