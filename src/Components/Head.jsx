import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import PropTypes from "prop-types";

const Head = ({ themeSwitcher }) => {
  return (
    <div className="flex items-center justify-between py-6 px-3 font-Nun text-veryDarkBlue dark:text-white dark:bg-darkBlue bg-white shadow-lg md:px-10">
      <div>
        <h1 className="text-lg font-extrabold">Where in the world?</h1>
      </div>
      <button className="flex items-center gap-2" onClick={themeSwitcher}>
        <FontAwesomeIcon className="dark:hidden" icon={faMoon} />
        <FontAwesomeIcon className="hidden dark:block" icon={faSun} />
        <h2 className="text-base font-semibold dark:text-white dark:hidden">
          Dark Mode
        </h2>
        <h2 className="text-base font-semibold dark:text-white hidden dark:block">
          Light Mode
        </h2>
      </button>
    </div>
  );
};

Head.propTypes = {
  themeSwitcher: PropTypes.func.isRequired,
};

export default Head;
