import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 font-Nun md:flex-row md:flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-3 h-full w-11/12 shadow-2xl md:w-80 lg:w-72 md:h-[26rem] dark:shadow-2xl"
        >
          <Link to={`/CountryDetails/${item.name.common}`}>
            <img
              className="w-96 h-44"
              src={item.flags.svg}
              alt={item.name.common}
            />
            <div className="flex flex-col gap-2 py-5 px-4">
              <h2 className="font-extrabold text-2xl dark:text-white">
                {item.name.common}
              </h2>
              <p className="font-semibold text-xl dark:text-white">
                Population:{" "}
                <span className="font-light dark:text-darkGray">
                  {item.population}
                </span>
              </p>
              <p className="font-semibold text-xl dark:text-white">
                Region:{" "}
                <span className="font-light dark:text-darkGray">
                  {item.region}
                </span>
              </p>
              <p className="font-semibold text-xl dark:text-white">
                Capital:{" "}
                <span className="font-light dark:text-darkGray">
                  {item.capital}
                </span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Data;
