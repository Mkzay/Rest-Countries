import Data from "../Components/Data";
import Head from "../Components/Head";
import Search from "../Components/Search";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Head />
      <Search />
      <Data />
    </div>
  );
};

export default Home;
