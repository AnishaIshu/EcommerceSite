import { CgArrowRight } from 'react-icons/cg';


const Contact = () => {
  return (
    <div className='w-[80%] max-w-7xl m-auto pb-3 mb-5 max-md:w-[90%] rounded-lg mt-10 bg-[#5959D9] max-lg:ml-[5%] max-lg:mr-[5%] max-lg:w-[57rem] '>
      <h1 className="text-white pl-20 pb-16 pt-14  text-[17px] font-normal max-lg:pl-12 max-lg:text-[16px]">
        Yes! <br />
        Send me exclusive offers, unique gift ideas, and personalized tips for<br />
        shopping and selling on Commerce.
      </h1> 

      <div className='flex w-[30%] mb-9 m-auto bg-white rounded-[10rem] max-lg:w-[35%] max-md:w-[50%]'>
         <input className='py-1 rounded-[1rem] text-[16px] w-[23rem] pl-5' type="email" name="" placeholder="Drop Your Email" id="" />
         <button className='flex items-center my-1 bg-[#EB8426] px-3 mr-1 rounded-[1rem] ml-1 text-white text-[16px] py-1 hover:bg-[#ff8a1c] max-lg:text-[15px] max-lg:pr-[3px]'>Subscribe <CgArrowRight className='text-white pl-1 text-2xl pt-[3px]'/></button>
      </div>

      <h6 className='text-[14px] text-white text-center mt-7 pb-4 underline cursor-pointer max-lg:text-[15px]'>First order only. You’re ready?</h6>
    </div>
  );
};

export default Contact;


// mt-10 ml-[25rem] w-[30rem] 