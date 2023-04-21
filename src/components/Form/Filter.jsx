import css from "components/Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "components/Redux/filterSlice.js";

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);

  const filterContacts = (e) => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };


  return (
    <label>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={filterContacts}
      />
    </label>
  );
};

export default Filter;