import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { CgDribbble } from "react-icons/cg";
import { MdCopyright } from "react-icons/md";
import { HiArrowNarrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className='footer pl-[20rem] pr-[20rem] pt-10 max-lg:pl-[3%]'>
      <div className='flex'>
        <div className='flex-col'>
          <img className=" max-md:mt-[16%] max-lg:mt-[15%]" src='/images/Logo.png' alt='logo' />
          <br />
          <address className='w-28 text-[15px] font-medium pb-6 max-lg:text-[14.3px]'>
            Cricklewood,London NW2 6qg, Uk
          </address>
          <div className='socialMedia flex space-x-2 py-5 text-base'>
            <div className='px-1 py-1 rounded-3xl bg-blue-600'>
              <FaFacebookF className='text-white' />
            </div>
            <div className='px-1 py-1 rounded-3xl bg-sky-500'>
              <GrTwitter className='text-white' />
            </div>
            <div className='px-1 py-1 rounded-3xl bg-sky-700'>
              <RiLinkedinFill className='text-white' />
            </div>
            <div className='px-1 py-1 rounded-3xl bg-pink-600'>
              <CgDribbble className='text-white' />
            </div>
          </div>
        </div>

        <div className='flex space-x-32 pt-4 pb-10 pl-52 max-md:pl-16 max-lg:space-x-8'>
          <div className='Shop max-lg:w-[7rem]'>
            <ul>
              <li className='font-semibold pb-6 text-[19px] max-lg:text-[21.5px] max-md:text-[18px]'>Shop</li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Gift cards
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Site map
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Polka blog
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Login
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Sign in
              </li>
            </ul>
          </div>

          <div className='Sell max-lg:w-[7rem]'>
            <ul>
              <li className='font-semibold pb-6 text-[19px]  max-md:text-[18px] max-lg:text-[21.5px]'>Sell</li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Sell on Polka
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Teams
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Forums
              </li>
              <li className="font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] ">Affiliates</li>
            </ul>
          </div>

          <div className='About max-lg:w-[7rem]'>
            <ul>
              <li className='font-semibold pb-6 text-[19px]  max-md:text-[18px] max-lg:text-[21.5px]'>About</li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Polka, Inc.
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Policies
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Investors
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Careers
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Press
              </li>
            </ul>
          </div>

          <div className='Help max-lg:w-[7rem]'>
            <ul>
              <li className='font-semibold pb-6 text-[19px]  max-md:text-[18px] max-lg:text-[21.5px]'>Help</li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-md:text-[14px] max-lg:font-medium'>
                Help Center
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Trust and safety
              </li>
              <li className='font-normal text-[16px] pb-4 cursor-pointer hover:underline max-lg:text-[14.7px] max-lg:font-medium max-md:text-[14px] '>
                Privacy settings
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex text-base pb-5 max-lg:hidden">
       <div className="flex items-center gap-1 hover:underline"> <MdCopyright />2022 Commerce, Inc.</div>
       <div className="pl-64 cursor-pointer">Privacy policy</div>
       <div className="pl-12 text-orange-500 cursor-pointer">Terms of use</div>
       <div className="pl-12 cursor-pointer">Cookies</div>
       <div className="flex items-center gap-2 pl-80 cursor-pointer ">Scroll to top <HiArrowNarrowUp /></div>
      </div>
    </footer>
  );
};

export default Footer;
