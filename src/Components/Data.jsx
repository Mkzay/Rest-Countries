import data from "./data.json";

const Data = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 font-Nun md:flex-row md:flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-3 h-full w-11/12 shadow-lg  md:w-72 md:h-[26rem]"
        >
          <img className="w-full h-44" src={item.flags.png} alt={item.name} />
          <div className="flex flex-col gap-2 py-5 px-4">
            <h2 className="font-extrabold text-2xl">{item.name}</h2>
            <p className="font-semibold text-xl">
              Population: <span className="font-light">{item.population}</span>
            </p>
            <p className="font-semibold text-xl">
              Region: <span className="font-light">{item.region}</span>
            </p>
            <p className="font-semibold text-xl">
              Capital: <span className="font-light">{item.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
