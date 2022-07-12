import s from "./TableSearch.module.css";
import { useState } from "react";
import { set } from "lodash";
export default (props) => {
  const [value, setValue] = useState("");
  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={s.input}>
      <input
        type="text"
        className={s.form}
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={value}
        onChange={valueChangeHandler}
      />
      <button
        className={s.btn}
        type="button"
        id="button-addon2"
        onClick={() => props.onSearch(value)}
      >
        Button
      </button>
    </div>
  );
};
