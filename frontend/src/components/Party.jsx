import React, { useEffect, useState } from "react";


const apiURL = import.meta.env.VITE_API;



const divideHighestByTwo = (votes) => {
  const highestVote = Math.max(...votes);
  return votes.map(vote => (vote === highestVote) ? Math.floor(vote / 2) : vote);
};

export const Party = ({ provinceId, numColumns }) => {

  console.log(numColumns);
  
  const [suffrages, setSuffrages] = useState([]);

  useEffect(() => {
    const fetchSuffrages = async () => {
      try {
        const response = await fetch(`${apiURL}suffrage/${provinceId}`);
        const data = await response.json();
        setSuffrages(data);
        
      } catch (error) {
        console.error("Error al obtener los votos:", error);
      }
    };

    fetchSuffrages();
  }, [provinceId]);

  const createColumns = () => {
    const columns = [];
    let prevColumn = suffrages.map(s => s.SUF_VOTE);

    for (let i = 0; i < numColumns; i++) {
      const column = (i === 0) ? prevColumn : divideHighestByTwo(prevColumn);
      columns.push(column);
      prevColumn = column;
    }

    return columns;
  };

  const columns = createColumns();

  return (
    <section className="Home-partys">
      <div className="Grid-container">
      <div className="Grid-header">
          {/*<div className="Grid-cell header">Nombre de la Lista</div>
          <div className="Grid-cell header">Votos</div>
          {Array.from({ length: numColumns }, (_, i) => (
            <div className="Grid-cell header" key={i}>
              Columna {i + 1}
            </div>
          ))}*/}
        </div>
        {suffrages.map((suffrage, rowIndex) => (
          <div className="Grid-row" key={rowIndex}>
            <div className="Grid-cell">
              {suffrage.PAR_NAME}
            </div>
            <div className="Grid-cell">
              Votos:
              {suffrage.SUF_VOTE}
            </div>
            {columns.map((column, columnIndex) => {
              const cellValue = column[rowIndex];
              const maxValue = Math.max(...column);
              const isMaxValue = cellValue === maxValue;
              return (
                <div className={`Grid-cell ${isMaxValue ? "max-value" : ""}`} key={columnIndex}>
                  {cellValue}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};
