import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center bg-[#7B3F00] justify-between h-[70px]">
      <img
        src="/file.png"
        alt=""
        height={150}
        width={150}
        className="text-white"
      />

      <Link to="/login">
      <span className="mr-[20px] text-[18px] cursor-pointer">Logout</span>
      </Link>
    </div>
  );
};

export default Navbar;
