import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[69vh] flex items-center p-[50px] text-gray-300">
        <h2 className="text-3xl font-bold w-[50%] p-[30px] font-mono">Delivery So Fast,<br></br> Your Neighbors Will Be Jealous!!!</h2>
        <img src="/delivery.gif" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
