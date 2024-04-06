import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
        const exactMatch = data.find(
          (country) => country.name.common.toLowerCase() === name.toLowerCase()
        );
        setCountry(exactMatch);
      })
      .catch((error) => console.error(error));
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-9xl">{country.name.common}</h2>
      <p>Additional info here...</p>
    </div>
  );
};

export default CountryDetail;
