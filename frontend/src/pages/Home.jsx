import { useState } from "react";
import { useFetch } from "../util/useFetch";
import { Party } from "../components/Party";

const apiURL = import.meta.env.VITE_API;

export const Home = () => {
  const provinces = useFetch(`${apiURL}province`);
  const [id, setId] = useState(1);
  console.log(provinces);

  const handleProvince = (event) => {
    const selectedProvinceId = parseInt(event.target.value); // Convierte el valor en entero
    setId(selectedProvinceId);
  };

  // Encuentra la provincia seleccionada en el array de provinces
  const selectedProvince = provinces.find((province) => province.PRO_ID === id);

  // Accede a la propiedad PRO_CANDIDATE de la provincia seleccionada
  const proCandidate = selectedProvince ? selectedProvince.PRO_CANDIDATE : null;

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
            <option
              key={key}
              value={province.PRO_ID}
              className="Home-combobox--option"
            >
              {province.PRO_NAME}
            </option>
          ))}
        </select>
        {/* Muestra el valor de PRO_CANDIDATE */}
      {proCandidate !== null && (
        <p>Candidatos {proCandidate}</p>
      )}
      </section>
      <Party provinceId={id} numColumns={proCandidate} />
      
      
    </section>
  );
};
