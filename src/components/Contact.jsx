import { CgArrowRight } from 'react-icons/cg';


const Contact = () => {
  return (
    <div className='w-[80rem] h-72 mb-10 ml-[20rem] rounded-lg mt-10 bg-[#5959D9]'>
      <h1 className="text-white pl-20 pt-10 text-base font-normal">
        Yes! <br />
        Send me exclusive offers, unique gift ideas, and personalized tips for<br />
        shopping and selling on Commerce.
      </h1> 

      <div className='flex mt-10 ml-[25rem] w-[30rem] bg-white rounded-[10rem]'>
         <input className='py-1 rounded-[1rem] text-xs w-[23rem] pl-5' type="email" name="" placeholder="Drop Your Email" id="" />
         <button className='flex items-center my-1 bg-[#EB8426] px-4  rounded-[1rem] text-white text-xs py-1 hover:bg-[#ff8a1c]'>Subscribe <CgArrowRight className='text-white pl-1 text-2xl pt-[3px]'/></button>
      </div>

      <h6 className='text-xs text-white text-center mt-7 underline cursor-pointer'>First order only. You’re ready?</h6>
    </div>
  );
};

export default Contact;
