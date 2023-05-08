// import styled from "styled-components";

const Option = (props) => {
    console.log(props)
  return (
    <div className='optionBox bg-[#f1f1f1] w-[24rem] px-5 py-5 rounded-md cursor-pointer hover:bg-[#e2e1e1]'>
      <div className='optionBoxOne flex items-center space-x-14'>
        <div className='optionBoxTxt'>
          <h1 className='lg leading-5 pb-3 font-medium w-[7rem]'>
            {props.data.h1}
          </h1>
          <p className='text-xs w-40'>
            {props.data.p}
          </p>
        </div>
        <div className='optionBoxImg w-28'>
        <img src={props.data.img} alt="fhdhfsj"/>
          
        </div>
      </div>
    </div>
  );
};

export default Option;
