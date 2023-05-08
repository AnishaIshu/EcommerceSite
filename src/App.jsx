// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Option from "./components/Option";
import Menu from "./components/Menu";
import Bags from "./components/Bags";
import Shoes from "./components/Shoes";
import Contact from './components/Contact';
import Footer from './components/Footer';

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
  position: relative;
`;

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <div className='mt-[20rem] ml-[20rem] mb-8 flex space-x-12'>
        {OptionData.map((item) => {
          return <Option data={item} />;
        })}
      </div>

      <div className='ml-[20rem] mt-12 mb-5'>
        <h1 className='text-black text-lg font-semibold'>
          Find things you'll love. Support independent sellers.
        </h1>
        <p className='text-slate-500 text-sm mb-5'>Only on polka.</p>
      </div>

      <div className='flex space-x-10 ml-[14rem]'>
        <Circle className=' hover:bg-[#dad8d8]'>
          <MdOutlineArrowBackIosNew className='text-black absolute top-3.5 left-3.5 text-xl cursor-pointer' />
        </Circle>
        {MenuData.map((images) => {
          return <Menu Data={images} />;
        })}
        <Circle className='mb-3 hover:bg-[#dad8d8]'>
          <MdOutlineArrowForwardIos className='text-black absolute top-3.5 left-3.5 text-xl cursor-pointer' />
        </Circle>
      </div>

      <div>
        <h1 className='ml-[20rem] mt-12 text-lg font-semibold'>
          Discover unique hand-picked items
        </h1>
        <div className='flex items-center space-x-[2.6rem] mt-3 ml-[14rem]'>
          <Circle className=' hover:bg-[#dad8d8]'>
            <MdOutlineArrowBackIosNew className='text-black absolute top-3.5 left-3.5 text-xl cursor-pointer' />
          </Circle>
          {BagsData.map((items) => {
            return <Bags Data={items} />;
          })}
          <Circle className='mb-3 hover:bg-[#dad8d8]'>
            <MdOutlineArrowForwardIos className='text-black absolute top-3.5 left-3.5 text-xl cursor-pointer' />
          </Circle>
        </div>
      </div>

      <div className='flex space-x-14 ml-[19.8rem] mb-10 mt-14'>
        {ShoeData.map((img) => {
          return <Shoes Data={img} />;
        })}
      </div>

      <div className='flex items-center space-x-[2.6rem] mt-[6rem] ml-[20rem]'>
        {BagsData.map((items) => {
          return <Bags Data={items} />;
        })}
      </div>

      <Contact />

      <h6 className="bg-[#dad8d8] py-2 text-center text-sm cursor-pointer hover:underline">Commerce, is powered by 100% renewable electricity.</h6>

      <Footer />
    </div>
  );
}

export default App;
