// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Option from "./components/Option";
import Menu from "./components/Menu";
import Bags from "./components/Bags";
import Shoes from "./components/Shoes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Icon
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import { BagsData, MenuData, OptionData, ShoeData } from "./constant";

// Circle arrow Icon styled-component
const Circle = styled.div`
  background-color: #ececec;
  width: 3rem;
  height: 3rem;
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 50%;
  
`;

function App() {
  return (
    <div className='App'>
      {/* Navbar */}
      <div className='bg-[#FFF9F3]'>
        <Navbar />
      </div>

      {/* Hero */}
      <Hero />

      {/* Shoes */}
      <div className=' mt-[15%] mb-[2%] max-lg:mt-[22%]'>
        <Shoes />
      </div>

      {/* options */}
      <div className='flex w-[94%] max-w-7xl m-auto gap-16 mb-[2%]'>
        {OptionData.map((item) => {
          return <Option data={item} />;
        })}
      </div>


{/* Menu Heading */}
      <div className='w-[94%] max-w-7xl m-auto max-lg:mt-[5%]'>
        <h1 className='text-black text-[21px] font-semibold max-lg:text-[20.5px]'>
          Find things you'll love. Support independent sellers.
        </h1>
        <p className='text-slate-500 text-[16px] mb-5 max-lg:text-[15px]'>
          Only on polka.
        </p>
      </div>

{/* Menu */}
      <div className='grid grid-cols-8 max-md:grid-cols-4 w-[94%] max-w-7xl m-auto max-lg:ml-[2%] max-lg:mr-[2%] max-lg:space-x-0 max-lg:gap-4 relative'>
        <Circle className=' hover:bg-[#dad8d8] max-lg:hidden  absolute -left-16 top-3'>
          <MdOutlineArrowBackIosNew className='text-black text-xl cursor-pointer m-3.5' />
        </Circle>
        {MenuData.map((images) => {
          return <Menu Data={images} />;
        })}
        <Circle className='mb-3 hover:bg-[#dad8d8] max-lg:hidden absolute -right-16 top-3'>
          <MdOutlineArrowForwardIos className='text-black  text-xl cursor-pointer m-3.5' />
        </Circle>
      </div>



      <div className='w-[94%] max-w-7xl m-auto mt-8 max-lg:mt-[5%] relative'>
        <h1 className='text-black text-[21px] font-semibold max-lg:text-[20.5px] max-md:w-[50%] max-md:ml-[4%]'>
          Discover unique hand-picked items
        </h1>
        <div className='grid grid-cols-6 max-md:grid-cols-3 max-md:ml-[8%] space-x-8 mt-8 mb-10 max-lg:mt-[3%] max-lg:mr-0 max-lg:space-x-0 max-lg:gap-4'>
        <Circle className=' hover:bg-[#dad8d8] max-lg:hidden  absolute -left-16 top-24'>
          <MdOutlineArrowBackIosNew className='text-black text-xl cursor-pointer m-3.5' />
        </Circle>
          {BagsData.map((items) => {
            return <Bags Data={items} />;
          })}
            <Circle className='mb-3 hover:bg-[#dad8d8] max-lg:hidden absolute -right-16 top-24'>
          <MdOutlineArrowForwardIos className='text-black  text-xl cursor-pointer m-3.5' />
        </Circle>
        </div>
      </div>

            

      <div className='w-[94%] max-w-7xl m-auto grid grid-cols-6 max-md:grid-cols-3 max-md:space-x-0 max-md:ml-[10%] items-center space-x-[2.6rem] mt-[6rem] ml-[20rem] max-lg:ml-[2%] max-lg:mr-0 max-lg:space-x-5 max-md:w-[80%]'>
        {BagsData.map((items) => {
          return <Bags Data={items} />;
        })}
      </div>

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
