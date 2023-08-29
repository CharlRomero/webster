import { useState } from "react";

import { useFetch } from "../util/useFetch";
import { Party } from "../components/Party";

const apiURL = import.meta.env.VITE_API;

export const Home = () => {
  const provinces = useFetch(`${apiURL}province`);
  const [id, setId] = useState(1);
  const suffrages = useFetch(`${apiURL}suffrage/${id}`);

  const handleProvince = (event) => {
    setId(event.target.value);
  };
  return (
    <section className="Home">
      <section className="Home-combobox">
        <label htmlFor="province" className="Home-combobox--label">
          Seleccione una provincia:
        </label>
        <select
          id="province"
          className="Home-combobox--select"
          onChange={handleProvince}
        >
          {provinces.map((province, key) => (
            <option key={key} value={province.PRO_ID} className="Home-combobox--option">
              {province.PRO_NAME}
            </option>
          ))}
        </select>
      </section>
      <section className="Home-partys">
        {suffrages.map((suffrage, key) => (
          <Party name={suffrage.PAR_NAME} vote={suffrage.SUF_VOTE} key={key} />
        ))}
      </section>
    </section>
  );
};
