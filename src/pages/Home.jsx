import Cards from "../components/Cards";
import CurrentOrder from "../components/CurrentOrder/CurrentOrder";
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
      <CurrentOrder/>
    </>
  );
};

export default Home;
