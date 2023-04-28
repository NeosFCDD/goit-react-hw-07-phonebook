import css from "components/Form/Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "components/Redux/filterSlice.js";
import { getFilter } from "components/Redux/selectors.js";

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const filterContacts = (e) => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };


  return (
    <>  
        <h2>Contacts</h2>
        <label>
          Find contact name
          <input
            className={css.input}
            type="text"
            name="filter"
            value={filter}
            onChange={filterContacts}
          />
        </label>
    </> 
  );
};

export default Filter;