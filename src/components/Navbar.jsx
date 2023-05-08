
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  const Btn = styled.button`
    background-color: #eb6d20;
    color: #fff;
    font-size: 13px;
    padding: 5px;
    border-radius: 20px;
    width: 4.5rem;
    height: 2rem;
  `;
  return (
    <nav className='bg-[#FFF9F3] pl-40 pr-40 pb-30'>
      <div className='lineOne flex pt-5 space-x-10 items-center'>
        <img className='pl-32' src='/images/Logo.png' alt='logo' />
        <div className='bg-white flex text-sm bg-transparent w-[45rem] h-10 rounded-3xl'>
          <div className='bg-[#F5F6F8] px-10 pt-2.5 rounded-3xl flex gap-1 w-[14rem] cursor-pointer hover:bg-[#dddddd]'>
            All categories
            <BiChevronDown className='text-xl cursor-pointer' />
          </div>
          <input
            type='search'
            name='Search'
            placeholder='Search anything'
            className='text-center w-[40rem] ml-5 rounded-3xl'
          />
          <CiSearch className='text-4xl pt-1 cursor-pointer pr-3' />
        </div>
        <Btn className='hover:underline'>Help</Btn>
        <div className='flex items-center gap-2 text-sm cursor-pointer hover:underline'>
          <RxPerson className='text-lg hover:text-red-400 cursor-pointer' />
          Account
        </div>
        <div className='flex items-center gap-2 text-sm cursor-pointer hover:underline'>
          <BiShoppingBag className='text-lg hover:text-red-400 cursor-pointer' />
          Shopping
        </div>
      </div>

      {/* lineTwo */}

      <div className='lineTwo'>
        <ul className="flex space-x-16 pl-32">
          <li className="text-sm pt-7 pb-6 cursor-pointer hover:text-[#eb6d20] hover:underline">Jewelry & Accessories</li>
          <li className="text-sm pt-7 pb-6 cursor-pointer hover:text-[#eb6d20] hover:underline">Clothing & Shoes</li>
          <li className="text-sm pt-7 pb-6 cursor-pointer hover:text-[#eb6d20] hover:underline">Home & Living</li>
          <li className="text-sm pt-7 pb-6 cursor-pointer hover:text-[#eb6d20] hover:underline">Wedding & Party</li>
          <li className="text-sm pt-7 pb-6 cursor-pointer hover:text-[#eb6d20] hover:underline">Toys & Entertainment</li>
          <li className="text-sm pt-7 pb-6 cursor-pointer hover:text-[#eb6d20] hover:underline">Art & Collectibles</li>
          <li className="text-sm pt-7 pb-6 cursor-pointer hover:text-[#eb6d20] hover:underline">Craft Supplies & Tools</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
