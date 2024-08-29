import "./Headermain.Module.css";
import Mansorylogo from "./assets/mansorylogo.svg";

function Headermain() {
  const logoClick = () => {
    window.location.href = "https://www.mansory.com/";
  };
  const atelierButtonClick = () => {
    window.location.href = "https://www.mansory.com/mansory-atelier";
  };
  const carsButtonClick = () => {
    window.location.href = "https://www.mansory.com/manufacturers";
  };
  const carsforsaleButtonClick = () => {
    window.location.href = "https://www.mansory.com/cars-for-sale";
  };
  const newsButtonClick = () => {
    window.location.href = "https://www.mansory.com/news";
  };
  const shopButtonClick = () => {
    window.location.href = "https://www.mansory.com/shop";
  };
  const menuButtonClick = () => {
    window.location.href = "";
  };
  return (
    <>
      <nav className="bg-[#2b2b2a] flex flex-wrap h-[3.5rem] justify-between px-2 transition-all">
        <div className="left-menu align-middle flex flex-wrap gap-1 ">
          <button
            className=" text-white px-4 py-2 "
            onClick={atelierButtonClick}
          >
            MANSORY ATELIER
          </button>
          <button className=" text-white px-4 py-2  " onClick={carsButtonClick}>
            CARS
          </button>
          <button
            className=" text-white pl-4 py-2  "
            onClick={carsforsaleButtonClick}
          >
            CARS FOR SALE
          </button>
        </div>
        <div className="logo-container w-[210px] py-[13px] h-[57.6px] flex align-middle ">
          <img src={Mansorylogo} alt="Logo" className="Headerlogo cursor-pointer" onClick={logoClick}>
          </img>
        </div>
        <div className="right-menu flex flex-wrap align-middle  gap-1 pl-20">
          <button
            className=" text-white px-4 py-2 rounded"
            onClick={newsButtonClick}
          >
            NEWS
          </button>
          <button
            className=" text-white px-4 py-2 rounded"
            onClick={shopButtonClick}
          >
            SHOP
          </button>
          <button className=" text-white px-4 py-2 rounded">MENU</button>
        </div>
      </nav>
      
    </>
  );
}

export default Headermain;
