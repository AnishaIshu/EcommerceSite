import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Hero = () => {
  const Main = styled.div`
    background-color: #f5f6f8;
    height: 25rem;
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
      <div className='Hero relative'>
        <img className='pl-72 pt-14 ' src='/images/HeroImg.png' alt='' />
        <h1 className='text-2xl text-white font-semibold absolute top-[20rem] left-[23rem]'>
          Whats New!
        </h1>
        <p className='text-base absolute top-[22.5rem] left-[23rem] text-white font-extralight'>
          Just millions of people selling the things they love.
        </p>

        <div className='arrowBtn absolute top-[20rem] right-[21rem]'>
          <Circle className='mb-3'>
            <MdOutlineArrowForwardIos className='text-white absolute top-3.5 left-3.5 text-xl' />
          </Circle>
          <Circle>
            <MdOutlineArrowBackIosNew className='text-white absolute top-3.5 left-3.5 text-xl' />
          </Circle>
        </div>
      </div>
    </Main>
  );
};

export default Hero;
