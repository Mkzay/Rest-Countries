import Data from "../Components/Data";
import Head from "../Components/Head";
import Search from "../Components/Search";

import PropTypes from "prop-types";

const Home = ({ handleClick }) => {
  return (
    <div className="transition-all duration-500 flex flex-col gap-8  dark:bg-veryDarkBlue">
      <Head themeSwitcher={handleClick} />
      <Search />
      <Data />
    </div>
  );
};

Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Home;
