

const Menu = (props) => {

  return (
  
    <section className="m-auto"> 
      <div className='menuImg px-2 py-2 rounded-lg shadow-lg shadow-gray-500 hover:bg-slate-200 cursor-pointer w-[90%] max-lg:w-[90%] max-lg:ml-[5%]'>
        <img className='' src={props.Data.img} alt='' />
      </div>
      <p className='text-[15px] font-normal text-center pt-7 mb-5 cursor-pointer hover:underline max-lg:text-[14.6px] max-lg:font-medium'>
        {props.Data.p}
      </p>
</section>
  );
};

export default Menu;
