const Footer = () => {
  return (
    <div className="flex items-center bg-[#7B3F00] justify-between h-[70px]">
      <img
        src="/file.png"
        alt=""
        height={150}
        width={150}
        className="text-white"
      />
      <ul className="m-[20px]">
        <li>Admin</li>
        <li>&copy; 2024</li>
      </ul>
    </div>
  );
};

export default Footer;
