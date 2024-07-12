import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[70px] bg-[#7B3F00] flex items-center justify-between px-10">
      <Link to="/">
        <img src="/file.png" height="200px" width="200px" alt="" />
      </Link>
      <Link to="/login">
      <button className="bg-[#1E1E1E] p-[10px] text-gray-300  border-none w-[125px]">
          Register/Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
