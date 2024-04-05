import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Head = () => {
  return (
    <div className="flex items-center justify-between py-6 px-3 font-Nun text-veryDarkBlue dark:text-white bg-white shadow-md">
      <div>
        <h1 className="text-lg font-extrabold">Where in the world?</h1>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faMoon} />
        <h2 className="text-base font-semibold">Dark Mode</h2>
      </div>
    </div>
  );
};

export default Head;
