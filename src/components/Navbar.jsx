import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { BiShoppingBag } from "react-icons/bi";
import { useState } from "react";
import React from "react";
import { HiMenuAlt2 } from 'react-icons/hi';



  const Btn = styled.button`
    background-color: #eb6d20;
    color: #fff;
    font-size: 15px;
    padding: 5px 20px 5px 20px;
    border-radius: 20px;
    width: 4.5rem;
    height: 2rem;
    @media (max-width: 1024px) {
      padding: 0 18px 0 18px;
      margin-left: 10rem;
    }
    `;

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
      setShowNav(!showNav);
      console.log(showNav)
    }
  return (
    <nav className=' w-[94%] max-w-7xl m-auto -max-md:pd-20 max-lg:h-32 max-md:h-36 max-sm:h-32'>
      <div className='flex pt-5 space-x-4 items-center max-lg:space-x-4'>
        <img
          className='max-lg:-mt-14 max-md:-mt-16'
          src='/images/Logo.png'
          alt='logo'
          
        />
        <div className="flex space-x-1 w-[75%] max-lg:flex max-lg:flex-col max-lg:text-right max-md:mt-5 max-md:mb-3">
        <div className='flex w-[73%] bg-white rounded-3xl py-1 text-sm max-lg:text-right max-lg:order-2 max-lg:w-[100%] max-lg:mt-4 max-sm:'>
          <div className='bg-[#F5F6F8] px-3 pl-5 text-base font-normal rounded-3xl flex items-center gap-1 w-[12rem] cursor-pointer hover:bg-[#dddddd] max-lg:w-[20%] max-lg:text-[14.5px] max-lg:px-4 max-md:w-[32%] max-md:pl-4 max-md:ml-1 max-sm:hidden'>
            All categories
            <BiChevronDown className='text-xl cursor-pointer' />
          </div>
          <input
            type='text'
            name='Search'
            placeholder='Search anything'
            className='text-center w-[40rem] ml-4 rounded-3xl max-lg:w-[70%] max-sm:w-[95%]'
          />
          <CiSearch className='text-3xl cursor-pointer max-lg:text-3xl max-lg:pt-0 max-lg:pl-1 max-lg:mr-2' />
          </div>

        <div className="flex space-x-5 max-lg:order-1 max-lg:place-self-end">
        <Btn className='hover:bg-[#d96117] max-sm:mr-15 max-sm:-mt-3'>Help</Btn>
        <div className='flex items-center gap-2 text-[15.9px] font-[500] cursor-pointer hover:underline max-lg:gap-1 max-lg:pl-2 max-lg:pr-5'>
          <RxPerson className='text-lg hover:text-red-400 cursor-pointer max-sm:-mt-3  max-sm:-mr-10' />
         <h1 className="max-sm:hidden">Account</h1> 
        </div>
        <div className='flex items-center font-[500] gap-2 text-[15.9px] cursor-pointer hover:underline  max-lg:pl-0 max-sm:-mt-3 '>
          <BiShoppingBag className='text-lg hover:text-red-400 cursor-pointer max-sm:text-xl max-sm:mr-1' />
          <h1 className="max-sm:hidden">Shopping</h1> 
        </div>
        </div>
        </div>


      </div>

      {/* lineTwo */}
      <div className="hidden max-lg:block hover:bg-[#bab9b7] bg-white w-16 rounded-2xl" onClick={handleClick}><HiMenuAlt2 className="text-[30px] m-auto max-lg:-mt-8 max-lg:pt-1 max-lg:pb-1 max-md:-mt-12"/></div>

      <div className={`max-lg:absolute max-lg:top-[18%] max-lg:z-10 max-lg:transition-all max-lg:duration-300 max-lg:ease-in max-lg:w-0 max-lg:bg-[#FFF9F3] max-lg:overflow-hidden max-lg:h-[50%] ${showNav && "max-lg:w-[32%] max-sm:w-[40%] max-lg:z-10"}`}>

        <ul className='flex text-[15px] space-x-16 pt-5 font-[500] max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-lg:text-center'>
          <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-[#eb6d20] hover:border-b-2 hover:border-b-[#eb6d20]'>
            Jewelry & Accessories
          </li>
          <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-[#eb6d20] hover:border-b-2 hover:border-b-[#eb6d20]'>
            Clothing & Shoes
          </li>
          <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-[#eb6d20] hover:border-b-2 hover:border-b-[#eb6d20]'>
            Home & Living
          </li>
          <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-[#eb6d20] hover:border-b-2 hover:border-b-[#eb6d20]'>
            Wedding & Party
          </li>
          <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-[#eb6d20] hover:border-b-2 hover:border-b-[#eb6d20]'>
            Toys & Entertainment
          </li>
          <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-[#eb6d20] hover:border-b-2 hover:border-b-[#eb6d20]'>
            Art & Collectibles
          </li>
          <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-[#eb6d20] hover:border-b-2 hover:border-b-[#eb6d20]'>
            Craft Supplies & Tools
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
