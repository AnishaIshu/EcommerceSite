// import styled from "styled-components";
// import './MediaQueries/Option.css'

const Option = (props) => {
    console.log(props)
  return (
    <div className='optionBox bg-[#f1f1f1] w-[94%] my-4 max-w-7xl m-auto px-5 py-5 rounded-md cursor-pointer hover:bg-[#e2e1e1] max-md:mb-3'>
      <div className='optionBoxOne flex items-center max-lg:space-x-20 max-lg:flex-col max-lg:text-center max-lg:items-center'>
        <div className='optionBoxTxt max-lg:order-2'>
          <h1 className='leading-5 pb-3 font-medium w-[60%] text-[18px] max-lg:w-[100%]'>
            {props.data.h1}
          </h1>
          <p className='text-[13.8px] w-[90%] leading-4 max-lg:w-[100%]'>
            {props.data.p}
          </p>
        </div>
        <div className='optionBoxImg'>
        <img src={props.data.img} alt="fhdhfsj" className='max-lg-order-1 max-lg:pb-6 max-lg:-ml-10 max-md:-mb-6 max-md:-ml-10'/>
          
        </div>
      </div>
    </div>
  );
};

export default Option;
