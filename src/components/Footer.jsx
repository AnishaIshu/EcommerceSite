import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { CgDribbble } from "react-icons/cg";
import { MdCopyright } from "react-icons/md";
import { HiArrowNarrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className='pl-[20rem] pr-[20rem] pt-10'>
      <div className='flex'>
        <div className='flex-col'>
          <img src='/images/Logo.png' alt='logo' />
          <br />
          <address className='w-28 text-xs font-medium pb-6'>
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
        <div className='flex space-x-32 pt-4 pb-10 pl-52'>
          <div className='Shop'>
            <ul>
              <li className='font-semibold pb-6'>Shop</li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Gift cards
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Site map
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Polka blog
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Login
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Sign in
              </li>
            </ul>
          </div>
          <div className='Sell'>
            <ul>
              <li className='font-semibold pb-6'>Sell</li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Sell on Polka
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Teams
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Forums
              </li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div className='About'>
            <ul>
              <li className='font-semibold pb-6'>About</li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Polka, Inc.
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Policies
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Investors
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Careers
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Press
              </li>
            </ul>
          </div>
          <div className='Help'>
            <ul>
              <li className='font-semibold pb-6'>Help</li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Help Center
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Trust and safety
              </li>
              <li className='font-normal text-sm pb-4 cursor-pointer hover:underline'>
                Privacy settings
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex text-sm pb-5">
       <div className="flex items-center gap-1 hover:underline"> <MdCopyright />2022 Commerce, Inc.</div>
       <div className="pl-64 cursor-pointer">Privacy policy</div>
       <div className="pl-12 text-orange-500 cursor-pointer">Terms of use</div>
       <div className="pl-12 cursor-pointer">Cookies</div>
       <div className="flex items-center gap-2 pl-80 cursor-pointer">Scroll to top <HiArrowNarrowUp /></div>
      </div>
    </footer>
  );
};

export default Footer;
