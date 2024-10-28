import Cards from "../components/Cards";
import MonthDate from "../components/MonthDate";
import Navbar from "../components/Navbar";
import Revenue from "../components/Revenue/Revenue";

const Home = () => {
  return (
    <>
      <Navbar />
      <MonthDate />
      <Cards />
      <Revenue/>
    </>
  );
};

export default Home;
