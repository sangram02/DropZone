import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import New_Navbar from "../components/New_Navbar";

const Login = () => {
  return (
    
    <div>
    <New_Navbar/>
      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300">
        <div>
          <img src="/hero.png" alt="" />
        </div>
        <div className="h-[450px] w-[450px] bg-[#6F4E37] rounded-md text-[black]">
          <input
            type="text"
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
            placeholder="Enter your email"
          />
          <div className="flex items-center text-[black]">
            <input
              type="password"
              className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] ml-[10%] outline-none"
              placeholder="Enter your password"
            />
          </div>

          <Link to="/">
            <button className="bg-[#1E1E1E] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]">
              Login
            </button>
          </Link>
        </div>
      </div>

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Login;
