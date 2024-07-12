const Footer = () => {
  return (
    <div className="h-[150px] bg-[#7B3F00] flex items-center justify-between p-[30px]">
      <div className="flex flex-col">
      <img src="/file.png" height="200px" width="200px" alt="" />
        <span className="w-[70%] font-serif ">
          We understand that your parcels carry more than just items , they carry
          your trust. Committed to excellence !!
        </span>
      </div>
      <div className="flex flex-col">
        <span>Designed by <span className="text-rose-950 font-bold">Sangram</span></span>
        <span>&copy; copyright 2024</span>
      </div>
    </div>
  );
};

export default Footer;
