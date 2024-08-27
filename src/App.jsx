import "./App.css";
import Mansorylogo from "./assets/mansorylogo.svg";

function Header() {
  return (
    <>
      <nav className="bg-[#2b2b2a] flex flex-wrap h-[3.5rem] justify-between">
        <div className="left-menu "></div>
        <div className="logo-container w-[210px] py-[13px] h-[57.6px] flex align-middle ">
          <img src={Mansorylogo} alt="Logo" className="fill-white"></img>
        </div>
        <div className="right-menu "></div>
      </nav>
    </>
  );
}

export default Header;
