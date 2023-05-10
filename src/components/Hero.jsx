import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Hero = () => {
  const Main = styled.div`
    background-color: #f5f6f8;
    height: 25rem;
    @media (max-width: 1023px)  {
      height: 18rem;
    }
  `;

  const Circle = styled.div`
    background-color: #7e7e7e;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: relative;
  `;

  return (
    <Main>
      <div className='Hero relative w-[94%] max-w-7xl m-auto max-sm:w-[96%]'>
        <img className='HeroImg pt-10' src='/images/HeroImg.png' alt='' />
        <h1 className='heroHead text-[35px] text-white font-semibold absolute top-[45%] left-[3%]  max-lg:text-[30px] max-sm:text-[24px]'>
          Whats New!
        </h1>
        <p className=' heroTxt text-[18px] absolute top-[54%] left-[3%] text-white font-extralight max-lg:text-[18px] max-sm:text-[13px] max-sm:pt-2'>
          Just millions of people selling the things they love.
        </p>

        <div className='arrowBtn absolute top-[43%] right-[3%]'>
          <Circle className='mb-3 hover:bg-[#b1afaf] cursor-pointer'>
            <MdOutlineArrowForwardIos className='text-white absolute top-3.5 left-3.5 text-xl' />
          </Circle>
          <Circle className="hover:bg-[#b1afaf] cursor-pointer">
            <MdOutlineArrowBackIosNew className='text-white absolute top-3.5 left-3.5 text-xl' />
          </Circle>
        </div>
      </div>
    </Main>
  );
};

export default Hero;
