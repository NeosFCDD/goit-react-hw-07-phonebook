import css from "components/Form/Form.module.css";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css["loader-container"]}>
      <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
        />
    </div>
  );
};

export default Loader;